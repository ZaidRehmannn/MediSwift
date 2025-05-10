import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import MediSwiftAdminContextProvider from './context/MediSwiftAdminContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MediSwiftAdminContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MediSwiftAdminContextProvider>
  </StrictMode>,
)
