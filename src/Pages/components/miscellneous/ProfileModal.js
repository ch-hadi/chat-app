import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    IconButton,
    Image,
  } from '@chakra-ui/react'
import { ViewIcon } from '@chakra-ui/icons'
const ProfileModal = ({user , children}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
      <>
      {children? (<span onClick={onOpen}>{children}</span>):
      (<IconButton display={{base:'flex'}} icon={<ViewIcon/>} onClick={onOpen}/>)}
     <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader
          display='flex'
          justifyContent='center'
          >{user.data.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
          <Image
           src={user.data.pic}
           alt={user.name}
           borderRadius='full'
          />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
     
      </>
    )
}

export default ProfileModal