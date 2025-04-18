import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from 'react-redux'
import { persister, store } from './redux/store.js'
import { PersistGate } from 'redux-persist/integration/react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider  store={store}>
    <PersistGate loading={null} persistor={persister}>
      <App />
      </PersistGate>
    </Provider>
  </StrictMode>,
)
