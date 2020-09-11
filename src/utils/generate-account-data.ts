import generateStatements, { GeneratedStatement } from './generate-statements';
import generateInvestments, { Investments } from './generate-investments';

export type AccountData = {
  user: { name: string };
  statements: Array<GeneratedStatement>;
  investments: Investments;
};

export type GenerateAccountData = (name: string) => AccountData;

const generateAccountData: GenerateAccountData = (name) => ({
  user: { name },
  statements: generateStatements(),
  investments: generateInvestments(),
});

export default generateAccountData;
