import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

import Button from '~/components/Button';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2.4rem;
  position: relative;
  cursor: pointer;

  > img {
    width: 4.8rem;
    height: 4.8rem;
  }
`;

export const DropDown = styled(motion.nav)`
  ${({ theme }) => css`
    position: absolute;
    z-index: 10;
    top: 128%;
    right: 0;
    min-width: 14.2rem;
    border-radius: ${theme.radius.small};
    background: ${theme.colors.lightGrey};
    box-shadow: 0 0.6rem 0.6rem rgba(0, 0, 0, 0.12);

    ::before {
      content: '';
      display: block;
      position: absolute;
      top: -33%;
      right: 11%;
      border-color: ${`transparent transparent ${theme.colors.lightGrey} transparent `};
      border-style: solid;
      border-width: 0.8rem;
    }
  `}
`;

export const LogOutButton = styled(Button)`
  ${({ theme }) => css`
    width: 100%;
    padding: 1.2rem 1.6rem;
    justify-content: space-between;
    font-size: ${theme.fontSizes.default};
    background: ${theme.colors.lightGrey};

    :hover {
      background: ${theme.colors.background};
    }
  `}
`;
