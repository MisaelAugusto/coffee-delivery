export {};

declare global {
  type CoffeeTag = 'Tradicional' | 'Com leite' | 'Gelado' | 'Alcoólico' | 'Especial';

  interface Coffee {
    image: string;
    tags: CoffeeTag[];
    title: string;
    description: string;
    price: number;
    quantity: number;
  }
}
