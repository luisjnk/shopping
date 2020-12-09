import React from 'react';
import "./ProductCard.scss"

type ProductCardProps = {
  image: string,
  name: string
  price: string
}
function ProductCard({ image, name, price }: ProductCardProps) {
  return (
    <div className="card">
      <img src={image} alt="Avatar" />
      <div className="container">
        <h4><b>{name}</b></h4>
        <p>price: {price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
