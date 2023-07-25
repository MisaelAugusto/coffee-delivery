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

  type PaymentMethodId = 1 | 2 | 3;

  interface Address {
    cep: string;
    rua: string;
    numero: string;
    complemento: string;
    bairro: string;
    cidade: string;
    uf: string;
    payment_method_id: number;
  }
}
