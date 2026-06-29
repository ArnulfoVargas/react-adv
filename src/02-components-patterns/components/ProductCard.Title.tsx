import { CSSProperties, useContext } from "react";
import { ProductContext } from ".";

import styles from "../styles/styles.module.css";

interface Props {
  title?: string;
  className?: string;
  style?: CSSProperties
}

export function ProductTitle({ title, className, style }: Props) {
  const { product } = useContext(ProductContext);
  const titleValue = title ? title : product.title;

  return (
    <span className={`${styles.productDescription} ${className}`} style={style}>
      {titleValue}
    </span>
  );
}
