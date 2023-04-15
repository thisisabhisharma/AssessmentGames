import React from 'react'
import { Provider } from 'react-redux'
import Home from './src/screens/Home'
import store from './src/redux/store'

const App = () => {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  )
}

export default App
