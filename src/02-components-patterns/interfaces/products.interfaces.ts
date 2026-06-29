import { ComponentProps, ReactElement } from "react";
import { ProductCard } from "../components/ProductCard";
import { ProductButtons, ProductImage, ProductTitle } from "../components";

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

export interface ProductCardHOCProps {
  (p: ComponentProps<typeof ProductCard>): ReactElement;
  // TS native
  Title: (p: Parameters<typeof ProductTitle>[0]) => ReactElement;
  // React alternative
  Image: (p: ComponentProps<typeof ProductImage>) => ReactElement;
  Buttons: (p: ComponentProps<typeof ProductButtons>) => ReactElement;
}
