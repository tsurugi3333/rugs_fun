'use client';

import Navbar from '../components/Navbar';
import SocialFooter from '../components/SocialFooter';


export default function AlertsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-750 to-gray-800">
      <Navbar activePage="alerts" />
      
      <main className="flex-1 px-6 py-8 flex flex-col items-center">
        <div className="w-full max-w-4xl">
          
          {/* Alerts container */}
          <div className="min-h-150 bg-gray-900 border border-gray-700 rounded-lg overflow-hidden">
            <div className='items-center text-center text-lg mt-6'>Alerts</div>
            
          </div>
        </div>
      </main>
      
      <footer className="py-6">
        <SocialFooter />
      </footer>
    </div>
  );
}