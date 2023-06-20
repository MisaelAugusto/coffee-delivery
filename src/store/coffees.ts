import * as coffeesImages from 'assets/coffees';

const coffees: Coffee[] = [
  {
    image: coffeesImages.espresso,
    tags: ['Tradicional'],
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
    quantity: 0
  },
  {
    image: coffeesImages.american,
    tags: ['Tradicional'],
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
    quantity: 0
  },
  {
    image: coffeesImages.creamyEspresso,
    tags: ['Tradicional'],
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
    quantity: 0
  },
  {
    image: coffeesImages.cold,
    tags: ['Tradicional', 'Gelado'],
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
    quantity: 0
  },
  {
    image: coffeesImages.withMilk,
    tags: ['Tradicional', 'Com leite'],
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
    quantity: 0
  },
  {
    image: coffeesImages.latte,
    tags: ['Tradicional', 'Com leite'],
    title: 'Latte',
    description: 'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 12.9,
    quantity: 0
  },
  {
    image: coffeesImages.capuccino,
    tags: ['Tradicional', 'Com leite'],
    title: 'Capuccino',
    description: 'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 12.9,
    quantity: 0
  },
  {
    image: coffeesImages.macchiato,
    tags: ['Tradicional', 'Com leite'],
    title: 'Macchiato',
    description: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: 14.9,
    quantity: 0
  },
  {
    image: coffeesImages.mocaccino,
    tags: ['Tradicional', 'Com leite'],
    title: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 14.9,
    quantity: 0
  },
  {
    image: coffeesImages.hotChocolate,
    tags: ['Especial', 'Com leite'],
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 16.9,
    quantity: 0
  },
  {
    image: coffeesImages.cuban,
    tags: ['Especial', 'Alcoólico', 'Gelado'],
    title: 'Cubano',
    description: 'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 16.9,
    quantity: 0
  },
  {
    image: coffeesImages.hawaiian,
    tags: ['Especial'],
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 19.9,
    quantity: 0
  },
  {
    image: coffeesImages.arabic,
    tags: ['Especial'],
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 21.9,
    quantity: 0
  },
  {
    image: coffeesImages.irish,
    tags: ['Especial', 'Alcoólico'],
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 21.9,
    quantity: 0
  }
];

const useCoffees = () => {
  return { coffees };
};

export default useCoffees;
