import {
  type PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState
} from 'react';

import useCoffees from 'store/coffees';

interface CartContextType {
  coffees: Coffee[];
  handleIncreaseCoffeeQuantity: (coffeeId: number, inCart?: boolean) => void;
  handleDecreaseCoffeeQuantity: (coffeeId: number, inCart?: boolean) => void;
  handleAddCoffeeToCart: (coffeeId: number) => void;
  handleRemoveCoffeeFromCart: (coffeeId: number) => void;
  resetCoffeesQuantities: () => void;
}

const CartContext = createContext<CartContextType>({} as CartContextType);

export const CartProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { coffees: coffeesList } = useCoffees();

  const [coffees, setCoffees] = useState<Coffee[]>(coffeesList);

  const handleIncreaseCoffeeQuantity = useCallback((coffeeId: number, inCart = false) => {
    setCoffees((previousState) => {
      const quantityToChange = `quantity${inCart ? 'InCart' : ''}` as const;

      return previousState.map((coffee) => ({
        ...coffee,
        ...(coffee.id === coffeeId && {
          [quantityToChange]: coffee[quantityToChange] + 1
        })
      }));
    });
  }, []);

  const handleDecreaseCoffeeQuantity = useCallback((coffeeId: number, inCart = false) => {
    const quantityToChange = `quantity${inCart ? 'InCart' : ''}` as const;

    return setCoffees((previousState) =>
      previousState.map((coffee) => ({
        ...coffee,
        ...(coffee.id === coffeeId && {
          [quantityToChange]: coffee[quantityToChange] - 1
        })
      }))
    );
  }, []);

  const handleAddCoffeeToCart = useCallback((coffeeId: number) => {
    setCoffees((previousState) =>
      previousState.map((coffee) => ({
        ...coffee,
        ...(coffee.id === coffeeId && {
          quantity: 0,
          quantityInCart: coffee.quantity + coffee.quantityInCart
        })
      }))
    );
  }, []);

  const handleRemoveCoffeeFromCart = useCallback((coffeeId: number) => {
    setCoffees((previousState) =>
      previousState.map((coffee) => ({
        ...coffee,
        ...(coffee.id === coffeeId && { quantityInCart: 0 })
      }))
    );
  }, []);

  const resetCoffeesQuantities = useCallback(() => {
    setCoffees((previousState) =>
      previousState.map((coffee) => ({
        ...coffee,
        quantity: 0
      }))
    );
  }, []);

  const value = useMemo(
    () => ({
      coffees,
      handleIncreaseCoffeeQuantity,
      handleDecreaseCoffeeQuantity,
      handleAddCoffeeToCart,
      handleRemoveCoffeeFromCart,
      resetCoffeesQuantities
    }),
    [
      coffees,
      handleAddCoffeeToCart,
      handleDecreaseCoffeeQuantity,
      handleIncreaseCoffeeQuantity,
      handleRemoveCoffeeFromCart,
      resetCoffeesQuantities
    ]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }

  return context;
};

export default useCart;
