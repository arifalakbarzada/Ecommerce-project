import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import "./assets/css/reset.css"
import "./assets/css/layout.css"
import './index.css'
import "./assets/css/responsive.css"

import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)
