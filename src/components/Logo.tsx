import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-2xl'
  };

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {/* Icon */}
      <div className="relative">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary via-primary to-primary/80 flex items-center justify-center shadow-glow">
          <span className="text-primary-foreground font-bold text-sm">AI</span>
        </div>
        {/* Glow effect */}
        <div className="absolute inset-0 w-8 h-8 rounded-lg bg-primary/20 blur-sm animate-pulse"></div>
      </div>
      
      {/* Text */}
      <div className="flex flex-col">
        <h1 className={`font-extrabold bg-gradient-to-r from-primary via-primary to-primary/80 bg-clip-text text-transparent tracking-tight ${sizeClasses[size]}`}>
          AI NEWS INSIGHT
        </h1>
        <p className="text-xs text-muted-foreground font-light">
          Macro Perspective
        </p>
      </div>
    </div>
  );
};

export default Logo; 