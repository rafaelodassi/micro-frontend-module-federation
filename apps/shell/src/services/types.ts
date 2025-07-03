import { type Product } from 'types';

interface ResponseProducts {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export type { ResponseProducts };
