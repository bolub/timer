import React, { Fragment } from 'react'
import { Heading, Text, Button, useDisclosure, Flex } from '@chakra-ui/core';

// COmponents
import Modal from '../UI/Modal';
import SingleEvent from './SingleEvent';

const EventCard = ({ title = "My Birthday", date = "5 days from now" }) => {

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Fragment>
      <Button onClick={onOpen} as="center" cursor="pointer" bg="white" flexDir="column" boxShadow="0px 2px 1px #B16B6D" borderWidth="1px" borderRadius="md" minH="250px" px="6" py="8">
        <Heading as="h2" fontSize="md">
          {title}
        </Heading>

        <Text fontSize="sm" mt="1" color="red.500" fontWeight="700">{date}</Text>


        <Text mt="4" color="#737373" fontWeight="700" fontSize="xl">
          00:00:00
      </Text>
      </Button>

      <Modal
        isOpen={isOpen}
        size="xl"
        onClose={onClose}
        headerPTop={4}
        bodyPX={0}
        headerChildren={
          <Flex color="#B16B6D">
            {/* Icon */}
            <Text my="auto" fontSize="sm">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" rx="24" fill="currentColor" fill-opacity="0.41" />
                <path d="M20 19V15M28 19V15M19 23H29M17 33H31C31.5304 33 32.0391 32.7893 32.4142 32.4142C32.7893 32.0391 33 31.5304 33 31V19C33 18.4696 32.7893 17.9609 32.4142 17.5858C32.0391 17.2107 31.5304 17 31 17H17C16.4696 17 15.9609 17.2107 15.5858 17.5858C15.2107 17.9609 15 18.4696 15 19V31C15 31.5304 15.2107 32.0391 15.5858 32.4142C15.9609 32.7893 16.4696 33 17 33Z" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

            </Text>

            <Text fontWeight="bold" fontSize="lg" my="auto" ml="2">
              {title}
            </Text>
          </Flex>
        }
      >
        <SingleEvent close={onClose} />
      </Modal>
    </Fragment>
  )
}

export default EventCard
