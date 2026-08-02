import React from 'react';
import { useTheme } from '../context/ThemeContext';

interface ArshLogoProps {
  variant?: 'full' | 'compact' | 'icon';
  className?: string;
  /** Force a specific logo asset (e.g. dark logo over hero photography) */
  forceMode?: 'light' | 'dark';
}

export const ArshLogo: React.FC<ArshLogoProps> = ({
  variant = 'full',
  className = '',
  forceMode,
}) => {
  const { theme } = useTheme();
  const mode = forceMode ?? theme;
  const src = mode === 'light' ? '/logo-light.png' : '/logo-dark.png';

  if (variant === 'icon') {
    return (
      <img
        src={src}
        alt="Arsh"
        className={`h-10 w-10 object-cover object-top ${className}`}
      />
    );
  }

  if (variant === 'compact') {
    return (
      <img
        src={src}
        alt="Arsh Events & Experiences"
        className={`h-10 w-auto max-w-[140px] object-contain sm:h-14 sm:max-w-[180px] ${className}`}
      />
    );
  }

  return (
    <img
      src={src}
      alt="Arsh Events & Experiences"
      className={`mx-auto h-auto w-full max-w-[220px] object-contain sm:max-w-[280px] ${className}`}
    />
  );
};
