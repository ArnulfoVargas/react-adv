import { CSSProperties, useContext } from "react";

import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";
import { ProductContext } from ".";

interface Props {
  img?: string;
  className?: string;
  style? : CSSProperties
}

export function ProductImage({ img, className, style }: Props) {
  const { product } = useContext(ProductContext);

  const imgSrc = (img ? img : product.img) ?? noImage;

  return (
    <img
      className={`${styles.productImg} ${className}`}
      style={style}
      src={imgSrc}
      alt={product.title}
    />
  );
}
