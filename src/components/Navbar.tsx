import React from 'react';
import {
  Box,
  Flex,
  HStack,
  IconButton,
  useColorMode,
  useColorModeValue,
  Text,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

interface Props {}

const Navbar: React.FC<Props> = () => {
  const { colorMode, toggleColorMode } = useColorMode(); //hook inside the function

  const bg = useColorModeValue('wheat', '#4B0000') // light -> wheat, dark -> maroon
  const color = useColorModeValue('#4B0000', '#FFD700') //text colors


  return (
    <Box bg={bg} color={color} px={6} py={4} boxShadow="md" position="sticky" top={0} zIndex={50}>
      <Flex justify="space-between" align="center">
        <Text fontSize="xl" fontWeight="bold">
          Sangeetha Veg Restaurant
        </Text>

        <HStack spacing={6} display={{ base:'none', md: 'flex'}}>
          <a href="#hero">Home</a>
          <a href="#pricing">Menu</a>
          <a href="#footer">Contact</a>
          <a href="#testimonials">Reviews</a>
          <a href="#reservetable">Reserve a Table</a>
        </HStack>

        <IconButton //toggle button
          icon={colorMode === 'light' ? <MoonIcon />: <SunIcon />}
          onClick={toggleColorMode}
          size="md"
          variant="ghost"
          aria-label="Toggle color mode"
        />
      </Flex>
      </Box>
  );
}

export default Navbar;
