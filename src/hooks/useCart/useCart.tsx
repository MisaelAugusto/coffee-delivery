import {
  type PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState
} from 'react';

interface CartContextType {
  coffees: Coffee[];
  handleIncreaseCoffeeQuantity: (coffeeId: number) => void;
  handleDecreaseCoffeeQuantity: (coffeeId: number) => void;
  handleAddCoffeeToCart: (coffeeId: number) => void;
}

const CartContext = createContext<CartContextType>({} as CartContextType);

export const CartProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [coffees, setCoffees] = useState<Coffee[]>([]);

  const handleIncreaseCoffeeQuantity = useCallback((coffeeId: number) => {
    setCoffees((previousState) =>
      previousState.map((coffee) => ({
        ...coffee,
        ...(coffee.id === coffeeId && { quantity: coffee.quantity + 1 })
      }))
    );
  }, []);

  const handleDecreaseCoffeeQuantity = useCallback((coffeeId: number) => {
    setCoffees((previousState) =>
      previousState.map((coffee) => ({
        ...coffee,
        ...(coffee.id === coffeeId && { quantity: coffee.quantity - 1 })
      }))
    );
  }, []);

  const handleAddCoffeeToCart = useCallback((coffeeId: number) => {
    // TODO
  }, []);

  const value = useMemo(
    () => ({
      coffees,
      handleIncreaseCoffeeQuantity,
      handleDecreaseCoffeeQuantity,
      handleAddCoffeeToCart
    }),
    [coffees, handleAddCoffeeToCart, handleDecreaseCoffeeQuantity, handleIncreaseCoffeeQuantity]
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
