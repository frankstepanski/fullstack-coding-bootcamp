import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import './index.css'

/*

    BrowserRouter:
      - Need to wrap entire application in it
      - Listens to changes in the URL and triggers rendering updates
      - Note: Can be used in index.js or App.js component
      
      https://reactrouter.com/en/main/router-components/browser-router

*/

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
