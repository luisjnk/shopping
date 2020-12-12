import { parse } from 'path';
import React from 'react';
import { IProduct } from '../../interfaces/IProduct';

interface Props {
  productList : Array<IProduct>
}
function Summary({ productList } : Props) {
  const calcTotal = () => {
    return productList.reduce((acc, product) => {
      return acc + parseFloat(product.price)
    }, 0)
  }
  return (
    <div className="summary">
      <div className="bag-summary">
        <h4>Summary</h4>
      </div>
      <div className="bag-content">
        <div className="bag-subtotal">
          <h4>Sub total</h4>
            <h4>€{calcTotal()}</h4>
        </div>
        <div className="bag-subtotal">
          <h4>Estimated Delivery & Handling</h4>
          <h4>€5.00</h4>
        </div>
        <hr />
        <div className="bag-total">
          <h4>Total</h4>
             <h4>€{calcTotal() + 5}</h4>
        </div>
        <hr />
        <div className="bag-button">
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default Summary;