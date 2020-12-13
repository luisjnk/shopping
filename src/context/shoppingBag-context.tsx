import * as React from "react";
import { IProduct } from "../interfaces/IProduct";

const { createContext, useState } = React;

export interface IShoppingBag {
  getProductsList(): Array<IProduct>
  addProductInBProductList(product: IProduct): void,
  productListLength: number
}

const ShoppingContext = createContext({} as IShoppingBag);

export const ShoppingBagContextProvider: React.FC = ({ children }) => {
  const INITIAL_VALUE: Array<IProduct> = []

  const [productList, setProductlist] = useState(INITIAL_VALUE)
  const [productListLength, setProductlistLength] = useState(0)
  console.log("productListLength", productListLength)

  const addProductInBProductList = (product: IProduct) => {
    console.log("productListLength", productListLength)
    const newProductList = [...productList, product]
    setProductlist(_ => newProductList)
    setProductlistLength( length => length + 1)
    
  }

  const getProductsList = () => productList
  

  return (
    <ShoppingContext.Provider
      value={{
        addProductInBProductList,
        getProductsList,
        productListLength
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
};

export default ShoppingContext;
