import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { SavedArticlesProvider } from './context/SavedArticleContextApi.jsx'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0, // time after which the data will be refetched again from the catch
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <SavedArticlesProvider>
      <App />
      </SavedArticlesProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
