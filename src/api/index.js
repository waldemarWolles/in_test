import axios from 'axios'

export const instance = axios.create({
  baseURL:
    'https://listofproductsinforce-default-rtdb.europe-west1.firebasedatabase.app',
})

export const productsAPI = {
  get: async () => {
    const response = await instance.get('/products.json')
    return response.data
  },

  create: async (data, productId, itemId) => {
    const response = await instance.put(`/products/${productId}.json`, {
      count: data.count,
      id: itemId,
      imageUrl: data.imageUrl,
      name: data.name,
      size: {
        height: data.height,
        width: data.width,
      },
      weight: data.weight,
    })

    return response.data
  },

  update: async (data, productId, itemId) => {
    const response = await instance.put(`/products/${productId}.json`, {
      count: data.count,
      id: itemId,
      imageUrl: data.imageUrl,
      name: data.name,
      size: {
        height: data.height,
        width: data.width,
      },
      weight: data.weight,
    })

    return response.data
  },
  delete: async (id) => {
    const response = await instance.delete(`/products/${id}.json`)

    return response
  },
}
