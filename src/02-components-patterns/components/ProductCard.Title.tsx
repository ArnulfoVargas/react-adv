import { useContext } from "react";
import { ProductContext } from ".";

import styles from "../styles/styles.module.css";

export function ProductTitle({ title = "" }) {
  const { product } = useContext(ProductContext);
  const titleValue = title ? title : product.title;

  return <span className={styles.productDescription}>{titleValue}</span>;
}
