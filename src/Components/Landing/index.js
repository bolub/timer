import React from 'react';

import { Container, Text, Button } from '@chakra-ui/core';

const Landing = () => {
  return (
    <Container d="flex" mt={10} maxW="110ch">
      <Text color="red.500" my="auto" fontSize="xl" fontWeight="900">Timer</Text>
      <Button my="auto" ml="auto" colorScheme="red" p="6" fontWeight="bold" fontSize="sm">Login</Button>
    </Container>
  )
}

export default Landing
