import { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariants = 'secondary' | 'transparent';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariants;
  type?: string;
};
