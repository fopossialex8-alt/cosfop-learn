import React from 'react';
import { motion } from 'motion/react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  isLoading?: boolean;
  icon?: LucideIcon;
}

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  isLoading, 
  icon: Icon,
  className = '',
  ...props 
}: any) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20 disabled:opacity-50 disabled:cursor-not-allowed';
  
  const variants: any = {
    primary: 'cta-gradient text-white shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:-translate-y-0.5',
    secondary: 'orange-gradient text-white shadow-lg shadow-secondary/20 hover:shadow-secondary/30 hover:-translate-y-0.5',
    outline: 'border-2 border-primary/20 text-primary hover:bg-primary/5',
    ghost: 'text-muted hover:bg-muted/5 hover:text-ink',
    danger: 'bg-red-500 text-white hover:bg-red-600 shadow-lg shadow-red-500/20',
  };

  const sizes: any = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-5 py-2.5',
    lg: 'px-8 py-3.5 text-lg',
    icon: 'p-2.5',
  };

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
      ) : Icon && <Icon className={`${children ? 'mr-2' : ''} w-5 h-5`} />}
      {children}
    </motion.button>
  );
};

export const Card = ({ children, className = '', hover = true, ...props }: any) => (
  <div 
    className={`bg-surface rounded-2xl border border-ink/5 card-shadow overflow-hidden transition-all duration-300 ${hover ? 'hover:shadow-xl hover:shadow-ink/5 hover:-translate-y-1' : ''} ${className}`}
    {...props}
  >
    {children}
  </div>
);

export const Badge = ({ children, variant = 'primary' }: any) => {
  const variants: any = {
    primary: 'bg-primary/10 text-primary',
    secondary: 'bg-secondary/10 text-secondary',
    success: 'bg-emerald-500/10 text-emerald-600',
    warning: 'bg-amber-500/10 text-amber-600',
  };
  return (
    <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${variants[variant]}`}>
      {children}
    </span>
  );
};

export const Input = ({ label, error, ...props }: any) => (
  <div className="space-y-1.5 w-full">
    {label && <label className="text-sm font-medium text-muted ml-1">{label}</label>}
    <input
      className={`w-full px-4 py-3 rounded-xl bg-background border border-ink/10 focus:border-primary focus:ring-4 focus:ring-primary/5 transition-all outline-none ${error ? 'border-red-500' : ''}`}
      {...props}
    />
    {error && <p className="text-xs text-red-500 ml-1">{error}</p>}
  </div>
);
