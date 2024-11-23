import React from 'react';
import { VStack, Text, Flex, Box, Link } from '@chakra-ui/react';
import SuggestedHeader from '../Suggested/SuggestedHeader';
import Suggesteduser from '../Suggested/Suggesteduser';

function Suggestedusers() {
  return (
    <div>
<VStack py={8} px={6} gap={4}  >
{/* Header */}
        <SuggestedHeader />

        {/* Suggested for You Section */}
        <Flex alignItems="center" justifyContent="space-between" w="full" >
          <Text fontSize={12} fontWeight="bold" color={"gray.500"}>
            Suggested for you
          </Text>
          <Text
            fontSize={12}
            fontWeight="bold"
            color={"gray.500"}
            _hover={{ color: "gray.400" }}
            cursor="pointer"
            

          >
            See all
          </Text>
        </Flex>

        {/* Suggested User List */}
        <Suggesteduser name='Mary Luther' followers={324} avatar="/public/profile2.jpeg"/>
        <Suggesteduser name='Anny Thomas' followers={534} avatar="/public/Profilepicture1.jpeg"/>
        <Suggesteduser name='Luca Feran' followers={124} avatar="/public/pro3.png"/>
        

        {/* Footer */}
        <Box fontSize="sm" color="gray.500" mt={5} alignSelf={"start"}>
          @2023 Built By{" "}
          <Link href="#" target="_blank" color="blue.500" fontSize="md">
            As a programmer
          </Link>
        </Box>
      </VStack>
    </div>
  );
}

export default Suggestedusers;

