const formatCurrency = (value: number) =>
  new Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' })
    .format(value)
    .replace(/\u00A0/, ' ');

export default formatCurrency;
