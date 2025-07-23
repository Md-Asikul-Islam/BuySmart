const ProductListHeader = ({ sortOption, setSortOption }) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-2xl font-bold">Your Products</h2>
      <div className="flex items-center space-x-2">
        <span className="text-sm">Sort by:</span>
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="border rounded-md px-2 py-1 text-sm"
        >
          <option value="popularity">Most Popular</option>
          <option value="newest">Newest</option>
          <option value="price">Price: Low to High</option>
        </select>
      </div>
    </div>
  );
};

export default ProductListHeader;
