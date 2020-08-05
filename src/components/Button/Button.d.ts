import { ButtonHTMLAttributes } from 'react';

export type ButtonVariants = 'secondary' | 'transparent';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariants;
};
