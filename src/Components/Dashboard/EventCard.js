import React, { Fragment } from 'react'
import { Heading, Text, Button, useDisclosure, Flex } from '@chakra-ui/core';

// COmponents
import Modal from '../UI/Modal';
import SingleEvent from './SingleEvent';
// import Timer from 'react-compound-timer'

import Moment from 'react-moment'

const EventCard = ({ event }) => {

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Fragment>
      <Button onClick={onOpen} as="center" cursor="pointer" bg="white" flexDir="column" boxShadow="0px 2px 1px #0a0ae4" borderWidth="1px" borderRadius="md" minH="230px" px="9" py="8">
        <Heading as="h2" fontSize="lg">
          {event.title}
        </Heading>

        <Text textTransform="capitalize" mt="3" fontSize="md" color="primary.500" fontWeight="700">
          <Moment fromNow>{event.date}</Moment>
          {/* <Moment unix>{date}</Moment> */}
        </Text>


        <Text mt="4" color="#737373" fontWeight="700" fontSize="xl">
          {/* <Timer initialTime={55000}>
            <Timer.Days />d:&nbsp;
            <Timer.Hours />h:&nbsp;
            <Timer.Minutes />m:&nbsp;
            <Timer.Seconds />s
            </Timer> */}
          {/* <Timer
            initialTime={new Date(date).getTime() / 1000}
            direction="backward"
          >
            {() => (
              <React.Fragment>
                <Timer.Days />d:&nbsp;
                <Timer.Hours />h:&nbsp;
                <Timer.Minutes />m:&nbsp;
                <Timer.Seconds />s
              </React.Fragment>
            )}
          </Timer> */}
        </Text>
      </Button>

      <Modal
        isOpen={isOpen}
        size="xl"
        onClose={onClose}
        headerPTop={4}
        bodyPX={0}
        headerChildren={
          <Flex color="primary.500">
            {/* Icon */}
            <Text my="auto" fontSize="sm">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" rx="24" fill="currentColor" fillOpacity="0.41" />
                <path d="M20 19V15M28 19V15M19 23H29M17 33H31C31.5304 33 32.0391 32.7893 32.4142 32.4142C32.7893 32.0391 33 31.5304 33 31V19C33 18.4696 32.7893 17.9609 32.4142 17.5858C32.0391 17.2107 31.5304 17 31 17H17C16.4696 17 15.9609 17.2107 15.5858 17.5858C15.2107 17.9609 15 18.4696 15 19V31C15 31.5304 15.2107 32.0391 15.5858 32.4142C15.9609 32.7893 16.4696 33 17 33Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

            </Text>

            <Text fontWeight="900" fontSize="lg" my="auto" ml="2">
              {event.title}
            </Text>
          </Flex>
        }
      >
        <SingleEvent event={event} close={onClose} />
      </Modal>
    </Fragment>
  )
}

export default EventCard
