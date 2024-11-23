import { Avatar, AvatarGroup, Button, Flex, VStack, Text } from '@chakra-ui/react';
import React from 'react';

function ProfileHeader() {
  return (
    <div>
      <Flex gap={{ base: 4, sm: 10 }} py={10} direction={{ base: 'column', sm: 'row' }}>
        <AvatarGroup
          size={{ base: 'xl', md: '2xl' }}
          justifySelf="center"
          alignSelf="flex-start"
          mx="auto"
          
        >
          <Avatar name="As a programmer" src="/public/pro5.jpeg" />
        </AvatarGroup>

        <VStack alignItems="start" gap={4} mx="auto" flex={1}>
          <Text marginLeft={7} color={"white"} fontSize={{ base: 'sm', md: 'lg' }} gap={10}>
          asaPRogrammer__
          <Button
            bg="white"
            color="black"
            _hover={{ bg: 'whiteAlpha.400' }}
            size={{ base: 'xs', md: 'sm' }}
            w="fit-content"
          >


            Edit Profile
          </Button>
          </Text>

          <Flex alignItems="center" gap={{ base: 2, sm: 4 }}>
            <Text color={"white"}>
              <Text as="span" fontWeight="bold" color={"white"} mr={1}>
                4
              </Text>
              Posts
            </Text>
            <Text color={"white"}>
              <Text as="span" fontWeight="bold" mr={1}>
                149
              </Text>
              Followers
            </Text>
            <Text color={"white"}>
              <Text as="span" fontWeight="bold" mr={1}>
                149
              </Text>
              Following
            </Text>
          </Flex>
        </VStack>
      </Flex>
    </div>
  );
}

export default ProfileHeader;

