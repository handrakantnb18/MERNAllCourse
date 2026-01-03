import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ParentCompnent from './ParentComponent.jsx'
import ChildComponent from './childComponent.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <h1>Hello, welcome React JS assignment 149</h1>
  <ParentCompnent />
  <ChildComponent />
  </StrictMode>,
)
