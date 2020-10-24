import React from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import { IProduct } from '../../interfaces/IProduct';
import { productService } from '../../service/product-service';
import "./Product-list.scss"
const { useEffect, useState } = React

const INITIAL_STATE: Array<IProduct> = []

function ProductList() {
  const [products, setProducts] = useState(INITIAL_STATE as Array<IProduct>)
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
      <div className={"card-container"}>  {products.map(product => {
        return <ProductCard image={product.image} name={product.productName} price={product.price}/>
      })} </div>
    </div>
  );
}

export default ProductList;
