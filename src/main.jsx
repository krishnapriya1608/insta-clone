import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './Theme.js'; // Ensure correct path
import { BrowserRouter } from 'react-router-dom';
import HomePage from './Pages/Homepage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ChakraProvider theme={theme}>
      <App />
      <HomePage/>
    </ChakraProvider>
    </BrowserRouter>
  </StrictMode>
);
