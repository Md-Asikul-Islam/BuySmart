import  { useContext } from "react";
import ProductCard from "./ProductCard";
import ProductListHeader from "./ProductListHeader";
import { CartContext } from "../Context";


const ProductList = () => {
  const {products} = useContext(CartContext)
  return (
    <div className="lg:col-span-2">
        <ProductListHeader />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
