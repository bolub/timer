import React from 'react';

import {
  Box, Text, Flex, Center, ModalFooter, Button, Wrap, Input, FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Container
} from '@chakra-ui/core';

import { Link } from 'react-router-dom'

const Signup = () => {
  return (

    <Flex bg="rgba(242,242,242,0.2)" h="100vh">

      <Container m="auto" maxW="40ch" >
        <Text textAlign="center" color="red.500" fontSize="4xl" fontWeight="900">Timer</Text>

        <Text textAlign="center" fontWeight="bold" fontSize="lg">Signup for your account</Text>


        {/* Forms here */}
        <Box px="6" pt="8" pb="8" mt="4" bg="white" borderWidth="1px" boxShadow="sm" borderRadius="md">

          {/* Fullname */}
          <FormControl mb="8" id="email">
            <FormLabel color="gray.500" fontWeight="bold" fontSize="13px" mb="1">
              Fullname
            </FormLabel>
            <Input height="40px" type="email" placeholder="" />
          </FormControl>

          {/* EMail */}
          <FormControl mb="8" id="email">
            <FormLabel color="gray.500" fontWeight="bold" fontSize="13px" mb="1">
              Email
            </FormLabel>
            <Input height="40px" type="email" placeholder="" />
          </FormControl>


          {/* Password */}
          <FormControl mb="6" id="password">
            <FormLabel color="gray.500" fontWeight="bold" fontSize="13px" mb="1">
              Password
            </FormLabel>
            <Input height="40px" type="password" placeholder="" />
          </FormControl>


          <Flex mb="2">
            <Text ml="auto" fontSize="sm" color="red.500" fontWeight="bold">Forgot password?</Text>
          </Flex>


          <Button w="100%" fontWeight="bold" colorScheme="red" fontSize="sm" py="6" my="auto" borderRadius="md">
            Signup
        </Button>

          <Link to="/login">
            <Text mt="2" textAlign="center" ml="auto" fontSize="sm" color="red.500" fontWeight="bold">Already have an account?Login</Text>
          </Link>

        </Box>
      </Container>
    </Flex>
  )
}

export default Signup