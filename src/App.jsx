import React from 'react';
import { ChakraProvider, Box } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // React Router
import Header from './Layout/Header';
import Sidebar from './Layout/Sidebar';
import Auth from './Pages/Auth';
import Homepage from './Pages/Homepage';
import Profilepage from './Pages/Profilepage';

const App = () => {
  return (
    <ChakraProvider>
   
        <Routes>
          {/* Route for the login page - no Header or Sidebar */}
          <Route path="/" element={<Auth />} />

          {/* Routes for authenticated pages with Header and Sidebar */}
          <Route
            path="home"
            element={
              <>
                <Header />
                <Box as="main" p={4}>
                  <Homepage />
                </Box>
                <Sidebar />
              </>
            }
          />
          <Route
            path="profile"
            element={
              <>
                <Header />
                <Box as="main" p={4}>
                  <Profilepage />
                </Box>
                <Sidebar />
              </>
            }
          />
        </Routes>
 
    </ChakraProvider>
  );
};

export default App;
