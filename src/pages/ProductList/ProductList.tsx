import React from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import { IProduct } from '../../interfaces/IProduct';
import { productService } from '../../service/product-service';
import "./Product-list.scss"
const { useEffect, useState } = React

const INITIAL_STATE: Array<IProduct> = []

function ProductList() {
  const [products, setProducts] = useState(INITIAL_STATE as Array<IProduct>)

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
        return <ProductCard key={product.id} image={product.imageUrl} name={product.name} price={product.price} />
      })}
    </div>
  );
}

export default ProductList;
/*{products.map(product => {
        return <ProductCard image={product.image} name={product.productName} price={product.price}/>
      })} */
