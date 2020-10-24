import HttpClient from "../infra/http/HttpClient"
import { IProduct } from "../interfaces/IProduct"

export const productService = () => {
  const getProducts = async () : Promise<Array<IProduct>> => {
    return new Promise(async (resolve, reject) => {
      console.log("SQUII")
      const URL = "https://5f93fde49ecf720016bfc1ec.mockapi.io/products"
      console.log("URL", URL)

      const { get } = HttpClient()
      const products: Array<IProduct> = await get(URL)
      resolve(products)
    })
  }

  return {
    getProducts
  }
}