export interface Meal {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  deleted: boolean;

  name: string;
  description: string | null;
  price: number;
  image: string | null;

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
