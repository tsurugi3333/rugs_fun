import WalletTrackerPageContent from './WalletTrackerPageContent';
import { Suspense } from 'react';

export default function WalletTrackerPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WalletTrackerPageContent />
    </Suspense>
  );
}