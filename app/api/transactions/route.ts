import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '../../lib/mongodb';

interface TransactionDocument {
  wallet: string;
  preBalance: number;
  postBalance: number;
  balanceChange: number;
  tokenMint: string;
  isBuy: boolean;
  transactionId: string;
  timestamp?: Date;
}

interface QueryFilter {
  preBalance?: { $gte: number };
  balanceChange?: { $gte: number };
  $or?: Array<{
    wallet?: { $regex: string; $options: string };
    tokenMint?: { $regex: string; $options: string };
    transactionId?: { $regex: string; $options: string };
  }>;
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    
    const limit = parseInt(searchParams.get('limit') || '10');
    const page = parseInt(searchParams.get('page') || '1');
    const recentOnly = searchParams.get('recentOnly') === 'true';
    const minWalletSize = searchParams.get('minWalletSize') || '0';
    const minPositionSize = searchParams.get('minPositionSize') || '0';
    const searchQuery = searchParams.get('search') || '';
    
    const { db } = await connectToDatabase();
    
    const solPrice = 145;
    
    const query: QueryFilter = {};
    const skip = (page - 1) * limit;
    
    if (!recentOnly) {
      const minWalletSizeValue = parseFloat(minWalletSize);
      const minPositionSizeValue = parseFloat(minPositionSize);
      
      if (minWalletSizeValue > 0) {
        query.preBalance = { $gte: minWalletSizeValue / solPrice };
      }
      
      if (minPositionSizeValue > 0) {
        query.balanceChange = { $gte: minPositionSizeValue };
      }
      
      if (searchQuery) {
        query.$or = [
          { wallet: { $regex: searchQuery, $options: 'i' } },
          { tokenMint: { $regex: searchQuery, $options: 'i' } },
          { transactionId: { $regex: searchQuery, $options: 'i' } }
        ];
      }
    }
    
    const totalTransactions = await db.collection('transactions').countDocuments(query);
    const totalPages = Math.ceil(totalTransactions / limit);
    
    const transactions = await db
      .collection<TransactionDocument>('transactions')
      .find(query)
      .sort({ timestamp: -1, _id: -1 }) 
      .skip(skip)
      .limit(limit)
      .toArray();
    
    const transformedTransactions = transactions.map((transaction, index) => {

      const dollarValue = (Math.abs(transaction.balanceChange) * solPrice).toFixed(1);
      const walletSizeInDollars = (transaction.preBalance * solPrice).toFixed(0);
      const formattedWalletSize = `$${walletSizeInDollars.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
      
      return {
        id: (page - 1) * limit + index + 1,
        wallet: transaction.wallet,
        walletSize: formattedWalletSize,
        amount: `${Math.abs(transaction.balanceChange).toFixed(2)} SOL`,
        dollarValue: dollarValue.replace(/\B(?=(\d{3})+(?!\d))/g, ','),
        token: transaction.tokenMint,
        isBuy: transaction.isBuy,
        transactionId: transaction.transactionId,
        isAlerted: false 
      };
    });
    
    return NextResponse.json({
      transactions: transformedTransactions,
      pagination: {
        currentPage: page,
        totalPages: totalPages,
        totalItems: totalTransactions
      }
    });
    
  } catch (error) {
    console.error('Error fetching transactions:', error);
    return NextResponse.json(
      { error: 'Failed to fetch transactions' },
      { status: 500 }
    );
  }
}