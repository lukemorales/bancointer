import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  margin-left: 2.4rem;
  width: 100%;

  @media (max-width: 670px) {
    margin: 2.4rem 0 0;
  }
`;
