import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
/* import './index.css' */
import {BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
)
// document.getElementById('input').addEventListener('change', () => {


//   if (document.body.className.indexOf('dark') === -1) {

//       document.body.classList.add('dark')
//   } else {
//       document.body.classList.remove('dark')

//   }
// })

