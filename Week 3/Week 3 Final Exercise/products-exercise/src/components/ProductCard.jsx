function ProductCard({
  id,
  name = "Unknown Product",
  price = 0,
  image = "/placeholder.jpg",
  isOnSale = false,
}) {
  return (
    <div
      data-id={id}
      style={{
        width: "250px",
        backgroundColor: "#ffffff",
        borderRadius: "18px",
        padding: "16px",
        boxShadow: "0 8px 30px rgba(0, 0, 0, 0.08)",
        border: "1px solid #f0f0f2",
        display: "flex",
        flexDirection: "column",
        fontFamily: "system-ui, -apple-system, sans-serif",
        boxSizing: "border-box",
      }}
    >
      {/* Product Image Container */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "190px",
          backgroundColor: "#ebebeb",
          borderRadius: "14px",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {isOnSale && (
          <span
            style={{
              position: "absolute",
              top: "10px",
              left: "10px",
              backgroundColor: "#111827",
              color: "#ffffff",
              fontSize: "11px",
              fontWeight: "700",
              padding: "4px 8px",
              borderRadius: "9999px",
              zIndex: 2,
              letterSpacing: "0.02em",
            }}
          >
            SALE
          </span>
        )}

        <img
          src={image}
          alt={name}
          onError={(e) => {
            // Fallback placeholder if the image file isn't found
            e.currentTarget.src =
              "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&auto=format&fit=crop&q=80";
          }}
          style={{
  width: "85%",
  height: "85%",
  objectFit: "contain",
  transform: "none",
  transition: "transform 0.25s ease",
}}
onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      </div>

      {/* Product Info */}
      <div style={{ marginTop: "14px", display: "flex", flexDirection: "column", gap: "6px" }}>
        <h3
          style={{
            margin: 0,
            fontSize: "15px",
            fontWeight: "600",
            color: "#272e3b",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
          title={name}
        >
          {name}
        </h3>

        <div style={{ display: "flex", alignItems: "baseline" }}>
          <span style={{ fontSize: "22px", fontWeight: "800", color: "#0f172a" }}>
            ${price}
          </span>
        </div>
      </div>

      {/* Add to Cart Button */}
      <button
        type="button"
        style={{
          marginTop: "14px",
          width: "100%",
          padding: "10px 14px",
          backgroundColor: "#0d1527",
          color: "#ffffff",
          border: "none",
          borderRadius: "8px",
          fontSize: "13px",
          fontWeight: "600",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          transition: "background-color 0.15s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1f2937")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#0d1527")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ width: "16px", height: "16px" }}
        >
          <circle cx="8" cy="21" r="1" />
          <circle cx="19" cy="21" r="1" />
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </svg>
        Add to cart
      </button>
    </div>
  );
}

export default ProductCard;