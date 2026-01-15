import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Component from './component.jsx'

function MyApp(){
  return(
    <div>
      <h1>My App from main !</h1>
    </div>
  )
}

 createRoot(document.getElementById('root')).render(
 
    
    // <MyApp />
    // <Component />
    <App />
   
 
)
