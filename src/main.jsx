import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient({
  defaultOptions:{
    staleTime: 0, // time after which the data will be refetched again from the catche
  }
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <QueryClientProvider client={queryClient} >
    <App />
  </QueryClientProvider>
  </React.StrictMode>,
)
