import ProductCard from "./ProductCard";

function ProductList() {
  const products = [
    {
      id: 1,
      name: "Nike Air MX Super 2500 - Red",
      price: 105,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=80",
      isOnSale: true,
    },
    {
      id: 2,
      name: "Nike Air MX Super 2500 - Red",
      price: 399,
      image: "/insta360_x6.jpg",
      isOnSale: false,
    },
    {
      id: 3,
      name: "Running Ultraboost Light",
      price: 190,
      image: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=500&auto=format&fit=crop&q=80",
      isOnSale: true,
    },
  ];

  return (
    <div
      className="product-list"
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        padding: "24px",
        justifyContent: "center",
      }}
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
          isOnSale={product.isOnSale}
        />
      ))}
    </div>
  );
}

export default ProductList;