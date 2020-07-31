import React from 'react';

import { Container } from './styles';
import { ButtonProps } from './Button';

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  type,
  ...rest
}) => {
  return (
    <Container type={type || 'button'} variant={variant} {...rest}>
      {children}
    </Container>
  );
};

export default Button;
