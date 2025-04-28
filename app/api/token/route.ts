import {NextResponse, NextRequest} from 'next/server';
import {fetchTokenPrice} from '../../lib/fetchTokenPrice';

export async function POST(request: NextRequest) {
    try{
        const body = await request.json();
        const { addresses } = body;

        if(!Array.isArray(addresses) || addresses.length === 0){
            return NextResponse.json({error: "Invalid or missing token addresses"}, { status: 400});
        }

        const pricePromises = addresses.map((address: string) => fetchTokenPrice(address));
        const tokenPrices = await Promise.all(pricePromises);

        const priceData = addresses.map((address: string, index: number) => ({
            address,
            price: tokenPrices[index],
        }));

        return NextResponse.json({ tokenPrices: priceData }, {status: 200});
    }catch (error: unknown){
        if(error instanceof Error){
            return NextResponse.json({ error: error.message }, { status: 500});    
        }
        return NextResponse.json({error: "Something went wrong"}, {status: 500});
    }
}