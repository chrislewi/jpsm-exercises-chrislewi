function ProductCard ({
    id,
    name = "Unknown Product",
    price = 0,
    image = "/placeholder/jpg",
    isOnSale = false,
})
{
    return (
        <div className="product-card">
        <h2>{name}</h2>
        <p>{price}</p>
        </div>
    );
}

export default ProductCard;