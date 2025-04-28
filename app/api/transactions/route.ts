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
      const recentOnly = searchParams.get('recentOnly') === 'true';
      
      // Only use these if not in recentOnly mode
      const minWalletSize = searchParams.get('minWalletSize') || '0';
      const minPositionSize = searchParams.get('minPositionSize') || '0';
      const page = parseInt(searchParams.get('page') || '1');
      const searchQuery = searchParams.get('search') || '';
      
      const { db } = await connectToDatabase();
      
      const solPrice = 130;
      
      const query: QueryFilter = {};
      let skip = 0;
      
      // If we want recent transactions only, ignore all other filters
      if (!recentOnly) {
        // Apply the original filtering logic
        const minWalletSizeValue = parseFloat(minWalletSize.replace(/[^0-9.]/g, ''));
        const minPositionSizeValue = parseFloat(minPositionSize.replace(/[^0-9.]/g, ''));
        
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
        
        skip = (page - 1) * limit;
      }
      
      // For recentOnly mode, skip stays 0 and query stays empty
      
      // For recentOnly, we need to know the total count for proper pagination
      const totalTransactions = await db.collection('transactions').countDocuments(query);
      
      // Get transactions with pagination
      const transactions = await db
        .collection<TransactionDocument>('transactions')
        .find(query)
        .sort({ _id: -1 }) // Sort by most recent
        .skip(skip)
        .limit(limit)
        .toArray();
      
      const totalPages = Math.ceil(totalTransactions / limit);
      
      const transformedTransactions = transactions.map((transaction, index) => {
        const dollarValue = (transaction.balanceChange * solPrice).toFixed(1);
        
        const shortWallet = transaction.wallet;
        
        const walletSizeInDollars = (transaction.preBalance * solPrice).toFixed(0);
        const formattedWalletSize = `$${walletSizeInDollars.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
        
        return {
          id: recentOnly ? index + 1 : (page - 1) * limit + index + 1,
          wallet: shortWallet,
          walletSize: formattedWalletSize,
          amount: `${Math.abs(transaction.balanceChange)}SOL`,
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