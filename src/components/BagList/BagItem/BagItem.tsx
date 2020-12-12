import React from 'react';
import { IProduct } from '../../../interfaces/IProduct';

interface Props {
  product : IProduct
}


function BagItem({ product } : Props) {

  return (
    <div className="bag-item">
      <img src={product.imageUrl} alt="Avatar" />
      <div className="bag-content">
        <div className="bag-content-title">
          <h4>{product.name}</h4>
            <h4>€{product.price}</h4>
        </div>
        <div className="bag-content-description">
          <h4>{product.description}</h4>
          <h4>Black/White/White/White</h4>
        </div>
      </div>
    </div>
  );
}

export default BagItem;