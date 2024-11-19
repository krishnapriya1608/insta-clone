import React from 'react'
import Sidebar from '../Components/Sidebar'
import { useLocation } from 'react-router-dom'

function PageLayout({children}) {
    const {pathname}=useLocation()
  return (
    <div>
      <Flex>
     {/* sidebar on left */}
    

    {pathname!=='/auth'?(
     <Box w={{base:"70px",md:"240px"}}>
     <Sidebar/>
    </Box >
    ):null}

{/* the page content on the right side */}

<Box flex={1} w={{base:"calc(100%-70%)",md:"calc(100%-70px)"}}>
{children}
</Box>
      </Flex>
    </div>
  )
}

export default PageLayout
