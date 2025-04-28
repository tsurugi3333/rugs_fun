import { NextRequest, NextResponse } from 'next/server';
import { Connection, PublicKey } from '@solana/web3.js';

interface RequestBody {
  address: string;
  limit?: number;
}

interface Transaction {
  signature: string;
  blockTime: number;
  confirmationStatus: string;
  slot: number;
}

export async function POST(request: NextRequest) {

  const body: RequestBody = await request.json();
  const { address, limit = 10 } = body;
  
  if (!address) {
    return NextResponse.json({ error: 'Wallet address is required' }, { status: 400 });
  }
  
  console.log("address-------------->", address)
  try {
    const connection = new Connection(process.env.SOLANA_RPC_URL || 'https://api.mainnet-beta.solana.com');
    
    console.log("connection----->", connection);
    const signatures = await connection.getSignaturesForAddress(
      new PublicKey(address),
      { limit }
    );
    console.log("signatures----->", signatures);

    const transactions: Transaction[] = signatures.map(sig => ({
      signature: sig.signature,
      blockTime: sig.blockTime || 0,
      confirmationStatus: sig.confirmationStatus || 'unknown',
      slot: sig.slot
    }));
    
    return NextResponse.json({ transactions });
  } catch (error) {
    console.error('Error fetching transactions:', error);
    return NextResponse.json({ error: 'Failed to fetch transactions' }, { status: 500 });
  }
}