import React from 'react';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure
} from "@chakra-ui/core"

const CustomModal = ({ size = "md", isOpen, onClose, headerPTop = 4, bodyPX = 6, headerChildren, children }) => {

  // const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Modal isOpen={isOpen} size={size} onClose={onClose}>
      <ModalOverlay>
        <ModalContent>
          <ModalHeader py={headerPTop}>
            {headerChildren}
          </ModalHeader>
          <ModalCloseButton />

          <ModalBody px={bodyPX} mb="4">
            {children}
          </ModalBody>

          {/* <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
              </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter> */}
        </ModalContent>
      </ModalOverlay>
    </Modal>
  )
}

export default CustomModal
