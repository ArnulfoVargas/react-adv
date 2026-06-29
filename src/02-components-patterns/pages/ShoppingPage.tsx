import {
  ProductCard,
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components/";

import "../styles/custom-styles.css";

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
        <ProductCard product={product} className="bg-dark">
          <ProductCard.Image
            className="custom-image"
            style={{
              border: "4px solid red",
            }}
          />
          <ProductCard.Title className="text-white bold" />
          <ProductCard.Buttons className="custom-buttons" />
        </ProductCard>

        <ProductCard
          product={product2}
          className="bg-dark"
          style={{ padding: 20 }}
        >
          <ProductImage />
          <ProductTitle
            className="text-white"
            style={{
              fontSize: 20,
            }}
          />
          <ProductButtons />
        </ProductCard>

        <ProductCard product={product2}>
          <ProductImage img="./coffee-mug.png" className="custom-image" />
          <ProductTitle title="Coffee Mug" />
          <ProductButtons
            style={{
              justifyContent: "end",
            }}
          />
        </ProductCard>
      </div>
    </div>
  );
}
