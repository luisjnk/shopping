<<<<<<< HEAD
import React, { useContext, useState } from 'react';
import BagsList from '../../components/BagList/BagList';
import Summary from '../../components/Summary/Summary';

import ShoppingContext from "../../context/shoppingBag-context";

import "./bag.scss"

function Bag() {
  const { getProductsList } = useContext(ShoppingContext)
  const [productList, setProductList] = useState( getProductsList())

  return (
    <div className={"bag-view"}>
      <div className={"bag-container"}>
        <BagsList productList={productList} />
        <Summary productList={productList}/>
      </div>
      </div>  
  );
}

export default Bag;