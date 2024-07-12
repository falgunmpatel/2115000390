import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

interface ProductCardProps {
  productName: string;
  price: string;
  rating: string;
  discount: string;
  availability: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  productName,
  price,
  rating,
  discount,
  availability,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{productName}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Price: {price}</p>
        <p>Rating: {rating}</p>
        <p>Discount: {discount}</p>
        <p>Availability: {availability}</p>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
