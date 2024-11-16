import React, { useState } from "react";
import {
  Box,
  Button,
  Input,
  Stack,
  FormControl,
  FormLabel,
  Text,
  VStack,
  HStack,
  Image,
  Link,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const AuthPage = () => {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    confirmpassword: "",
  });

  const navigate = useNavigate(); // Initialize the useNavigate hook

  const handleAuth = () => {
    const { email, password, confirmpassword } = inputs;

    // Basic validation
    if (!email || !password || (confirmpassword && password !== confirmpassword)) {
      alert("Please fill all fields correctly");
      return;
    }

    // Navigate to the home page after successful validation
    navigate("/home");
  };

  return (
    <Box
      minH="100vh"
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      bg="black"
      p={4}
    >
      {/* Left Side: Image */}
      <Box
        flex="1"
        display="flex"
        justifyContent="center"
        alignItems="center"
        p={2}
        maxW={{ base: "full", md: "50%" }}
      >
        <Image
          src="./Loginicon.png"
          alt="Instagram Phone Mockup"
          height={{ base: "300px", md: "400px" }}
          objectFit="contain"
        />
      </Box>

      {/* Right Side: Form */}
      <Box
        flex="1"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        p={4}
        bg="black"
        borderRadius="lg"
        boxShadow="lg"
        border="2px solid black"
        maxW={{ base: "full", md: "25%" }}
        height="auto"
        ml={{ base: 0, md: "10%" }}
      >
        <VStack spacing={2} w="full" maxW="sm">
          {/* Logo */}
          <Image
            src="./insta.png"
            alt="Instagram Clone Logo"
            height="50px"
            objectFit="contain"
          />
          <Stack spacing={4} w="full">
            <FormControl>
              <FormLabel color="white">Email</FormLabel>
              <Input
                value={inputs.email}
                onChange={(e) =>
                  setInputs({ ...inputs, email: e.target.value })
                }
                placeholder="Enter your email"
              />
            </FormControl>
            <FormControl>
              <FormLabel color="white">Password</FormLabel>
              <Input
                type="password"
                value={inputs.password}
                onChange={(e) =>
                  setInputs({ ...inputs, password: e.target.value })
                }
                placeholder="Enter your password"
              />
            </FormControl>
            <FormControl>
              <FormLabel color="white">Confirm Password</FormLabel>
              <Input
                type="password"
                value={inputs.confirmpassword}
                onChange={(e) =>
                  setInputs({ ...inputs, confirmpassword: e.target.value })
                }
                placeholder="Confirm your password"
              />
            </FormControl>
            <Button colorScheme="blue" size="md" width="full" onClick={handleAuth}>
              Sign Up
            </Button>
          </Stack>
          <Text fontSize="sm" color="white">
            Already have an account?{" "}
            <Link color="blue.500" href="#">
              Log In
            </Link>
          </Text>
        </VStack>
      </Box>
    </Box>
  );
};

export default AuthPage;








