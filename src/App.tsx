import React from 'react'
import { Provider } from 'react-redux'
import AnimatedCursor from 'react-animated-cursor'

import store from './store'
import Portfolio from './components/Portfolio'

function App(): React.ReactElement {
  return (
    <Provider store={store}>
      <AnimatedCursor showSystemCursor={true} outerSize={20} color="0,0,0" />
      <Portfolio />
    </Provider>
  )
}

export default App
