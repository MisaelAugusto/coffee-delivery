import useCoffees from 'store/coffees';

const ESPRESSO_COFFEE_ID = 1;

const useMockedCoffees = () => {
  const { coffees } = useCoffees();

  return coffees.map((coffee) => ({
    ...coffee,
    ...(coffee.id === ESPRESSO_COFFEE_ID && { quantityInCart: 10 })
  }));
};

export default useMockedCoffees;
