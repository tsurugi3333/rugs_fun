'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FAQ | Diddy Memes',
  description: 'Frequently Asked Questions about Diddy Memes',
};

interface FAQItem {
  question: string;
  answer: React.ReactNode; // Changed from string to ReactNode to support JSX elements
}

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      question: 'Is this an official Diddy product?',
      answer: 'Yes, this is the only Official Diddy Meme, by Scan "Diddy" Combs'
    },
    {
      question: 'What is the official contract address and symbol for the Diddy Meme?',
      answer: 'CA:6p6mgHyF7AeE6TZkSmFsko444wqoP15kUScj21jGIFN               Symbol: $Diddy',
    },
    {
      question: 'How can I get Diddy Memes?',
      answer: 'Moonshot is the easiest way. Users sign up with an emal address, can deposit with Apple Pay, debit card, credit card, Venmo, Solana/USDC, and receive your $DIDDY within minutes.'
    },
    {
      question: 'What is a meme?',
      answer: 'Merriam-Websiter-s meme noun: 1: an idea, behavior, style, or usage that spreads from person to person within a culture'
    },
    {
      question: 'Why do I need to perform KYC/AML when I buy on Moonshot?',
      answer: 'Moonshot uses services like "MoonPay" that allow the customer to purchase Diddy Memes with major USD payment methods or other digital assets, subject transactions checks, AML/CFT and anti-fraud controls. Once a customer "Buy Order" has been properliy authorized, the purchasers will receive their Diddy Memes in the wallet address nominated by the customer.'
    },
    {
      question: 'Which blockchain network are the Diddy Memes minted?',
      answer: 'Diddy Memes are currently minted on the Ethereum blockchain as ERC-20 tokens. This allows for wide compatibility with popular wallets and decentralized exchanges.'
    },
    {
      question: 'Which blockchain network are the Diddy Memes minted?',
      answer: 'Solana'
    },
    {
        question: 'What are the Diddy Memes',
        answer: 'Diddy Memes are fungible crypto assets created and tracked on the Solana blockchain.'
    },
    {
      question: 'What else should I know?',
      answer: (
        <>
          Please find important disclosures about the Diddy Meme{' '}
          <Link 
            href="/terms-and-policy" 
            className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
          >
            [Here]
          </Link>
        </>
      )
    }
  ];

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 bg-white">
      <h1 className="text-4xl font-bold text-center mb-16 gradient-text">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b border-gray-200 pb-4">
            <button
              className="flex justify-between items-center w-full text-left py-4 focus:outline-none"
              onClick={() => toggleQuestion(index)}
            >
              <span className="text-xl font-bold text-gray-900">{faq.question}</span>
              <Plus 
                className={`h-5 w-5 text-black transition-transform duration-200 cursor-pointer ${
                  openIndex === index ? 'transform rotate-45' : ''
                }`}
              />
            </button>
            
            {openIndex === index && (
              <div className="mt-2 pr-12">
                <p className="text-gray-900">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;