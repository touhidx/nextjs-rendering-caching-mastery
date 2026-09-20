import React from "react";
import ProductCard from "../components/ProductCard";

const getProducts = async () => {
  const res = await fetch("http://localhost:5000/products");
  return res.json();
};

const ProductsPage = async () => {
  const products = await getProducts();
  return (
    <div className="grid grid-cols-3 gap-3 my-3">
      {products.map((product) => (
        <ProductCard key={product.id} product={product}></ProductCard>
      ))}
    </div>
  );
};

export default ProductsPage;
