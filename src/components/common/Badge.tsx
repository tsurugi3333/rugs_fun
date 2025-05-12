import { FC } from 'react';

interface BadgeProps {
  text: string;
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'info';
  size?: 'sm' | 'md';
}

const Badge: FC<BadgeProps> = ({ text, variant = 'default', size = 'sm' }) => {
  const baseClasses = 'inline-block rounded-full font-medium';
  
  const variantClasses = {
    default: 'bg-gray-700 text-gray-300',
    success: 'bg-green-900 text-green-300',
    warning: 'bg-yellow-900 text-yellow-300',
    danger: 'bg-red-900 text-red-300',
    info: 'bg-blue-900 text-blue-300'
  };
  
  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-3 py-1'
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`;
  
  return (
    <span className={classes}>
      {text}
    </span>
  );
};

export default Badge;