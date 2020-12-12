import React from 'react';
import { IShoppingBag } from '../../context/shoppingBag-context';
import { IProduct } from '../../interfaces/IProduct';

import "./ProductCard.scss"

type ProductCardProps = {
  product: IProduct
  shoppingBagContext: IShoppingBag
}

function ProductCard({ product, shoppingBagContext }: ProductCardProps) {
 const { addProductInBProductList } = shoppingBagContext

  const click = () => {
    addProductInBProductList(product)
  }

  return (
    <div className="card">
      <img src={product.imageUrl} alt="Avatar" />
      <div className="container">
        <h4><b>{product.name}</b></h4>
        <p>price: {product.price}</p>
        <button onClick={() => {click()}}>Add to bag</button>
      </div>
    </div>
  );
}

export default ProductCard;
