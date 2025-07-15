import React from 'react';
import {
  Box,
  Heading,
  Text,
  Button,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';

interface Props {}

const Hero: React.FC<Props> = () => {
  const bgColor = useColorModeValue('wheat', "#4B0000");
  const textColor = useColorModeValue('#4B0000', '#FFD700');
  const bgImage = 'https://www.shutterstock.com/image-photo/group-south-indian-food-like-260nw-1153818823.jpg';

  return (
    <Box
      id="hero"
      bgImage={`url(${bgImage})`}
      bgSize="cover"
      bgPosition="center"
      py={32}
      px={6}
      textAlign="center"
      color={textColor}
      bgColor={bgColor}
    >
      <VStack spacing={6} bgColor="rgba(0,0,0,0.5)" p={10} borderRadius="xl">
        <Heading fontSize={{ base: '3xl', md: '5xl' }}>Welcome to Sangeetha</Heading>
        <Text fontSize="xl">Pure Veg. Authentic Taste. Timeless Tradition</Text>
      </VStack>
    </Box>
  );
}

export default Hero;