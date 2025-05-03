import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import MediaSwiftAdminContextProvider from './context/MediaSwiftAdminContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MediaSwiftAdminContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MediaSwiftAdminContextProvider>
  </StrictMode>,
)
