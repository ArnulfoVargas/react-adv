import { useContext } from "react";

import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";
import { ProductContext } from ".";


export function ProductImage({ img = "" }) {
  const { product } = useContext(ProductContext);

  const imgSrc = (img ? img : product.img) ?? noImage;

  return <img className={styles.productImg} src={imgSrc} alt={product.title} />;
}