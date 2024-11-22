import React, { useEffect, useState } from 'react';
import Feedposts from '../Feedpost/Feedposts';
import { Box, Container, Flex, Skeleton, SkeletonCircle, VStack } from '@chakra-ui/react';

function Feedpost() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer); // Cleanup timeout
  }, []);

  return (
    <div>
      <Container maxW="container.sm" py={10} px={2}>
        {isLoading &&
          [0, 1, 2, 3].map((_, idx) => (
            <VStack key={idx} gap={4} alignItems="flex-start" mb={10}>
              <Flex gap="2">
                <SkeletonCircle size="10" />
                <VStack gap={2} alignItems="flex-start">
                  <Skeleton height="10px" w="200px" />
                  <Skeleton height="10px" w="200px" />
                </VStack>
              </Flex>
              <Skeleton w="full">
                <Box h="500px">Comments Wrapped</Box>
              </Skeleton>
            </VStack>
          ))}
        {!isLoading && (
          <>
            <Feedposts img="/pro5.jpeg" username="John Abhraham" avatar="public/pro3.png" />
            <Feedposts img="/pro4.jpeg" username="Avann" avatar="/public/pro3.png" />
            <Feedposts img="/profile2.jpeg" username="Feran" avatar="/pro3.png" />
            <Feedposts img="/pro3.png" username="Kedhu" avatar="/pro3.png" />
          </>
        )}
      </Container>
    </div>
  );
}

export default Feedpost;


