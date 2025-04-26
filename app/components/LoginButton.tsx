import Image from 'next/image';

interface LoginButtonProps {
  icon: string;
  text: string;
  onClick: () => void;
}

export default function LoginButton({ icon, text, onClick }: LoginButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-center justify-between bg-gray-800 hover:bg-gray-700 text-white px-4 py-3 rounded transition-colors"
    >
      <div className="flex items-center">
        <Image src={icon} alt={text} width={24} height={24} />
        <span className="ml-3 pixel-font">{text}</span>
      </div>
      <svg
        className="w-5 h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  );
}