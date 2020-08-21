import React from 'react';

import { FiShoppingCart, FiArrowRight, FiChevronRight } from 'react-icons/fi';
import { useTheme } from 'styled-components';
import { darken } from 'polished';

import {
  Container,
  ShoppingButton,
  Products,
  ProductCard,
  EquityButton,
  LoanButton,
} from './styles';
import Button from '../../../../components/Button';
import { bankProducts } from '../../../../resources';

const BankProducts: React.FC = () => {
  const { colors } = useTheme();

  return (
    <Container>
      <div>
        <ShoppingButton background={colors.lightGrey}>
          <FiShoppingCart size={32} />
          <div>
            <h3>Shopping</h3>
            Aproveite os produtos com cashback!
          </div>
          <FiArrowRight size={24} />
        </ShoppingButton>
        <Products>
          {Object.entries(bankProducts).map(([key, value]) => (
            <ProductCard key={`card-${key}`}>
              <div>{value.icon}</div>
              {key}
            </ProductCard>
          ))}
        </Products>
      </div>
      <div>
        <EquityButton background={colors.primaryDark}>
          <h3>Home Equity Banco Inter</h3>
          <div>
            <ul>
              <li>
                <FiChevronRight color={colors.yellow} />
                <span>Taxa Pré-Fixada 1%</span>
              </li>
              <li>
                <FiChevronRight color={colors.yellow} />
                <span>
                  Até <strong>84 meses</strong> para pagar
                </span>
              </li>
            </ul>
            <Button
              background={colors.yellow}
              color={darken(0.25, colors.yellow)}
            >
              Solicitar agora
            </Button>
          </div>
        </EquityButton>
        <LoanButton background={colors.secondary}>
          <h3>
            <span>Quer ficar livre dos juros altos?</span>
            Empréstimo Consignado, <br /> o crédito para o seu momento
          </h3>
          <div>
            <ul>
              <li>
                <FiChevronRight color={colors.yellow} />
                <span>
                  Taxas a partir de <strong>1,30%</strong> ao mês
                </span>
              </li>
            </ul>
            <Button
              background={colors.yellow}
              color={darken(0.25, colors.yellow)}
            >
              Solicitar agora
            </Button>
          </div>
        </LoanButton>
      </div>
    </Container>
  );
};

export default BankProducts;
