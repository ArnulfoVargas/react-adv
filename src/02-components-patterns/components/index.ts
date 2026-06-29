export { ProductButtons } from "./ProductCard.Buttons";
export { ProductImage } from "./ProductCard.Image";
export { ProductTitle } from "./ProductCard.Title";
export { ProductContext /*, ProductCard */ } from "./ProductCard";

import { ProductCardHOCProps } from "../interfaces/products.interfaces";
import { ProductCard as ProductCardHOC } from "./ProductCard";
import { ProductButtons } from "./ProductCard.Buttons";
import { ProductImage } from "./ProductCard.Image";
import { ProductTitle } from "./ProductCard.Title";

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons,
});

export default ProductCard;
