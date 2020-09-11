import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react';

import { Container } from './styles';

export type ButtonVariants = 'secondary' | 'transparent';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariants;
  background?: string;
  color?: string;
};

const Button = (props: PropsWithChildren<ButtonProps>) => {
  const { children, variant, type, ...rest } = props;

  return (
    <Container type={type || 'button'} variant={variant} {...rest}>
      {children}
    </Container>
  );
};

export default Button;
