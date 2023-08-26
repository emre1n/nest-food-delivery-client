export enum Currency {
  USD = 'USD',
  EUR = 'EUR',
  TRY = 'TRY',
}

export interface MenuItem {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  deleted: boolean;

  name: string;
  description: string | null;
  price: number;
  image: string;
  currency: Currency;

  categoryId: number;
  category: Category;
}

export interface Category {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  deleted: boolean;
  name: string;
}

export interface Billboard {
  id: number;
  title: string;
  subtitle: string;
  imageUrl: string;
}
