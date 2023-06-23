import React from 'react'
import { Provider } from 'react-redux'

import store from './store'
import Portfolio from './components/Portfolio'

function App(): React.ReactElement {
  return (
    <Provider store={store}>
      <Portfolio />
    </Provider>
  )
}

export default App
