import { productsAPI } from '../api'

const SET_ACTIVE_PRODUCT = 'products-reducer/setActiveProduct'
const SET_PRODUCTS = 'products-reducer/setProducts'
const SET_PRODUCT = 'products-reducer/setProduct'
const SET_UPDATED_PRODUCT = 'products-reducer/setUpdatedProduct'
const SET_IS_FETCHING = 'products-reducer/setIsFetching'

let initialState = {
  products: [],
  activeProduct: null,
  activeName: null,
  activeCount: null,
  isFetching: false,
}

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS: {
      return {
        ...state,
        products: [...action.products.filter((product) => product !== null)],
      }
    }

    case SET_PRODUCT: {
      return {
        ...state,
        products: [...state.products, action.product],
      }
    }

    case SET_UPDATED_PRODUCT: {
      return {
        ...state,
        products: [
          ...state.products.map((product) => {
            if (product.id === action.product.id) {
              return action.product
            } else {
              return product
            }
          }),
        ],
        activeProduct: { ...action.product },
      }
    }

    case SET_ACTIVE_PRODUCT: {
      return {
        ...state,
        activeProduct: {
          ...state.products.find((product) => product.id === action.id),
        },
      }
    }

    case SET_IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching,
      }
    }

    default:
      return state
  }
}

export default productsReducer

export const setActiveProduct = (id) => ({
  type: SET_ACTIVE_PRODUCT,
  id,
})

export const setProducts = (products) => ({
  type: SET_PRODUCTS,
  products,
})

export const setProduct = (product) => ({
  type: SET_PRODUCT,
  product,
})

export const setUpdatedProduct = (product) => ({
  type: SET_UPDATED_PRODUCT,
  product,
})

export const getProducts = () => {
  return async (dispatch, getState) => {
    let response = await productsAPI.get()

    dispatch(setProducts(response))
    console.log(response)
  }
}

export const createProduct = (data, productId, itemId) => {
  return async (dispatch, getState) => {
    let response = await productsAPI.create(data, productId, itemId)

    dispatch(setProduct(response))
  }
}

export const updateProduct = (data, productId, itemId) => {
  return async (dispatch, getState) => {
    let response = await productsAPI.update(data, productId, itemId)

    dispatch(setUpdatedProduct(response))
  }
}

export const deleteProduct = (id) => {
  return async (dispatch, getState) => {
    let response = await productsAPI.delete(id)
    dispatch(getProducts())

    console.log(response)
  }
}
