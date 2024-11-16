import React from 'react';
import { Box, IconButton } from '@chakra-ui/react';
import { FaHome, FaSearch, FaPlusCircle, FaVideo, FaUserAlt, FaSignOutAlt } from 'react-icons/fa'; // Instagram-like icons
import { useNavigate } from 'react-router-dom'; // for navigation

const Sidebar = () => {
  const navigate = useNavigate();

  // Handle log-out action
  const handleLogOut = () => {
    // Logic for logging out, like clearing tokens or session data
    // Navigate to the Auth page
    navigate('/'); // Replace '/auth' with the correct route for your authentication page
  };

  return (
    <Box
      bg="black"
      p={3}
      position="fixed"
      left="0"
      top="60px" // Adjusted to make the sidebar appear below the header
      bottom="0"
      width="60px"
      boxShadow="md"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      {/* Home Icon */}
      <IconButton 
        icon={<FaHome />} 
        colorScheme="gray" 
        aria-label="Home" 
        variant="ghost" 
        _hover={{ color: 'white' }} 
        mb={4} // Adds spacing between icons
      />
      
      {/* Search Icon */}
      <IconButton 
        icon={<FaSearch />} 
        colorScheme="gray" 
        aria-label="Search" 
        variant="ghost" 
        _hover={{ color: 'white' }} 
        mb={4}
      />

      {/* Plus Icon (for creating a post) */}
      <IconButton 
        icon={<FaPlusCircle />} 
        colorScheme="gray" 
        aria-label="Create Post" 
        variant="ghost" 
        _hover={{ color: 'white' }} 
        mb={4}
      />

      {/* Video Icon */}
      <IconButton 
        icon={<FaVideo />} 
        colorScheme="gray" 
        aria-label="Videos" 
        variant="ghost" 
        _hover={{ color: 'white' }} 
        mb={4}
      />

      {/* Profile Icon */}
      <IconButton 
        icon={<FaUserAlt />} 
        colorScheme="gray" 
        aria-label="Profile" 
        variant="ghost" 
        _hover={{ color: 'white' }} 
        mb={4}
      />

      {/* Log Out Icon */}
      <IconButton 
        icon={<FaSignOutAlt />} 
        colorScheme="gray" 
        aria-label="Log Out" 
        variant="ghost" 
        _hover={{ color: 'red.500' }} 
        mt="auto" // Aligns the log-out icon to the bottom
        onClick={handleLogOut} // Trigger the log-out handler
      />
    </Box>
  );
};

export default Sidebar;

