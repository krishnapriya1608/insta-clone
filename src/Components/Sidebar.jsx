import { Flex, Box, Image, Link, Tooltip } from '@chakra-ui/react';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { FaHome, FaSearch } from 'react-icons/fa';
import { IoMdNotifications } from 'react-icons/io';
import { CgProfile } from 'react-icons/cg';
import { BsPlusSquare } from "react-icons/bs";
import { CiLogout } from "react-icons/ci";

function Sidebar() {
  const sidebarItems = [
    {
      icon: <FaHome color={"white"} size={20} />,
      text: "Home",
      link: "/",
    },
    {
      icon: <FaSearch color={"white"} size={20} />,
      text: "Search",
      link: "/search",
    },
    {
      icon: <IoMdNotifications color={"white"} size={20} />,
      text: "Notification",
      link: "/notification",
    },
    {
      icon: <BsPlusSquare color={"white"} size={20} />,
      text: "CreatePost",
      link: "/notification",
    },
    {
      icon: <CgProfile color={"white"} size={20} />,
      text: "Profile",
      link: "/profile",
    },
  ];

  return (
    <Box
      height="100vh"
      borderRight="1px solid"
     
      py={8}
      position="sticky"
      top={0}
      left={0}
      px={{ base: 2, md: 3 }}
     
    >
      <Flex direction="column" gap={6} w="full" height="full">
        {/* Logo Section */}
        <Link
          as={RouterLink}
          to="/"
          pl={2}
          display={{ base: "none", md: "block" }}
          borderRadius={6}
          _hover={{
            bg: "whiteAlpha.200",
          }}
          cursor="pointer"
        >
          <Image src="/m.png" h="10" alt="Homepage logo" />
        </Link>

        <Link
          as={RouterLink}
          to="/"
          pl={2}
          display={{ base: "block", md: "none" }}
          borderRadius={6}
          _hover={{
            bg: "whiteAlpha.200",
          }}
          cursor="pointer"
        >
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHlopO-s7goTS5F-0Z1Wgbana3XJk0uQsm0Q&s"
            h="10"
            alt="Mobile Homepage logo"
          />
        </Link>

        {/* Sidebar Items */}
        <Flex direction="column" gap={4} flexGrow={1} cursor="pointer">
          {sidebarItems.map((item, index) => (
            <Tooltip
              key={index}
              hasArrow
              label={item.text}
              placement="right"
              ml={1}
              openDelay={500}
            >
              <Link
                display="flex"
                as={RouterLink}
                to={item.link}
                alignItems="center"
                gap={4}
                _hover={{ bg: "whiteAlpha.400" }}
                borderRadius={6}
                p={2}
              >
                {item.icon}
                <Box
                  color="white"
                  display={{ base: "none", md: "block" }}
                >
                  {item.text}
                </Box>
              </Link>
            </Tooltip>
          ))}
        </Flex>

        {/* Logout Button */}
        <Tooltip
          hasArrow
          label="Logout"
          placement="right"
          ml={1}
          openDelay={500}
        >
          <Link
            display="flex"
            as={RouterLink}
            to="/auth"
            alignItems="center"
            gap={4}
            _hover={{ bg: "whiteAlpha.400" }}
            borderRadius={6}
            p={2}
            justifyContent="flex-start"
          >
            <CiLogout color="white" size={20} />
            <Box
              fontSize="md"
              color="white"
              display={{ base: "none", md: "block" }}
            >
              Logout
            </Box>
          </Link>
        </Tooltip>
      </Flex>
    </Box>
  );
}

export default Sidebar;

