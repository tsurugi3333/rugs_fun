'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import LoginButton from './components/LoginButton';
import SocialFooter from './components/SocialFooter';
import Navbar from './components/Navbar';

export default function LoginPage() {
  const router = useRouter();
  
  const handleLogin = () => {
    router.push('/dashboard');
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-750 to-gray-800">
      <Navbar activePage="login"/>
            
      <div className="flex-grow flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md mx-auto flex flex-col items-center">
          <div className="mb-6 flex items-center">
            <Image 
              src="/images/binoculars.svg" 
              alt="Whale Watcher Logo" 
              width={32} 
              height={32} 
            />
            <h1 className="pixel-font text-2xl font-bold ml-2 text-white">WHALE WATCHER</h1>
          </div>
          
          <h2 className="pixel-font text-md text-center mb-10 text-white">TRACK BIG MOVES ON SOLANA IN REAL TIME</h2>
          
          <div className="w-full space-y-4">
            <LoginButton 
              icon="/images/phantom.svg"
              text="Login with Phantom Wallet"
              onClick={handleLogin}
            />
          </div>
        </div>
      </div>
      
      <div className="py-8">
        <SocialFooter />
      </div>
    </div>
  );
}