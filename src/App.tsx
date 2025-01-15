// -> Query lib
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// -> Routing lib
import { BrowserRouter } from 'react-router-dom';

// -> Toast lib 
import { Toaster } from 'react-hot-toast';

// -> Provider
import { AuthProvider } from './app/contexts/AuthContext';

// -> Pages
import { Router } from './router';

export function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false
      }
    }
  })
  
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <BrowserRouter>
          <Toaster /> 
          <Router />
        </BrowserRouter>
      </AuthProvider>
    </QueryClientProvider> 
  );
}
