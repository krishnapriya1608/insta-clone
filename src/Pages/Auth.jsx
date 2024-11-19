import { Container ,Flex, VStack,Box,Image} from '@chakra-ui/react'
import React from 'react'
import AuthForm from '../Components/AuthForm'


function Auth() {
  return (
    <div>
      <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
      
<Container minW={"container.md"} padding={0}>
    <Flex justifyContent={"center"} alignItems={"center"} gap={10} >
{/* Left hand side */}
<Box display={{base:"none",md:"block"}}>
<Image src="/igg.png" marginBottom={"70px"} h={550} alt='insta'/>
</Box>

{/* Right hand side */}

<VStack spacing={4} align={"stretch"}>
 <AuthForm/>
<Box textAlign={"center"}>
    Get the app
</Box>

<Flex gap={5} justifyContent={"center"}>

    <Image src='/play1.png' h={"10"} alt='playstore logo'/>
    <Image src='/google.png' h={"8"} alt='playstore logo'/>
</Flex>
</VStack>
</Flex>
</Container>

      </Flex>
    </div>
  )
}

export default Auth
