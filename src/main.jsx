import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Globalstyles } from './styles/Globalstyles.js'
import { RouterProvider } from 'react-router-dom'
import router from './routes.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Globalstyles/>
    <RouterProvider router={router}/>
  </StrictMode>,
)
 