
import { useContext } from "react";
import ProductCard from "./ProductCard";
import ProductListHeader from "./ProductListHeader";
import { CartContext } from "../Context";


const ProductList = () => {
  const {products, isInCart, removeFromCart, addToCart} = useContext(CartContext)
  return (
    <div className="lg:col-span-2">
        <ProductListHeader />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} isInCart={isInCart} removeFromCart={removeFromCart}  addToCart={addToCart}/>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
