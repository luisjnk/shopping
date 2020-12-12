import React, { useContext } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import ShoppingContext from '../../context/shoppingBag-context';
import { IProduct } from '../../interfaces/IProduct';
import { productService } from '../../service/product-service';

import "./Product-list.scss"

const { useEffect, useState } = React

const INITIAL_STATE: Array<IProduct> = []

function ProductList() {
  const [products, setProducts] = useState(INITIAL_STATE as Array<IProduct>)
  const shoppingBagContext = useContext(ShoppingContext)

  useEffect(() => {
    const { getProducts } = productService()
    const initializeComponent = () => {
      getProducts()
        .then((res) => {
          setProducts(_ => res)
        })
        .catch((err) => {
          console.log(err)
        })
    }
    initializeComponent()
  }, []);

  return (
    <div className={"card-container"}>
      {products.map(product => {
        return <ProductCard key={product.id} product={product} shoppingBagContext={shoppingBagContext} />
      })}
    </div>
  );
}

export default ProductList;
