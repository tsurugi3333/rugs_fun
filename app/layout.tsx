import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { WalletContextProvider } from './providers/wallet-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Whale Watcher',
  description: 'Track big moves on Solana in real time',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-900 text-white min-h-screen`}>
        <WalletContextProvider>
          {children}
        </WalletContextProvider>
      </body>
    </html>
  );
}