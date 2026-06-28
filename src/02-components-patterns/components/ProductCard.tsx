import { createContext } from "react";

import { useProduct } from "../hooks/useProduct";

import {
  ProductCardProps,
  ProductContextProps,
} from "../interfaces/products.interfaces";
import styles from "../styles/styles.module.css";

export const ProductContext = createContext<ProductContextProps>(
  {} as ProductContextProps,
);
const { Provider } = ProductContext;

export const ProductCard = ({ product, children }: ProductCardProps) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product: product,
      }}
    >
      <div className={styles.productCard}>
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
