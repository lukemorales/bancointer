import React, { useState } from 'react';

import { FiCreditCard, FiFileText, FiEye, FiEyeOff } from 'react-icons/fi';

import {
  Container,
  Card,
  Header,
  DataWrapper,
  LeftData,
  RightData,
  DataValue,
} from './styles';
import { PlataformaPaiIcon } from '../../../../assets/images/icons';
import CreditCardIllustration from '../../../../assets/images/illustrations/card-illustration.png';
import Button from '../../../../components/Button';

const AccountSummary: React.FC = () => {
  const [displayStatement, setDisplayStatement] = useState(true);
  const [displayInvestments, setDisplayInvestments] = useState(true);

  return (
    <Container>
      <Card>
        <Header iconStroke>
          <FiFileText />
          <h3>Extrato</h3>
          <Button
            onClick={() => setDisplayStatement((prevState) => !prevState)}
            variant="transparent"
          >
            {displayStatement ? <FiEyeOff /> : <FiEye />}
          </Button>
        </Header>

        <DataWrapper>
          <LeftData>Gráfico</LeftData>
          <RightData>
            <span>Receita</span>
            <DataValue income>
              {displayStatement ? 'R$ 8.552,22' : '---'}
            </DataValue>
            <span>Despesas</span>
            <DataValue outcome>
              {displayStatement ? 'R$ 7.948,55' : '---'}
            </DataValue>
          </RightData>
        </DataWrapper>
      </Card>
      <Card>
        <Header iconStroke>
          <FiCreditCard />
          <h3>MasterCard 8430</h3>
        </Header>

        <DataWrapper>
          <LeftData>
            <img
              src={CreditCardIllustration}
              alt="Cartão de Crédito Sem Anuidade"
            />
          </LeftData>
          <RightData>
            <span>Seu cartão é MasterCard e sem anuidade!</span>
          </RightData>
        </DataWrapper>
      </Card>
      <Card>
        <Header iconStroke={false}>
          <PlataformaPaiIcon />
          <h3>Plataforma Aberta Inter</h3>
          <Button
            onClick={() => setDisplayInvestments((prevState) => !prevState)}
            variant="transparent"
          >
            {displayInvestments ? <FiEyeOff /> : <FiEye />}
          </Button>
        </Header>

        <DataWrapper>
          <LeftData>Gráfico</LeftData>
          <RightData>
            <span>Total investido</span>
            <DataValue>{displayInvestments ? 'R$ 5.750,00' : '---'}</DataValue>
            <span>Evolução no mês</span>
            <DataValue>{displayInvestments ? '20%' : '---'}</DataValue>
          </RightData>
        </DataWrapper>
      </Card>
    </Container>
  );
};

export default AccountSummary;
