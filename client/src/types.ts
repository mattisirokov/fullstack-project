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
  allitems: Product[];
  singleItem: Product;
  isLoading: boolean;
}

export type ProductData = {
  _id?: string;
  name: string;
  image: string;
  description: string;
  category: string;
  variant: string;
  sizes: number[];
};

export type User = {
  _id: string;
  firstname: string;
  surname: string;
  email: string;
  isBanned: boolean;
  isAdmin: boolean;
};

export type UpdatedUser = {
  _id: string;
  firstname: string;
  surname: string;
  email: string;
  isBanned: boolean;
  isAdmin: boolean;
};

export interface UsersState {
  allusers: User[];
  singleUser: User;
  isLoading: boolean;
}
