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

export const AnimatedDropdown = styled(motion.nav)`
  ${({ theme }) => css`
    position: absolute;
    z-index: 10;
    top: 128%;
    right: 0;
    min-width: 14.6rem;
    border-radius: ${theme.radii.small};
    background: ${theme.colors.lightGrey};
    box-shadow: 0 0.6rem 0.6rem rgba(0, 0, 0, 0.12);

    ::before {
      content: '';
      display: block;
      position: absolute;
      top: -18%;
      right: 11%;
      border-color: ${`transparent transparent ${theme.colors.lightGrey} transparent `};
      border-style: solid;
      border-width: 0.8rem;
    }
  `}
`;

export const NavButton = styled(Button)`
  ${({ theme }) => css`
    width: 100%;
    padding: 1.2rem 1.6rem;
    justify-content: space-between;
    font-size: ${theme.fontSizes.default};
    background: ${theme.colors.lightGrey};

    :hover {
      background: ${theme.colors.background};
    }

    :first-child {
      border-radius: ${theme.radii.smallTop};
    }

    :last-child {
      border-radius: ${theme.radii.smallBottom};
    }
  `}
`;
