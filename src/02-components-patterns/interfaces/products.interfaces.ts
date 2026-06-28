import { ReactElement } from "react";

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (v: number) => void;
  product: Product;
}

export interface ProductCardProps {
  children?: ReactElement | ReactElement[];
  product: Product;
}

export interface ProductCardHOCProps {
  (p: ProductCardProps): ReactElement;
  Title: (p: { title?: string }) => ReactElement;
  Image: (p: { img?: string }) => ReactElement;
  Buttons: () => ReactElement;
}
