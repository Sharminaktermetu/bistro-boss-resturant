import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './Routes/Routes.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './providers/AuthProvider'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

// Create a client
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>

      <QueryClientProvider client={queryClient}>
        <div className='max-w-screen-lg mx-auto'>
          <RouterProvider router={router} />
        </div>
      </QueryClientProvider>

    </AuthProvider>
  </React.StrictMode>,
)
