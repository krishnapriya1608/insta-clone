import React from 'react'
import PostHeader from '../Feedpost/PostHeader'
import PostFooter from '../Feedpost/PostFooter'
import { Box,Image } from '@chakra-ui/react'

function Feedposts({img,username,avatar}) {
  return (
    <div>
      <PostHeader username={username} avatar={avatar}  />
      <Box my={2}
      borderRadius={4}
      overflow={'hidden'}
      marginLeft={10}
     
      >
        <Image src={img} alt='user profile pic' avatar={avatar}  marginLeft={10}/>
      </Box  >
      <PostFooter  username={username}/>
    </div>
  )
}

export default Feedposts
