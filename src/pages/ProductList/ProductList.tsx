import React from 'react';
import { IProduct } from '../../interfaces/IProduct';
import { productService } from '../../service/product-service';

const { useEffect, useState } = React

const INITIAL_STATE: Array<IProduct> = []

function ProductList() {
  const [products, setProducts ] = useState(INITIAL_STATE as Array<IProduct>)
  const { getProducts } = productService()

  useEffect(() => {
    getProducts()
      .then((res) => {
        setProducts(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }, []);

  return (
    <div >
      <h1> {products.map( product => {
        return product.productName
      })} </h1>
    </div>
  );
}

export default ProductList;
