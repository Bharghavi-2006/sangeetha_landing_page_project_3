import React, { useCallback, useState } from 'react';
import {
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';

interface Props {}

const testimonialsData = [
  [
    { quote: 'My saviour from mess food :)))', author: 'Bharghavi', rating: 5 },
    { quote: 'Delicious & affordable', author: 'Pritiman', rating: 4 },
    { quote: 'Amazing food!', author: 'Kashvee', rating: 5},
  ],
  [
    { quote: 'Authentic!', author: 'Indujaa', rating: 4 },
    { quote: 'Quick service and tasty meals.', author: 'Vadiraja', rating: 4 },
    { quote: 'Feels like home.', author: 'Abinaya', rating: 5 },
  ],
];

const Testimonials: React.FC<Props> = () => {
  const [page, setPage] = useState(0);

  const cardBg = useColorModeValue("wheat", "#4B0000");
  const cardText = useColorModeValue("#4B0000", "#FFD700");
  const filledStarColor = useColorModeValue('yellow.400', 'yellow.300');
  const emptyStarColor = useColorModeValue('gray.300', 'whiteAlpha.400');

  const next = () => setPage((prev) => (prev + 1) % testimonialsData.length);
  const prev = () => setPage((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);

  const renderStars = (rating) =>
    Array(5)
      .fill('')
      .map((_, i)=> (
        <Icon
          as={StarIcon}
          key={i}
          color={i < rating ? filledStarColor: emptyStarColor}
        />
      ));

  return (
    <Box py={16} px={6} textAlign="center" id="testimonials">
      <Heading mb={8} size="lg">
        What Our Customers Say
      </Heading>

      <SimpleGrid columns={{ base:1, md: 3 }} spacing={6} mb={6}>
        {testimonialsData[page].map((t, idx) => (
          <Box
            key={idx}
            bg={cardBg}
            color={cardText}
            p={6}
            borderRadius="xl"
            boxShadow="md"
          >
            <Text fontStyle="italic" mb={3}>
              "{t.quote}"
            </Text>
            <Text fontWeight="bold" fontSize="md" mb={2}>
              - {t.author}
            </Text>
            <HStack justify="center">{renderStars(t.rating)}</HStack>
          </Box>
        ))}
      </SimpleGrid>

      <HStack justify="center" spacing={4}>
        <Button onClick={prev} colorScheme="teal" variant="outline">
          Prev
        </Button>
        <Button onClick={next} colorScheme="teal">
          Next
        </Button>
      </HStack>
    </Box>
  );
}

export default Testimonials;