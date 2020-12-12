import React from 'react';
import { IProduct } from '../../interfaces/IProduct';
import BagItem from './BagItem/BagItem';

interface Props {
  productList : Array<IProduct>
}

function BagsList( { productList }: Props ) {
  return (
    <div className={"bag-container-left"}>
      <div className="bag-row">
      </div>
      <h4>Bag</h4>
      {productList.map(product => {
        return <BagItem product={product} />
      })}
    </div>
  );
}

export default BagsList;