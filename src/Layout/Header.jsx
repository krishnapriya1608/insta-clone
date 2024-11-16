import React from 'react';
import { Box, Flex, Link, Image, IconButton } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom'; // React Router for navigation
import { FaHeart, FaComment } from 'react-icons/fa'; // Like and Comment (Message) icons

const Header = () => {
  const navigate = useNavigate();
  
  return (
    <Box 
      bg="black" // Set the background to black
      p={4} 
      boxShadow="md" // Optional: Add a shadow to the header for better UI
      position="fixed" // Make the header fixed
      top="0" // Align to the top of the page
      left="0" // Ensure it's aligned with the left edge of the page
      width="100%" // Make it span the full width of the page
      zIndex="10" // Ensure it stays above other content when scrolling
    >
      <Flex align="center" justify="space-between" direction={{ base: "column", md: "row" }}>
        
        {/* Instagram-like Logo */}
        <Link 
          to="/home" // Use 'to' instead of 'href' for React Router
          display="flex" 
          alignItems="center" 
          mb={{ base: 4, md: 0 }} // Margin for mobile view
        >
          <Image src="./ig.png" alt="Instagram Logo" height="40px" />
        </Link>

        {/* Icons for Like and Message */}
        <Flex align="center">
          <IconButton 
            icon={<FaHeart />} 
            colorScheme="gray" 
            aria-label="Like" 
            variant="ghost" 
            mr={4} // Space between the icons
            _hover={{ bg: 'transparent', color: 'red.500' }} 
          />
          <IconButton 
            icon={<FaComment />} 
            colorScheme="gray" 
            aria-label="Message" 
            variant="ghost" 
            mr={4} // Space between the icons
            _hover={{ bg: 'transparent', color: 'blue.500' }} 
          />
        </Flex>
        
      </Flex>
    </Box>
  );
};

export default Header;
