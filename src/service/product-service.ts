import HttpClient from "../infra/http/HttpClient"

export const productService = () => {
  const getProducts = async () => {
    return new Promise(async (resolve, reject) => {
      const URL = "https://5f93fde49ecf720016bfc1ec.mockapi.io/products"
      const { get } = HttpClient()
      resolve(await get(URL))
    })
  }

  return {
    getProducts
  }
}