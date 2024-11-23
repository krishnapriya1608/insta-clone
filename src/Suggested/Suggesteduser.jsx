import { Flex, VStack ,Image,Button,Box, Avatar} from '@chakra-ui/react';
import React, { useState } from 'react';

function Suggesteduser({followers,name,avatar}) {
  const[isfollowed,setIsfollowed]=useState(false)
  return (
    
    <div>
       <Flex
       justifyContent={"space-between"}
       alignItems={"center"}
       w={"full"}
       >
        <Flex gap={5}>
          <Avatar  src={avatar}  width={10} height={10} borderRadius={31} />
          <VStack gap={5} alignItems={"flex-start"}> 
            <Box fontSize={11} color={"gray.500"} >
            {name}
            <br />
            
            {followers} followers
            </Box>

          </VStack>
        
        </Flex>
        <Button
        fontSize={12}
        bg={"transparent"}
        p={0}
        h={"max-content"}
        fontWeight={"medium"}
        color={"blue.400"}
        cursor={"pointer"}
        _hover={{color:"white"}}
        onClick={()=>setIsfollowed(!isfollowed)}
        marginLeft={20}
        marginBottom={5}

        >
{isfollowed?"Unfollow":"Follow"}
        </Button>
      

       </Flex>
    </div>
  );
}

export default Suggesteduser;
