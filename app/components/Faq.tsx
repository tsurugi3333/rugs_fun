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
      question: 'Is this the actual Diddy Meme?',
      answer: 'Yes, this is the only official meme project associated with Sean “Diddy” Combs — a cultural drop at the intersection of entertainment and internet history.'
    },
    {
      question: 'What is the official contract address and symbol for the Diddy Meme?',
      answer: (<>
        <p className='w-full break-words overflow-hidden text-ellipsis'>CA:</p>
        <p>Symbol:$Diddy</p>
      </>),
    },
    {
      question: 'Where can I get the Diddy Memes?',
      answer: 'The easiest way to get Diddy Memes is through Moonshot. Just sign up with your email, fund your account using Apple Pay, card, Venmo, or Solana/USDC — and you’ll receive your $DIDDY in minutes.'
    },
    {
      question: 'Why do I need to perform KYC/AML when I buy on Moonshot?',
      answer: (<>
        <p >Moonshot partners with regulated third-party services like MoonPay to process payments securely — whether you’re using USD, Apple Pay, or crypto.</p>
        <p className='mt-4'>These providers are required to perform standard KYC/AML and fraud checks under financial regulations. We don’t store any of your personal data on our website. All purchases are handled by Moonshot, and by transacting, you’re entering into an agreement directly with them, independent of us.</p>
      </>)
    },
    {
      question: 'What should I know before getting the Diddy Memes?',
      answer: (<>
        <p>Diddy Memes should only be purchased for the social, cultural, and entertainment benefit you derive from expressing such enthusiasm or engagement.</p>
        <p className='mt-4'> Diddy Memes are not intended to be, or to be the subject of, an investment opportunity, investment contract, or security of any type</p>
      </>)
    },
    {
      question: 'What exactly is a meme?',
      answer: (<>
        <p>According to Merriam-Webster, a meme is “an idea, behavior, style, or usage that spreads from person to person within a culture.” In the context of crypto, a meme is more than just a joke — it’s a powerful cultural signal.</p>
        <p className='mt-4'>  Memes like $DIDDY blend humor, community, and viral momentum to create digital assets that move through the internet at the speed of culture.</p>
      </>)
    },
    {
        question: 'Which blockchain network are the Diddy Memes minted?',
        answer: 'Solana'
    },
    {
      question: 'Is there anything else I should be aware of?',
      answer: (
        <>
          You can find our important disclosures {' '}
          <Link 
            href="/terms-and-policy" 
            className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
          >
            [Here]
          </Link>
        </>
      )
    },
    {
      question: 'Do you have socials where I can follow you to stay updated?',
      answer: (
        <>
          <Link 
            href="https://x.com/diddymemes" 
            className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
          >
            x.com/diddymemes
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
      <h1 className="text-4xl font-bold text-center mb-16 text-black">Frequently Asked Questions</h1>
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