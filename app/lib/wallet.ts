import { PublicKey } from "@solana/web3.js";
import { Connection, GetProgramAccountsFilter } from "@solana/web3.js";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";

const solanaConnection = new Connection(process.env.RPC_URL!);
const DEFAULT_TOKTN_LOGO = '/images/default-token.jpg';
const SOLANA_LOGO = '/images/wallet-icon.png';

interface TokenMetadataEntry {
    symbol: string;
    name: string;
    logo: string;
}

interface SplTokenAccount {
    tokenAccount: string;
    mintAddress: string;
    balance: number;
}

interface Asset extends SplTokenAccount {
    symbol: string;
    name: string;
    logo: string;
}

const getTokenMetadata = async () => {
    try {
      const url = "https://token.jup.ag/all";
      const response = await fetch(url);
      const tokens = await response.json();
  
      const tokenMetadata: { [key: string]: TokenMetadataEntry } = {};
      tokens.forEach((token: { address: string; symbol: string; name: string; logoURI?: string }) => {
        tokenMetadata[token.address] = {
          symbol: token.symbol,
          name: token.name,
          logo: token.logoURI || "",
        };
      });
  
      return tokenMetadata;
    } catch (error) {
      console.error("Error fetching token metadata:", error);
      return {};
    }
  };

export const getAssets = async (publicKey: string) => {
    try {
        const publicKeyObj = new PublicKey(publicKey);

        const solBalanceLamports = await solanaConnection.getBalance(publicKeyObj);
        const solBalance = solBalanceLamports / 1e9; // Convert lamports to SOL

        const filters: GetProgramAccountsFilter[] = [
            { dataSize: 165 },
            {
                memcmp: {
                    offset: 32,
                    bytes: publicKey,
                },
            },
        ];
        const accounts = await solanaConnection.getParsedProgramAccounts(TOKEN_PROGRAM_ID, { filters });

        const splTokens: SplTokenAccount[] = accounts.map((account) => {
            const parsedAccountInfo = account.account.data as unknown as {
              parsed: {
                info: {
                  mint: string;
                  tokenAmount: {
                    uiAmount: number;
                  };
                };
              };
            };
            const mintAddress: string = parsedAccountInfo.parsed.info.mint;
            const tokenBalance: number = parsedAccountInfo.parsed.info.tokenAmount.uiAmount;
          
            return {
              tokenAccount: account.pubkey.toString(),
              mintAddress,
              balance: tokenBalance,
            };
          });

          const tokenMetadata = await getTokenMetadata();

          const assets: Asset[] = splTokens.map((token) => ({
            tokenAccount: token.tokenAccount,
            mintAddress: token.mintAddress,
            balance: token.balance,
            symbol: tokenMetadata[token.mintAddress]?.symbol || "---",
            name: tokenMetadata[token.mintAddress]?.name || "---",
            logo: tokenMetadata[token.mintAddress]?.logo || DEFAULT_TOKTN_LOGO,
          })).filter((asset) => asset.balance > 0);

          return {
            sol: {
              balance: solBalance,
              mintAddress: "So11111111111111111111111111111111111111112",
              symbol: "SOL",
              name: "Solana",
              logo: SOLANA_LOGO,
            },
            tokens: assets,
          };
    } catch (error: unknown) {
        if(error instanceof Error )
        console.error("ERROR:", error.message);
        return { sol: null, tokens: [] };
    }
};