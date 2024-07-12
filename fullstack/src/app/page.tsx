"use client";
import { useState } from "react";
import ProductCard from "@/components/cards/ProductCard";
import Link from "next/link";
import Navbar from "@/components/navbar/Navbar";

const productsData = [
  {
    productName: "Product 1",
    price: "100",
    rating: "4.5",
    discount: "10",
    availability: "yes",
  },
  {
    productName: "Product 2",
    price: "1500",
    rating: "4.7",
    discount: "100",
    availability: "out-of-stock",
  },
  {
    productName: "Product 3",
    price: "200",
    rating: "4.6",
    discount: "20",
    availability: "yes",
  },
  {
    productName: "Product 4",
    price: "300",
    rating: "4.9",
    discount: "30",
    availability: "yes",
  },
  {
    productName: "Product 5",
    price: "400",
    rating: "4.8",
    discount: "40",
    availability: "out-of-stock",
  },
  {
    productName: "Product 6",
    price: "500",
    rating: "4.7",
    discount: "50",
    availability: "yes",
  },
  {
    productName: "Product 7",
    price: "600",
    rating: "4.6",
    discount: "60",
    availability: "yes",
  },
  {
    productName: "Product 8",
    price: "700",
    rating: "4.5",
    discount: "70",
    availability: "out-of-stock",
  },
  {
    productName: "Product 9",
    price: "800",
    rating: "4.4",
    discount: "80",
    availability: "yes",
  },
  {
    productName: "Product 10",
    price: "900",
    rating: "4.3",
    discount: "90",
    availability: "yes",
  },
  {
    productName: "Product 11",
    price: "1000",
    rating: "4.2",
    discount: "100",
    availability: "out-of-stock",
  },
  {
    productName: "Product 12",
    price: "1100",
    rating: "4.1",
    discount: "110",
    availability: "yes",
  },
  {
    productName: "Product 13",
    price: "1200",
    rating: "4.0",
    discount: "120",
    availability: "yes",
  },
  {
    productName: "Product 14",
    price: "1300",
    rating: "3.9",
    discount: "130",
    availability: "out-of-stock",
  },
  {
    productName: "Product 15",
    price: "1400",
    rating: "3.8",
    discount: "140",
    availability: "yes",
  },
];

export default function Home() {
  const [products, setProducts] = useState(productsData);
  return (
    <>
      <Navbar setProducts={setProducts} />
      <div className="grid grid-cols-3 gap-8 max-w-6xl mx-auto pt-16">
        {products?.map((product, index) => (
          <Link href={`/${product.productName}`} key={index}>
            <ProductCard
              key={product.productName}
              productName={product.productName}
              price={product.price}
              rating={product.rating}
              discount={product.discount}
              availability={product.availability}
            />
          </Link>
        ))}
      </div>
    </>
  );
}
