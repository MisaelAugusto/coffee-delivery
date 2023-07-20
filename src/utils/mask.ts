const mask = {
  cep: (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{5})(\d{1,3})/, '$1-$2')
      .substring(0, 9);
  },
  number: (value: string) => {
    return value.replace(/\D/g, '').substring(0, 5);
  },
  uf: (value: string) => {
    return value.replace(/\d/g, '').substring(0, 2).toUpperCase();
  }
};

export default mask;
