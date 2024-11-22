import React, { useState } from 'react';
import { Box, Flex, InputRightElement, Text, InputGroup, Input, Button } from '@chakra-ui/react'; // Import Chakra UI components
import { FcLike } from "react-icons/fc";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";

function PostFooter({username}) {
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(1000);

    const handleLike = () => {
        if (liked) {
            setLiked(false);
            setLikes(likes - 1);
        } else {
            setLiked(true);
            setLikes(likes + 1);
        }
    };

    return (
        <div>
            <Flex alignItems="center" gap="4" w="full" pt={0}  mb={4} mt="auto" >
                <Box 
                    onClick={handleLike} 
                    role="button" 
                    tabIndex={0} 
                    aria-label="Like button"
                    cursor="pointer"
                    marginTop="20px"
                >
                    {liked ? <FcLike /> : <FaRegHeart />}
                </Box>
                <Box cursor="pointer" fontSize={18} aria-label="Comment button" marginTop="20px">
                    <FaRegComment />
                </Box>
            </Flex>

            <Text fontWeight={600} fontSize="sm">
                {likes} likes
            </Text>

            <Text fontSize="sm" fontWeight={700}>
             {username}{" "}
                <Text as="span" fontWeight={400}>
                    Feeling good
                </Text>
            </Text>

            <Text fontSize="sm" color="gray">
                view all 1,000 comments
            </Text>

            <Flex
                alignItems="center"
                gap={2}
                justifyContent="space-between"
                w="full"
            >
                <InputGroup>
                    <Input
                        variant="flushed"
                        placeholder="Add a comment"
                        fontSize={14}
                    />
                    <InputRightElement >
                    <Button
                    fontSize={14}
                    color={"blue.500"}
                    fontWeight={"pointer"}
                    _hover={{color:"white"}}
                    bg={"transparent"}
                    >
                     Post
                    </Button>
                    </InputRightElement >

                </InputGroup>
            </Flex>
        </div>
    );
}

export default PostFooter;



