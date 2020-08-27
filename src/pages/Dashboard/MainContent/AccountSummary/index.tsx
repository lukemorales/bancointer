import React, { useState, useMemo } from 'react';

import { FiCreditCard, FiFileText, FiEye, FiEyeOff } from 'react-icons/fi';
import { ResponsiveLine } from '@nivo/line';
import { ResponsiveBar } from '@nivo/bar';
import { useTheme } from 'styled-components';

import { barChartData, lineChartData } from '~/resources';
import {
  Container,
  Card,
  Header,
  DataWrapper,
  LeftData,
  RightData,
  DataValue,
  CustomTooltip,
} from './styles';

import { PlataformaPaiIcon } from '~/assets/images/icons';
import CreditCardIllustration from '~/assets/images/illustrations/card-illustration.png';
import { ReactComponent as HiddenData } from '~/assets/images/illustrations/hidden-data.svg';
import Button from '~/components/Button';
import { DEFAULT_TRANSITION } from '~/constants';

const containerAnimation = {
  unMounted: { y: -50, opacity: 0 },
  mounted: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.5,
      when: 'beforeChildren',
      staggerChildren: 0.3,
    },
  },
};

const cardsAnimation = {
  unMounted: { y: -25, opacity: 0 },
  mounted: { y: 0, opacity: 1 },
};

type ChartValue = number | React.ReactText | undefined;

const formatChartValue = (value: ChartValue): string => `${value || 0}%`;

const AccountSummary: React.FC = () => {
  const [displayStatement, setDisplayStatement] = useState(true);
  const [displayInvestments, setDisplayInvestments] = useState(true);

  const investmentGrowth = useMemo(() => {
    const [investments] = lineChartData;
    const { y } = investments.data[investments.data.length - 1];
    return formatChartValue(y);
  }, []);

  const { colors } = useTheme();

  return (
    <Container variants={containerAnimation}>
      <Card
        layout
        key="statement"
        variants={cardsAnimation}
        transition={DEFAULT_TRANSITION}
      >
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
          <LeftData>
            {displayStatement ? (
              <ResponsiveBar
                data={barChartData}
                indexBy="month"
                keys={['outcome', 'income']}
                colors={({ id, data }) => data[`${id}Color`]}
                margin={{ top: 8, right: -8, bottom: 24, left: -8 }}
                padding={0.88}
                borderRadius={2}
                axisTop={null}
                axisRight={null}
                axisLeft={null}
                axisBottom={{
                  tickSize: 0,
                  tickPadding: 8,
                  tickRotation: 0,
                }}
                tooltip={(chart) => {
                  const label = chart.id === 'income' ? 'Receita' : 'Despesas';
                  const value = chart.data[chart.id];
                  return (
                    <CustomTooltip
                      rightArrow={chart.index >= 3}
                      leftArrow={chart.index < 3}
                    >
                      {`${label}: R$${value}`}
                    </CustomTooltip>
                  );
                }}
                theme={{
                  tooltip: {
                    container: {
                      background: 'transparent',
                      boxShadow: 'none',
                      padding: 0,
                      borderRadius: 0,
                    },
                    tableCell: {
                      padding: 0,
                    },
                  },
                }}
                animate
                motionStiffness={90}
                motionDamping={15}
                enableGridY={false}
                enableLabel={false}
              />
            ) : (
              <HiddenData />
            )}
          </LeftData>
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
      <Card
        layout
        key="credit-card"
        variants={cardsAnimation}
        transition={DEFAULT_TRANSITION}
      >
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
      <Card
        layout
        key="investments"
        variants={cardsAnimation}
        transition={DEFAULT_TRANSITION}
      >
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
          <LeftData>
            {displayInvestments ? (
              <ResponsiveLine
                data={lineChartData}
                useMesh
                enableArea
                enableCrosshair={false}
                curve="cardinal"
                margin={{ top: 8, right: 8, bottom: 24, left: 12 }}
                xScale={{ type: 'point' }}
                yScale={{
                  type: 'linear',
                  min: 'auto',
                  max: 'auto',
                  reverse: false,
                }}
                tooltip={({ point }) => {
                  return (
                    <CustomTooltip>
                      {formatChartValue(point.data.yFormatted)}
                    </CustomTooltip>
                  );
                }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                  orient: 'bottom',
                  tickSize: 0,
                  tickPadding: 8,
                  tickRotation: 0,
                }}
                axisLeft={null}
                colors={colors.success}
                lineWidth={1.5}
                pointSize={8}
                pointColor={colors.success}
                pointLabel="y"
                pointLabelYOffset={-12}
                enableGridY={false}
              />
            ) : (
              <HiddenData />
            )}
          </LeftData>
          <RightData>
            <span>Total investido</span>
            <DataValue>{displayInvestments ? 'R$ 5.750,00' : '---'}</DataValue>
            <span>Evolução no mês</span>
            <DataValue>
              {displayInvestments ? investmentGrowth : '---'}
            </DataValue>
          </RightData>
        </DataWrapper>
      </Card>
    </Container>
  );
};

export default AccountSummary;
