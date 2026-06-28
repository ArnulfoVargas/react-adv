import {
  ProductCard,
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components/";

const product = {
  id: "1",
  title: "Coffe Mug - Card",
  img: "./coffee-mug.png",
};

const product2 = {
  id: "2",
  title: "No image",
  // img: "./coffee-mug.png",
};

export default function ShoppingPage() {
  return (
    <div>
      <h1>Shopping store</h1>
      <hr />

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <ProductCard product={product}>
          <ProductCard.Image />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={product2}>
          <ProductImage />
          <ProductTitle />
          <ProductButtons />
        </ProductCard>

        <ProductCard product={product2}>
          <ProductImage img="./coffee-mug.png" />
          <ProductTitle title="Coffee Mug" />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
}
