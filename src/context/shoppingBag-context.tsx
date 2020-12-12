import * as React from "react";
import { IProduct } from "../interfaces/IProduct";

const { createContext, useState } = React;

export interface IShoppingBag {
  getProductsList(): Array<IProduct>
  addProductInBProductList(product: IProduct): void
}

const ShoppingContext = createContext({} as IShoppingBag);

export const ShoppingBagContextProvider: React.FC = ({ children }) => {
  const INITIAL_VALUE: Array<IProduct> = []

  const [productList, setProductlist] = useState(INITIAL_VALUE)

  const addProductInBProductList = (product: IProduct) => {
    const newProductList = [...productList, product]
    setProductlist(_ => newProductList)
  }

  const getProductsList = () => productList
  

  return (
    <ShoppingContext.Provider
      value={{
        addProductInBProductList,
        getProductsList
      }}
    >
      {children}
    </ShoppingContext.Provider>
  );
};

export default ShoppingContext;
