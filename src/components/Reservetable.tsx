import React, { use } from 'react';
import {
    Box, 
    Button,
    FormControl,
    FormLabel,
    Heading,
    Input,
    NumberInput,
    NumberInputField,
    Stack,
    useColorModeValue
} from '@chakra-ui/react';

interface Props {}

const ReserveTable: React.FC<Props> = () => {
    const bg = useColorModeValue('wheat', '#4B0000');
    const card = useColorModeValue('wheat', '#4B0000');

    return (
        <Box id="reservetable" py={16} px={6} bg={bg}>
            <Box
              maxW="lg"
              mx="auto"
              p={8}
              borderRadius="xl"
              boxShadow="md"
              bg={card}
            >
                <Heading mb={6} size="lg" textAlign="center">
                    Reserve a Table
                </Heading>
                <form>
                    <Stack spacing={4}>
                        <FormControl isRequired>
                            <FormLabel>Name</FormLabel>
                            <Input placeholder="your name"/>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Phone number</FormLabel>
                            <Input type="tel" placeholder="your phone number"/>
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Date</FormLabel>
                            <Input type="date" />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Time</FormLabel>
                            <Input type="time" />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>Number of Guests</FormLabel>
                            <NumberInput min={1} max={20}>
                                <NumberInputField placeholder="eg. 4" />
                            </NumberInput>
                        </FormControl>
                        <Button colorScheme="teal" type="submit">
                            Reserve Now
                        </Button>
                    </Stack>
                </form>
            </Box>
        </Box>
    );
}

export default ReserveTable;