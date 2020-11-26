import React, { useState } from 'react';

import firebase from 'firebase'

import {
  Box, Text, Flex, Button,
  Container,
  useToast
} from '@chakra-ui/core';

import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import FormControlInput from '../../UI/Form/FormControlInput';

const ResetPassword = () => {
  const toast = useToast();
  const [loading, setLoading] = useState(false);
  if (localStorage.getItem("loggedIn") === true) { window.location.href = "/dashboard" }

  // CHeck if user is logged in
  // firebase.auth().onAuthStateChanged(function (user) {
  //   if (user) {
  //     window.location.href = "/dashboard";
  //   } else {
  //     console.log("logged out")
  //   }
  // });

  const ResetPassword = async (email) => {
    setLoading(true)
    try {
      await firebase.auth().sendPasswordResetEmail(email);
      toast({
        title: "Success",
        description: "Reset Instructions been sent to your account",
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
    ResetPassword(data.email)
  };



  return (
    <Flex bg="rgba(242,242,242,0.2)" h="100vh">

      <Container m="auto" maxW="40ch" >
        <Text textAlign="center" color="primary.500" fontSize="4xl" fontWeight="900">Timer</Text>

        <Text textAlign="center" fontWeight="bold" fontSize="lg">
          Reset your password
        </Text>


        {/* Forms here */}
        <Box px="6" pt="8" pb="8" mt="8" bg="white" borderWidth="1px" boxShadow="sm" borderRadius="md">
          <Text fontSize="sm" mb="5">Enter your email and we'll send you instructions on how to reset your password.</Text>

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


            {/* Forgot password */}
            <Flex mb="2">
              <Link to="/login">
                <Text ml="auto" fontSize="sm" color="primary.500" fontWeight="bold">Back to Login
                </Text>
              </Link>

            </Flex>


            <Button isLoading={loading} loadingText="Verifying your email..." type="submit" w="100%" fontWeight="bold" colorScheme="primary" fontSize="sm" py="6" my="auto" borderRadius="md">
              Reset Password
            </Button>

          </form>
        </Box>
      </Container>
    </Flex>
  )
}

export default ResetPassword
