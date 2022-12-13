export type Product = {
  _id: string;
  name: string;
  image: string;
  description: string;
  category: string;
  variant: string;
  sizes: number[];
};

export interface ProductsState {
  items: Product[];
  singleItem: Product;
  isLoading: boolean;
}
