import React from 'react';
import { Box, Heading, Image, Text, Button, HStack, VStack, useColorModeValue, Flex } from '@chakra-ui/react';
import { useState } from 'react';

interface Props {}

const menuSections = {
    Starters: [
      { name: 'Chilli Paneer', image: 'https://maunikagowardhan.co.uk/wp-content/uploads/2011/11/Chilli-Paneer-scaled.jpg', price: '₹250' },
      { name: 'Gobi Manchurian', image: 'https://www.sharmispassions.com/wp-content/uploads/2022/02/gobi-manchurian2.jpg', price: '₹260' },
      { name: 'Baby Corn Manchurian', image: 'https://cdn2.foodviva.com/static-content/food-images/chinese-recipes/baby-corn-manchurian/baby-corn-manchurian.jpg', price: '₹250' }
    ],

    Soups: [
      { name: 'Cream of Tomato', image: 'https://shwetainthekitchen.com/wp-content/uploads/2021/11/Creamy-Vegan-Tomato-Soup.jpg', price: '₹150' },
      { name: 'Veg Manchow', image: 'https://www.secondrecipe.com/wp-content/uploads/2020/06/veg-manchow-soup.jpg', price: '₹200' },
      { name: 'Corn Soup', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkkDFpC-HmrYqc0oMbGcvSMilBaXcADxiEuA&s', price: '₹150' },
    ],

    Breakfast: [
      { name: 'Idli', image: 'https://i0.wp.com/www.chitrasfoodbook.com/wp-content/uploads/2018/12/Instant-Suji-idli.jpg?fit=500%2C640&ssl=1', price: '₹70' },
      { name: 'Uttapam', image: 'https://rakskitchen.net/wp-content/uploads/2013/03/8527219504_0ddb2cde6f_z-500x500.jpg', price: '₹100' },
      { name: 'Sambhar Vada', image: 'https://vegecravings.com/wp-content/uploads/2018/02/Medu-Vada-Recipe-Step-By-Step-Instructions.jpg', price: '₹120' }
    ],

    IndianMainCourse: [
      { name: 'Paneer Butter Masala with Tandoor Roti', image: 'https://myfoodstory.com/wp-content/uploads/2021/07/restaurant-style-paneer-butter-masala-2-500x500.jpg', price: '₹340' },
      { name: 'Veg Biryani', image: 'https://www.madhuseverydayindian.com/wp-content/uploads/2022/11/easy-vegetable-biryani.jpg', price: '₹350' },
      { name: 'Sambhar Rice', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrjb1mN6MRmfhinIdsUdD4SaVj23h1QfokaA&s', price: '₹150' }
    ],

    Thalis:[
      { name: 'North Indian Thali', image: 'https://b.zmtcdn.com/data/pictures/8/65488/4f22ec4fa46bf5c554d53c38180e7d3f.jpg', price: '₹380' },
      { name: 'South Indian Thali', image: 'https://c.ndtvimg.com/2022-08/fg5hvru_south-indian-thali-onam_625x300_30_August_22.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350', price: '₹350' },
      { name: 'Indian Thali (north + south)', image: 'https://static1.squarespace.com/static/5f2fa039103c7a08856032c1/5f2fa051df524e64bc14bd2a/6265f28d83150d6937812406/1653757580513/public.jpeg?format=1500w', price: '₹400' }
    ],

    Dessert:[
      { name: 'Vanilla Icecream', image: 'https://www.milkmaid.in/sites/default/files/2022-12/Vanilla-Ice-Cream-with-Chocolate-Sauce-335x300.jpg', price: '₹90' },
      { name: 'Falooda', image: 'https://cookingfromheart.com/wp-content/uploads/2022/04/Royal-Falooda-3.jpg', price: '₹100' },
      { name: 'Gooey Fudgey Brownie', image: 'https://lh3.googleusercontent.com/w5-mfv469_TeF8m9LBL14iRkZKz08gXEs4APdEkdOXwtawF_ZrUL-4NxjPDVjGsZ9qm0aPykwOLrL96_czH5qhcJfljgeJbnlGGtmCwX', price: '₹200'}
    ],
};

const Pricing: React.FC<Props> = () => {
  const [sectionIndex, setSectionIndex] = useState(0);
  const sectionNames = Object.keys(menuSections);
  const currentSection = sectionNames[sectionIndex];
  const dishes = menuSections[currentSection];

  const cardBg = useColorModeValue("wheat", "#4B0000");
  const cardText = useColorModeValue("#4B0000", "#FFD700");

  return (
    <Box py={10} textAlign="center" id="pricing">
      <Heading mb={6}>{currentSection}</Heading>

      <Flex
        justify="center"
        gap={6}
        wrap="wrap"
        px={4}
        mb={6}
        direction={{ base: "column", md: "row" }}
      >
        {dishes.map((dish, idx) => (
          <Box
            key={idx}
            bg={cardBg}
            color={cardText}
            p={4}
            borderRadius="xl"
            boxShadow="md"
            maxW="250px"
          >
            <Image
              src={dish.image}
              alt={dish.name}
              borderRadius="md"
              mb={3}
              objectFit="cover"
              h="160px"
              w="100%"
            />
            <VStack spacing={1} align="start">
              <Text fontSize="lg" fontWeight="bold">
                {dish.name}
              </Text>
              <Text>{dish.price}</Text>
            </VStack>
          </Box>
        ))}
      </Flex>

      <Flex justify="center" gap={4}>
        <Button
          onClick={() =>
            setSectionIndex((sectionIndex -1 + sectionNames.length) % sectionNames.length)
          }
          >
          Previous
        </Button>
        <Button
          onClick={() =>
            setSectionIndex((sectionIndex + 1) % sectionNames.length)}
        >
          Next
        </Button>

      </Flex>

    </Box>
  );
}

export default Pricing;