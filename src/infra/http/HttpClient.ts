interface IHttpClient {
  get(url: string): Promise<Array<any>>
}

const PROTOCOLS = {
  GET: "GET"
}

const HttpClient = (): IHttpClient => {
  const constructConfig = (portocol: string) => ({
    headers: { Accept: "application/json" },
    method: portocol
  })

  const get = async (url: string): Promise<Array<any>> => {
    return new Promise(async (resolve, reject) => {
      const config = constructConfig(PROTOCOLS.GET)
      const res = await fetch(url, config);
      if (res.status >= 400) {
        throw new Error("Error when findTrendingUsers");
      }
      resolve( await res.json());
    })
  }

  return {
    get
  }

}

export default HttpClient