'use client';

import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function PhantomLoginButton() {
  const { connected, publicKey } = useWallet();
  const router = useRouter();
  
  useEffect(() => {
    if (connected && publicKey) {
      router.push('/dashboard');
    }
  }, [connected, publicKey, router]);

  return (
    <div className="w-full">
      <WalletMultiButton className="wallet-adapter-button-custom">
        <div className="flex items-center justify-center w-full">
          <span>Login with Phantom Wallet</span>
        </div>
      </WalletMultiButton>
    </div>
  );
}