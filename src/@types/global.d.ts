export {};

declare global {
  type CoffeeTag = 'Tradicional' | 'Com leite' | 'Gelado' | 'Alcoólico' | 'Especial';

  interface Coffee {
    id: number;
    image: string;
    tags: CoffeeTag[];
    title: string;
    description: string;
    price: number;
    quantity: number;
    quantityInCart: number;
  }

  type TextFieldOnChangeEvent = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;
}
