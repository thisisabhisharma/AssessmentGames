import { applyMiddleware } from 'redux'
import appReducer from './reducers'
import thunk from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit'

const middlewares = [thunk]

const store = configureStore(
  {
    reducer: appReducer
  },
  applyMiddleware(...middlewares)
)

export default store
