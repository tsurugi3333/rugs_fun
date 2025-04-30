'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | Diddy Memes',
  description: 'Frequently Asked Questions about Diddy Memes',
};

interface FAQItem {
  question: string;
  answer: string;
}

const FAQPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData: FAQItem[] = [
    {
      question: 'Is this an official Diddy product?',
      answer: 'No, Diddy Memes is not officially affiliated with Sean "Diddy" Combs. It is a community-created cryptocurrency meme token inspired by the artist.'
    },
    {
      question: 'What is the official contract address and symbol for the Diddy Meme?',
      answer: 'The official contract address for Diddy Meme is 0x1234567890abcdef1234567890abcdef12345678 (always verify this on our official channels). The token symbol is $DIDDY.'
    },
    {
      question: 'How can I get Diddy Memes?',
      answer: 'You can acquire Diddy Memes through decentralized exchanges like Uniswap, SushiSwap, or PancakeSwap depending on the blockchain network. Always ensure you are using the correct contract address and take security precautions.'
    },
    {
      question: 'What is a meme?',
      answer: 'A meme is a concept, behavior, or idea that spreads from person to person within a culture. In cryptocurrency, meme coins are tokens created as a joke or for fun, often inspired by internet memes, celebrities, or popular culture references.'
    },
    {
      question: 'Why do I need to perform KYC/AML when I buy on Moonshot?',
      answer: 'KYC (Know Your Customer) and AML (Anti-Money Laundering) procedures are regulatory requirements on certain platforms like Moonshot to prevent fraud, identity theft, and illegal activities. These measures help ensure compliance with financial regulations.'
    },
    {
      question: 'Which blockchain network are the Diddy Memes minted?',
      answer: 'Diddy Memes are currently minted on the Ethereum blockchain as ERC-20 tokens. This allows for wide compatibility with popular wallets and decentralized exchanges.'
    },
    {
      question: 'What are the Diddy Memes?',
      answer: 'Diddy Memes are cryptocurrency tokens that combine internet meme culture with the persona of music mogul Sean "Diddy" Combs. They are designed for community engagement and as a fun way to participate in the crypto space.'
    },
    {
      question: 'What else should I know?',
      answer: 'Always do your own research (DYOR) before investing in any cryptocurrency, including meme tokens. Meme coins can be highly volatile. Never invest more than you can afford to lose, secure your wallet properly, and be aware of potential scams or impersonators.'
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
              <span className="text-xl font-medium text-gray-900">{faq.question}</span>
              <Plus 
                className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
                  openIndex === index ? 'transform rotate-45' : ''
                }`}
              />
            </button>
            
            {openIndex === index && (
              <div className="mt-2 pr-12">
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;