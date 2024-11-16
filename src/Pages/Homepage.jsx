import React, { useState } from 'react';
import { Box, Flex, Image, Text, IconButton, Input, Avatar } from '@chakra-ui/react';
import { FaHeart, FaComment, FaPaperPlane } from 'react-icons/fa'; // Icons for Like, Comment, Share

const Post = ({ post }) => {
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState(post.comments);

  const handleLike = () => {
    setLiked(!liked);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment) {
      setComments([...comments, comment]);
      setComment('');
    }
  };

  return (
    <Box bg="black" mb={6} boxShadow="md" borderRadius="md" color="white">
      {/* Post Header */}
      <Flex p={4} align="center">
        <Avatar size="sm" src={post.userAvatar} mr={3} />
        <Text fontWeight="bold">{post.userName}</Text>
      </Flex>

      {/* Post Image */}
      <Image src={post.image} alt="Post Image" objectFit="cover" width="100%" height="400px" />

      {/* Post Title and Username aligned to the same line, closer together */}
      <Box px={4} mt={2} mb={4}>
        <Flex align="center" gap={2}>
          <Text fontSize="sm" color="gray.400" mr={2}>
            {post.userName} :
          </Text>
          <Text fontSize="xl" fontWeight="bold" color="white">
            {post.title}
          </Text>
        </Flex>
      </Box>

      {/* Post Actions (Like, Comment, Share) */}
      <Flex p={4} align="center">
        <IconButton 
          icon={<FaHeart />} 
          colorScheme={liked ? 'red' : 'gray'} 
          aria-label="Like" 
          variant="ghost" 
          mr={4} 
          onClick={handleLike}
        />
        <IconButton 
          icon={<FaComment />} 
          colorScheme="gray" 
          aria-label="Comment" 
          variant="ghost" 
          mr={4}
        />
        <IconButton 
          icon={<FaPaperPlane />} 
          colorScheme="gray" 
          aria-label="Share" 
          variant="ghost" 
        />
      </Flex>

      {/* Post Likes Count */}
      <Text px={4} fontWeight="bold">{liked ? post.likes + 1 : post.likes} likes</Text>

      {/* Post Comments */}
      <Box px={4} mb={4}>
        {comments.slice(0, 3).map((comment, index) => (
          <Text key={index} fontSize="sm" color="gray.600">{comment}</Text>
        ))}
        {comments.length > 3 && <Text fontSize="sm" color="gray.500">View all comments</Text>}
      </Box>

      {/* Comment Input */}
      <Box p={4} borderTop="1px" borderColor="gray.200">
        <form onSubmit={handleCommentSubmit}>
          <Input 
            placeholder="Add a comment..." 
            value={comment} 
            onChange={(e) => setComment(e.target.value)} 
            size="sm"
            borderColor="black"
            color="white"
          />
        </form>
      </Box>
    </Box>
  );
};

const HomePage = () => {
  const posts = [
    {
      userAvatar: 'https://bit.ly/dan-abramov',
      userName: 'dan_abramov',
      title: 'React is Awesome!',
      image: 'pro3.png',
      likes: 120,
      comments: ['Love this!', 'Amazing post!', 'Keep it up!']
    },
    {
      userAvatar: 'pro4.jpeg',
      userName: 'ryan_florence',
      title: 'Exploring the Mountains',
      image: 'pro4.jpeg',
      likes: 90,
      comments: ['Great view!', 'So good!', 'Awesome shot!']
    },
    {
      userAvatar: 'pro5.jpeg',
      userName: 'ryan_florence',
      title: 'Beautiful Sunset',
      image: 'pro5.jpeg',
      likes: 90,
      comments: ['Great view!', 'So good!', 'Awesome shot!']
    },
    {
      userAvatar: 'profile2.jpeg',
      userName: 'ryan_florence',
      title: 'City Skyline',
      image: 'profile2.jpeg',
      likes: 90,
      comments: ['Great view!', 'So good!', 'Awesome shot!']
    }
  ];

  return (
    <Box bg="black" color="white" maxW="xl" mx="auto" mt={12} p={4}>
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </Box>
  );
};

export default HomePage;

