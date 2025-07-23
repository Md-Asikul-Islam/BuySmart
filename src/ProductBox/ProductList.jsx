import { useContext, useState } from "react";
import ProductCard from "./ProductCard";
import ProductListHeader from "./ProductListHeader";
import { CartContext } from "../Context";

const ProductList = () => {
  const { products, isInCart, addToCart, removeFromCart } = useContext(CartContext);
  const [sortOption, setSortOption] = useState("popularity");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "popularity") return b.popularity - a.popularity;
    if (sortOption === "newest") return new Date(b.createdAt) - new Date(a.createdAt);
    if (sortOption === "price") return a.price - b.price;
    return 0;
  });

  return (
    <div className="lg:col-span-2">
      <ProductListHeader
        sortOption={sortOption}
        setSortOption={setSortOption}
        setSearchTerm={setSearchTerm}
      />

      {sortedProducts.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {sortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isInCart={isInCart}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 py-10">No Products Found</p>
      )}
    </div>
  );
};

export default ProductList;

