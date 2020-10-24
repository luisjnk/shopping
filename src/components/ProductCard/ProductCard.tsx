import React from 'react';
import "./ProductCard.scss"

type ProductCardProps = {
  image: string,
  name: string
  price: number
}
function ProductCard({ image, name, price }: ProductCardProps) {
  return (
    <div className="card">
      <img src="https://images.lojanike.com.br/500x500/produto/278970_2566832_20200922092916.jpg" alt="Avatar" />
      <div className="container">
        <h4><b>{name}</b></h4>
        <p>price: {price.toString()}</p>
      </div>
    </div>
  );
}

export default ProductCard;
