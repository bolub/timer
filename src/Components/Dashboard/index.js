import React from 'react';

import { Container, Text, Flex, Button, SimpleGrid } from '@chakra-ui/core';
import EventCard from './EventCard';

const Landing = () => {
  return (
    <Container my={10} maxW="110ch">

      {/* Navbar */}
      <nav>
        <Flex mb="10">
          <Text color="red.500" my="auto" fontSize="xl" fontWeight="900">Timer</Text>
          <Button my="auto" ml="auto" colorScheme="red" fontWeight="bold">Contact Developer</Button>
        </Flex>
      </nav>



      {/* COntent */}
      <main>
        <SimpleGrid columns={[1, 2, 3]} spacing="20px">
          <Button as="center" bg="white" cursor="pointer" flexDir="column" borderStyle="dashed" borderWidth="2px" borderRadius="md" minH="250px" p="6">
            <Text>
              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 8.75V3.75M20 8.75V3.75M8.75 13.75H21.25M6.25 26.25H23.75C24.413 26.25 25.0489 25.9866 25.5178 25.5178C25.9866 25.0489 26.25 24.413 26.25 23.75V8.75C26.25 8.08696 25.9866 7.45107 25.5178 6.98223C25.0489 6.51339 24.413 6.25 23.75 6.25H6.25C5.58696 6.25 4.95107 6.51339 4.48223 6.98223C4.01339 7.45107 3.75 8.08696 3.75 8.75V23.75C3.75 24.413 4.01339 25.0489 4.48223 25.5178C4.95107 25.9866 5.58696 26.25 6.25 26.25Z" stroke="#B16B6D" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

            </Text>
            <Text fontWeight="bold" mt="3">New Counter</Text>
          </Button>

          <EventCard title="Graduation" />
          <EventCard />
        </SimpleGrid>
      </main>


    </Container>
  )
}

export default Landing
