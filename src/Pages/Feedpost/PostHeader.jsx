import { Box, Flex, Text, Image } from '@chakra-ui/react';
import React from 'react';


function PostHeader({ username, avatar }) {
  return (
    <div>
      <Flex justifyContent="space-between" alignItems="center" w="full" my={2}>
        <Flex alignItems="center" gap={2}>
          {/* Avatar Image with Fallback */}
          <Image
            borderRadius="full"
            width="30px"
            height="30px"
            src={avatar}
            alt={`${username}'s avatar`}
          />
          {/* Username and Time */}
          <Flex fontSize={12} fontWeight="bold" gap="3" color="gray.500">
            {username}
            <Box color="gray.500">.1w</Box>
          </Flex>
        </Flex>

        {/* Unfollow Button */}
        <Box cursor="pointer">
          <Text
            fontSize={12}
            color="blue.500"
            fontWeight="bold"
            _hover={{
              color: 'white',
            }}
            transition="0.2s ease-in-out"
          >
            Unfollow
          </Text>
        </Box>
      </Flex>
    </div>
  );
}

export default PostHeader;


