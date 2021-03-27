import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import productsReducer from './products-reducer'
import thunkMiddleware from 'redux-thunk'

let rootReducer = combineReducers({
  products: productsReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
)

export default store
