import ProductCard from "@/components/cards/ProductCard";
import React from "react";

interface ProductPageProps {
  productName: string;
  price: string;
  rating: string;
  discount: string;
  availability: string;
}

const ProductPage: React.FC<ProductPageProps> = ({
  productName,
  price,
  rating,
  discount,
  availability,
}) => {
  return (
    <div className="max-w-5xl mx-auto pt-16">
      <ProductCard
        productName={productName}
        price={price}
        rating={rating}
        discount={discount}
        availability={availability}
      />
    </div>
  );
};

export default ProductPage;
