import { createContext, CSSProperties, ReactElement } from "react";

import { useProduct } from "../hooks/useProduct";

import {
  Product,
  ProductContextProps,
} from "../interfaces/products.interfaces";
import styles from "../styles/styles.module.css";

export const ProductContext = createContext<ProductContextProps>(
  {} as ProductContextProps,
);
const { Provider } = ProductContext;

interface Props {
  children?: ReactElement | ReactElement[];
  product: Product;
  className?: string;
  style?: CSSProperties;
}

export const ProductCard = ({ product, children, className, style }: Props) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product: product,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
        {/* <ProductImage img={product.img} title={product.title} />

      <ProductTitle title={product.title} />

      <ProductButtons counter={counter} increaseBy={increaseBy} /> */}
      </div>
    </Provider>
  );
};

// ProductCard.Title = ProductTitle;
// ProductCard.Image = ProductImage;
// ProductCard.Buttons = ProductButtons;
