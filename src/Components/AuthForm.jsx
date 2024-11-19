import { Box, Button, Flex, Input, Text, VStack, Image } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  const navigate=useNavigate();  
  const[inputs,setInputs]=useState({
    email:"",
    password:"",
    confirmPassword:""
  })

  const handleAuth=()=>{
    if(inputs.email||inputs.password||inputs.confirmPassword){
      alert("Please fill all the fields")
      return
    }
  }
navigate("/")

  return (
    <div>
      {/* Main Form Box */}
      <Box border="1px solid grey" borderRadius={4} padding={5} bg="black">
        <VStack spacing={3}>
          {/* Logo */}
          <Image src="/m.png" h={24} cursor="pointer" alt="Instagram" />

          {/* Input Fields */}
          <Input placeholder="Email" fontSize={14} type="email"   value={inputs.email} onChange={(e)=>setInputs({...inputs,email:e.target.value})}  />
          <Input placeholder="Password" fontSize={14} value={inputs.password} type="password" onChange={(e)=>setInputs({...inputs,password:e.target.value})} />
          {!isLogin && (
            <Input
              placeholder="Confirm Password"
              fontSize={14}
              value={inputs.confirmPassword}
              onChange={(e)=>setInputs({...inputs,password:e.target.value})}
              type="password"
            />
          )}

          {/* Action Button */}
          <Button w="full" colorScheme="blue" size="sm" fontSize={14}>
            {isLogin ? 'Login' : 'Signup'}
          </Button>

          {/* OR Divider */}
          <Flex alignItems="center" justifyContent="center" my={4} gap={1} w="full">
            <Box flex={2} h="1px" bg="gray.300" />
            <Text mx={1} color="gray.600">
              OR
            </Text>
            <Box flex={2} h="1px" bg="gray.300" />
          </Flex>

          {/* Login with Google */}
          <Flex alignItems="center" justifyContent="center" cursor="pointer">
            <Image src="/googleicon.png" w={5} alt="Google logo" />
            <Text ml={2}>Login with Google</Text>
          </Flex>
        </VStack>
      </Box>

      {/* Footer Box */}
      <Box
        border="1px solid gray"
        borderRadius={4}
        padding={5}
        mt={4}
        textAlign="center"
        bg="black"
      >
        <Text fontSize={14} color="gray.600">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}
        </Text>
        <Box
          onClick={() => setIsLogin(!isLogin)}
          color="blue.500"
          cursor="pointer"
          fontWeight="bold"
        >
          {isLogin ? 'Signup' : 'Log in'}
        </Box>
      </Box>
    </div>
  );
}

export default AuthForm;

