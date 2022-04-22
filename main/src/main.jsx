import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import Error from './components/error'
import './stylesheets/style.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {
      !navigator.onLine ? <Error error="Check your internet connection" /> : <App />
    }
  </React.StrictMode>
)
