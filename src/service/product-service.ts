import HttpClient from "../infra/http/HttpClient"
import { IProduct } from "../interfaces/IProduct"

export const productService = () => {
  const getProducts = async () : Promise<Array<IProduct>> => {
    return new Promise(async (resolve, reject) => {
      const URL = "http://localhost:8080/products"
      const { get } = HttpClient()
      const products: Array<IProduct> = await get(URL)
      resolve(products)
    })
  }

  return {
    getProducts
  }
}