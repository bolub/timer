import React, { useState } from 'react';
import {
  Flex, Button, Input, FormControl,
  FormLabel,
  Textarea, useToast
} from '@chakra-ui/core';
import firebase from 'firebase';
import { v4 as uuidv4 } from 'uuid';

const NewEvent = ({ close }) => {
  const toast = useToast();

  const user = firebase.auth().currentUser;
  const eventID = uuidv4();

  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({
    date: "",
    title: "",
    description: ""
  })

  return (
    <React.Fragment>

      <FormControl mb="8" id="date">
        <FormLabel color="gray.500" fontWeight="bold" fontSize="13px" mb="1">Pick a Day</FormLabel>
        <Input onChange={e => setData({ ...data, date: new Date(e.target.value).toISOString() })} height="45px" type="date" />
        {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
      </FormControl>


      <FormControl mb="8" id="title">
        <FormLabel color="gray.500" fontWeight="bold" fontSize="13px" mb="1">What’s happening on this day</FormLabel>
        <Input onChange={(e) => setData({ ...data, title: e.target.value })} height="45px" type="text" placeholder="My Birthday" />
        {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
      </FormControl>

      <FormControl id="description">
        <FormLabel color="gray.500" fontWeight="bold" fontSize="13px" mb="1">
          Tell us more about it
        </FormLabel>

        <Textarea onChange={(e) => setData({ ...data, description: e.target.value })} height="50px" />
        {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
      </FormControl>



      <Flex mt="10">
        <Button ml="auto" fontWeight="bold" onClick={close} bg="white" borderWidth="1px" fontSize="sm" py="6" my="auto" borderRadius="md">
          Cancel
        </Button>

        <Button
          onClick={() => {
            if (user && eventID) {
              firebase.database().ref(`events/${eventID}`).set({
                title: data.title,
                description: data.description,
                time: data.date,
                userId: user.uid
              });
              close();
            } else {
              toast({
                title: "Error",
                description: "Not yet",
                status: "error",
                duration: 10000,
                isClosable: true,
                position: "top-right"
              })
            }



          }}
          ml="2"
          isDisabled={loading || !data.title || !data.description || !data.date || !user || !eventID}
          isLoading={loading}
          loadingText="Creating event"
          fontWeight="bold"
          colorScheme="primary"
          fontSize="sm"
          py="6"
          my="auto"
          borderRadius="md"
        >
          Create Event
        </Button>
      </Flex>
    </React.Fragment>
  )
}

export default NewEvent
