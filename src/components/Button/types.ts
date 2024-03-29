import React from 'react';

export type ButtonVariants = 'solid' | 'ghost' | 'outline' | 'link';

export type ButtonSizes = 'small' | 'medium' | 'large';

export interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  style?: React.CSSProperties;
  variant?: ButtonVariants;
  size?: ButtonSizes;
  children?: React.ReactNode;
  isLoading?: boolean;
  isDisabled?: boolean;
  isFullWidth?: boolean;
  onClick?: () => void;
}
