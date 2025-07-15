import React from 'react';
import {
  Box,
  Flex,
  Icon,
  SimpleGrid,
  Text,
  useColorModeValue,
  VStack,
  Heading,
} from '@chakra-ui/react';
import { CheckCircleIcon, TimeIcon, RepeatIcon } from '@chakra-ui/icons';

interface Props {}

const Features: React.FC<Props> = () => {
  const cardBg = useColorModeValue('white', 'red.800');
  const cardText = useColorModeValue('gray.700', 'wheat');
  const sectionBg = useColorModeValue('wheat', '#4B0000');

  return (
    <Box py={16} px={6} bg={sectionBg} id="features">
      <VStack spacing={8} textAlign="center" mb={10}>
        <Heading size="lg">Why Choose Us</Heading>
      </VStack>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
        <FeatureCard
           icon={<CheckCircleIcon boxSize={8} color="green.400" />}
           title = "100% Pure Veg"
        />
        <FeatureCard
          icon={<RepeatIcon boxSize={8} color="orange.400" />}
          title= "Super Fast Deliveries with our delivery partners: Swiggy and Zomato"
        />
        <FeatureCard
          icon={<TimeIcon boxSize={8} color="blue.400" />}
          title="25+ Years of Excellence"
        />
      </SimpleGrid>
    </Box>
  );
}

function FeatureCard({ icon, title }) {
  const cardBg = useColorModeValue('wheat', "#4B0000");
  const cardText = useColorModeValue('#4B0000', '#FFD700');

  return(
    <Box
      bg={cardBg}
      color={cardText}
      p={6}
      borderRadius="xl"
      boxShadow="md"
      textAlign="center"
    >
      <Flex justify="center" mb={4}>
        {icon}
      </Flex>
      <Text fontSize="xl" fontWeight="bold">
        {title}
      </Text>
    </Box>
  );
}

export default Features;
