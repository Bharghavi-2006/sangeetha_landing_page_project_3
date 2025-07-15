import React from 'react';
import { Box, Text, Stack, useColorModeValue } from '@chakra-ui/react';

interface Props {}

const Footer: React.FC<Props> = () => {
  return (
    <Box
      as="footer"
      id="footer"
      py={10}
      px={6}
      bg={useColorModeValue('wheat', '#4B0000')}
      color={useColorModeValue('#4B0000', '#FFD700')}
      textAlign="center"
    >
      <Stack spacing={2}>
        <Text> 📍T.Nagar, Chennai ☎ 044-8142499909 </Text>
        <Text fontSize="sm">
          &copy; {new Date().getFullYear()} Sangeetha Veg Restaurant. All rights reserved.
        </Text>
        <Text> 
          Timings: 10AM to 10PM 
        </Text>
      </Stack>
    </Box>
  );
}
export default Footer;