import { Box, Container, Flex } from '@chakra-ui/react'
import React from 'react'
import Feedpost from './Feedpost/Feedpost'
import Suggestedusers from '../Suggested/Suggestedusers'


function Home() {
  return (
    <div>
      <Container maxW={"container.lg"}>
      <Flex gap={20}>
<Box flex={2} mr={2}>
<  Feedpost/>
</Box>
<Box   flex={3} mr={20} display={{base:"none",lg:"block"}} maxW={"300px"} border={"1px solid black"}> 
<Suggestedusers/>

</Box>

      </Flex>

      </Container>
    </div>
  )
}

export default Home
