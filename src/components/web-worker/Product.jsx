import React from "react";
import Card from "./Card";

const Product = ({
  title,
  description,
  price,
  discountPercentage,
  rating,
  brand,
  images,
}) => {
  return (
    <div>
      <Card>
        <img src={images[0]} alt={title} className="w-full h-62 rounded-2xl" />
        <h1 className="bg-amber-600 text-white p-2 rounded-xl">{brand}</h1>
        <h2 className="font-bold">{title}</h2>
        <p>{description.slice(0, 100)}... More</p>
        <p className="flex justify-between border-t mt-2">
          <strong>Rs. {price.toFixed(2)}</strong>{" "}
          <strong>Rating: {rating}</strong>
        </p>
        <strong>{discountPercentage}% off</strong>
      </Card>
    </div>
  );
};

export default Product;
