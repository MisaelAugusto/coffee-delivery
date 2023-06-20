const formatNumber = {
  currency: (value: number) =>
    value.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })
};

export default formatNumber;
