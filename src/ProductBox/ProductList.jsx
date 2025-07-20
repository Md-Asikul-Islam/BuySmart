import React from "react";
import ProductCard from "./ProductCard";
import ProductListHeader from "./ProductListHeader";
import { getProducts } from "../data/products";

const ProductList = () => {
  const products = getProducts();
  return (
    <div className="lg:col-span-2">

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
