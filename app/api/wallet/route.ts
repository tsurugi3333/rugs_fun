import { NextRequest, NextResponse } from "next/server";
import { getAssets } from "../../lib/wallet";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {walletAddress} = body;

    if(!walletAddress) {
        return NextResponse.json({error: "Wallet address is required"}, {status: 400});
    }

    const assets = await getAssets(walletAddress);
    
    return NextResponse.json({ publicKey: walletAddress, assets }, { status: 200 });
  } catch (error: unknown) {
    if(error instanceof Error)
    return NextResponse.json({ error: error.message }, { status: 401 });
  }
}