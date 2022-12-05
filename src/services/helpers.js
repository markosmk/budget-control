export const formatCurrency = (value, currency) => {
  const numberFormat = new Intl.NumberFormat('en-EN', {
    style: 'currency',
    currency,
  });
  return numberFormat.format(value);
};
