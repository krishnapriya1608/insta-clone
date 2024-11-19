import React from 'react'

function Sidebar() {
  return (
    <div>
      <Box height={"100vh"}
      borderRight={"1px solid"}
      borderColor={"whiteAlpha.300"}
      py={8}
      position={sticky}
      top={0}
      left={0}
      px={{base:2,md:4}}
      
      >
<Flex direction={"coloumn"} gap={10} w="full" height={"full"}>
    <Link to={"/"} as={RouterLink} pl={2} display={{base:"none",md:"block"}}>
     <Image src='/igg.png'/>
     </Link>
</Flex>

      </Box>
    </div>
  )
}

export default Sidebar
