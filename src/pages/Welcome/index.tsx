import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { transform } from 'framer-motion';

import { AnimatedContainer, Form, SignInButton } from './styles';
import AuthLayout from '../_layouts/auth';
import { ANIMATION } from './animations';

import { BancoInter } from '~/assets/images';
import useAuth from '~/contexts/auth';

const Welcome: React.FC = () => {
  const [inputValue, setInputValue] = useState('');

  const history = useHistory();
  const { signIn } = useAuth();
  const { colors } = useTheme();

  const inputRange = [0, 4];
  const outputRange = [colors.lightGrey, colors.primary];
  const animateBackground = transform(inputRange, outputRange);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    signIn(inputValue);
    history.push('/dashboard');
  };

  return (
    <AuthLayout background={animateBackground(inputValue.length)}>
      <AnimatedContainer
        variants={ANIMATION}
        initial="unMounted"
        animate="mounted"
        exit="unMounted"
      >
        <h1>
          <BancoInter />
        </h1>
        <h2>
          Seja bem vindo ao estudo de redesign da interface do Banco Inter.
        </h2>
        <Form onSubmit={handleFormSubmit}>
          <label htmlFor="name">
            <input
              type="text"
              name="name"
              placeholder="Digite seu nome para entrar"
              value={inputValue}
              onChange={handleInputChange}
            />
          </label>
          <SignInButton type="submit" disabled={!inputValue}>
            Entrar no App
          </SignInButton>
        </Form>
      </AnimatedContainer>
    </AuthLayout>
  );
};

export default Welcome;
