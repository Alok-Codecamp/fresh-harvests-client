export type Product = {
  id: string;
  categoryId: string;
  productName: string;
  description: string;
  price: number;
  stock: number;
  images: string[];
  isDeleted: boolean;
  createdAt: string; // ISO Date string
  updatedAt: string; // ISO Date string
};
