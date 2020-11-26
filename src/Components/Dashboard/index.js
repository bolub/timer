import React, { useState, useEffect } from 'react';
import firebase from 'firebase';

// Libraries
import {
  Container, Text, Flex, Button, SimpleGrid, useDisclosure, Avatar, Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  Center
} from '@chakra-ui/core';


// Components
import EventCard from './EventCard';
import Modal from './../UI/Modal';
import NewEvent from './NewEvent';


const Landing = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [loading, setLoading] = useState(false);
  const [allData, setAllData] = useState({});

  // LOgout
  const logout = async () => {

    try {
      await firebase.auth().signOut();
      localStorage.setItem("loggedIn", false)
      window.location.href = "/login";

    } catch (error) {
      console.log(error);
    }
  }

  const getData = async () => {
    setLoading(true)
    try {
      // firebase.database().ref('events/').once('value').then(function (snapshot) {
      //   setLoading(false)
      //   setAllData(snapshot.val());
      // });

      const ev = firebase.database().ref('events/');
      ev.on('value', function (snapshot) {
        setLoading(false)
        setAllData(snapshot.val());
      });

    } catch (error) {
      setLoading(false)
      console.log(error);
    }
  }

  useEffect(() => {
    getData()
  }, [])


  const allOData = allData ? Object.values(allData) : []

  return (
    <Container my={10} maxW="110ch">

      {/* Navbar */}
      <nav>
        <Flex mb="10">
          <Text color="primary.500" my="auto" fontSize="xl" fontWeight="900">Timer</Text>

          <Menu >
            <MenuButton ml="auto">
              <Avatar w="40px" h="40px" ml="auto" />
            </MenuButton>

            <MenuList>
              <MenuGroup title="Profile">
                {/* <MenuItem>My Account</MenuItem> */}
                {/* <MenuItem>Github</MenuItem> */}
                <MenuItem onClick={logout}>Logout</MenuItem>
              </MenuGroup>
              {/* <MenuDivider />
              <MenuGroup title="Help">
                <MenuItem>Docs</MenuItem>
                <MenuItem>FAQ</MenuItem>
              </MenuGroup> */}
            </MenuList>
          </Menu>
          {/* <Button my="auto" ml="auto" colorScheme="primary" fontWeight="bold">Contact Developer</Button> */}
        </Flex>
      </nav>



      {/* COntent */}
      <main>
        <SimpleGrid columns={[1, 2, 3]} spacing="20px">

          <React.Fragment>
            <Button onClick={onOpen} as="center" bg="white" cursor="pointer" flexDir="column" borderStyle="dashed" borderWidth="2px" borderRadius="md" minH="230px" p="6">
              <Text color="primary.500">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 8.75V3.75M20 8.75V3.75M8.75 13.75H21.25M6.25 26.25H23.75C24.413 26.25 25.0489 25.9866 25.5178 25.5178C25.9866 25.0489 26.25 24.413 26.25 23.75V8.75C26.25 8.08696 25.9866 7.45107 25.5178 6.98223C25.0489 6.51339 24.413 6.25 23.75 6.25H6.25C5.58696 6.25 4.95107 6.51339 4.48223 6.98223C4.01339 7.45107 3.75 8.08696 3.75 8.75V23.75C3.75 24.413 4.01339 25.0489 4.48223 25.5178C4.95107 25.9866 5.58696 26.25 6.25 26.25Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>

              </Text>
              <Text fontWeight="bold" mt="3">New Event</Text>
            </Button>

            {/* <EventCard title="Graduation" />
              <EventCard /> */}
            {!loading && allOData &&
              <React.Fragment>

                {allOData.length > 0 ?
                  allOData.map((event, index) => {
                    // console.log(formatDistanceToNow(event.time, { addSuffix: true }))
                    return (
                      <EventCard event={event} key={index} />
                    );
                  })
                  : "None available"}
              </React.Fragment>
            }
          </React.Fragment>


          {loading &&
            <Center>
              <Text>Loading data...</Text>
            </Center>
          }
        </SimpleGrid>
      </main>


      <Modal
        isOpen={isOpen}
        size="lg"
        onClose={onClose}
        headerChildren={
          <Flex py="4" px="4" color="primary.500">
            {/* Icon */}
            <Text my="auto" fontSize="sm">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" rx="24" fill="currentColor" fillOpacity="0.41" />
                <path d="M20 19V15M28 19V15M19 23H29M17 33H31C31.5304 33 32.0391 32.7893 32.4142 32.4142C32.7893 32.0391 33 31.5304 33 31V19C33 18.4696 32.7893 17.9609 32.4142 17.5858C32.0391 17.2107 31.5304 17 31 17H17C16.4696 17 15.9609 17.2107 15.5858 17.5858C15.2107 17.9609 15 18.4696 15 19V31C15 31.5304 15.2107 32.0391 15.5858 32.4142C15.9609 32.7893 16.4696 33 17 33Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>

            </Text>

            <Text fontWeight="900" fontSize="lg" my="auto" ml="2">
              Create Event
            </Text>
          </Flex>
        }
        bodyPX="10"
      >
        <NewEvent close={onClose} />
      </Modal>
    </Container>
  )
}

export default Landing
