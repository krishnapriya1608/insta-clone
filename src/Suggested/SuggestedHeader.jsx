
import { Flex, Image, Text, Link } from '@chakra-ui/react';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';




function SuggestedHeader() {
  return (
    <div>
      <Flex justifyContent="space-between" alignItems="center" w="full">
        <Flex alignItems="center" gap={5}>
          <Image
            name="As a programmer"
            borderRadius="full"
            boxSize="40px"
            src="/pro3.png"
            alt="User Avatar"
            gap={5}
          />
          <Text fontSize={12} fontWeight="bold" color={"white"} gap={5}>
            asaProgrammer
          </Text>
        </Flex>
        <Link
          as={RouterLink}
          to="/auth"
          fontWeight="medium"
          color="blue.400"
          textDecoration="none"
          cursor="pointer"
         marginLeft={10}
        >
          Log out
        </Link>
      </Flex>
    </div>
  );
}

export default SuggestedHeader;
