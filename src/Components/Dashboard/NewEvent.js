import React from 'react';
import {
  Flex, Button, Input, FormControl,
  FormLabel,
  Textarea
} from '@chakra-ui/core';

const NewEvent = ({ close }) => {
  return (
    <React.Fragment>

      <FormControl mb="8" id="date">
        <FormLabel color="gray.500" fontWeight="bold" fontSize="13px" mb="1">Pick a Day</FormLabel>
        <Input height="45px" type="date" />
        {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
      </FormControl>


      <FormControl mb="8" id="title">
        <FormLabel color="gray.500" fontWeight="bold" fontSize="13px" mb="1">What’s happening on this day</FormLabel>
        <Input height="45px" type="text" placeholder="My Birthday" />
        {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
      </FormControl>

      <FormControl id="description">
        <FormLabel color="gray.500" fontWeight="bold" fontSize="13px" mb="1">
          Tell us more about it
        </FormLabel>

        <Textarea height="50px" />
        {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
      </FormControl>



      <Flex mt="10">
        <Button ml="auto" fontWeight="bold" onClick={close} bg="white" borderWidth="1px" fontSize="sm" py="6" my="auto" borderRadius="md">
          Cancel
        </Button>

        <Button ml="2" fontWeight="bold" colorScheme="primary" fontSize="sm" py="6" my="auto" borderRadius="md">
          Create Event
        </Button>
      </Flex>
    </React.Fragment>
  )
}

export default NewEvent
