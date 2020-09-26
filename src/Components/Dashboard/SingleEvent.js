import React from 'react';
import { Box, Text, Center, ModalFooter, Button, Wrap } from '@chakra-ui/core';

const SingleEvent = ({ description, time, close }) => {
  return (
    <React.Fragment>
      <Center flexDir="column" bg="rgba(242,242,242,0.35)" px="6" py="12">
        <Wrap color="primary.500" fontSize="sm" fontWeight="bold" spacing="20px">
          <Text>2 months</Text>
          <Text>2 weeks</Text>
          <Text>3 days</Text>
        </Wrap>


        <Text mt="4" fontWeight="900" fontSize="xl">
          00:00:00
        </Text>
      </Center>

      <Box px="6" mt="12">
        <Text fontSize="13px" fontWeight="bold" mb="2" color="gray.500">Description</Text>
        <Text fontSize="15px">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin, ipsum non convallis bibendum, sapien metus interdum elit, ut finibus diam lectus sed lacus. Aliquam sit amet gravida dolor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</Text>
      </Box>


      <ModalFooter mt="10">
        <Button fontWeight="bold" onClick={close} bg="white" borderWidth="1px" fontSize="sm" borderRadius="md">
          Close
        </Button>
      </ModalFooter>
    </React.Fragment>
  )
}

export default SingleEvent
