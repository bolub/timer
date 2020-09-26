import React, { useState } from 'react';

import firebase from 'firebase'

import {
  Box, Text, Flex, Button,
  Container, useToast
} from '@chakra-ui/core';

import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import FormControlInput from '../../UI/Form/FormControlInput';


const Signup = () => {
  const toast = useToast();
  const [loading, setLoading] = useState(false);


  // CHeck if user is logged in
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      window.location.href = "/dashboard";
    } else {
      console.log("logged out")
    }
  });

  const createUser = async (email, password) => {
    setLoading(true)
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      toast({
        title: "Success",
        description: "Account created successfully",
        status: "success",
        duration: 10000,
        isClosable: true,
        position: "top-right"
      })

      setLoading(false);
    } catch (error) {
      setLoading(false);

      toast({
        title: "Error",
        description: error.message,
        status: "error",
        duration: 10000,
        isClosable: true,
        position: "top-right"
      })
    }


  }

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    createUser(data.email, data.password)
  };


  return (
    <Flex bg="rgba(242,242,242,0.2)" h="100vh">

      <Container m="auto" maxW="40ch" >
        <Text textAlign="center" color="primary.500" fontSize="4xl" fontWeight="900">Timer</Text>

        <Text textAlign="center" fontWeight="bold" fontSize="lg">Signup for your account</Text>


        {/* Forms here */}
        <Box px="6" pt="8" pb="8" mt="4" bg="white" borderWidth="1px" boxShadow="sm" borderRadius="md">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* EMail */}
            <FormControlInput
              type="email"
              name="email"
              label="Email"
              errors={errors.email}
              ref={register({
                required: "Your email is required",
                pattern: {
                  value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Your email dosen't look right"
                },
              })
              }

            />


            {/* Password */}
            <FormControlInput
              type="password"
              name="password"
              label="Password"
              errors={errors.password}
              ref={register({
                required: "Your password is required",
                minLength: {
                  value: 4,
                  message: "Your password should be 4 words or more"
                }
              })}
            />


            <Flex mb="2">
              <Text ml="auto" fontSize="sm" color="primary.500" fontWeight="bold">Forgot password?</Text>
            </Flex>


            <Button isLoading={loading} loadingText="Creating your account" type="submit" w="100%" fontWeight="bold" colorScheme="primary" fontSize="sm" py="6" my="auto" borderRadius="md">
              Signup
        </Button>

            <Link to="/login">
              <Text mt="2" textAlign="center" ml="auto" fontSize="sm" color="primary.500" fontWeight="bold">Already have an account?Login</Text>
            </Link>
          </form>
        </Box>
      </Container>
    </Flex>
  )
}

export default Signup