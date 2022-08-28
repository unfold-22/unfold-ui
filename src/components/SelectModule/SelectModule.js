import {
  Avatar,
  Divider,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Tag,
} from '@chakra-ui/react';
import Dapps from '../../pages/Dapps';

const SelectModule = ({ isOpen, setIsOpen, onSelect }) => {
  return (
    <Modal size={'3xl'} isOpen={isOpen} onClose={() => setIsOpen(false)}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Select ZAP</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <HStack spacing={4}>
            <Tag colorScheme="red" cursor={'pointer'} size={'lg'}>
              <Avatar
                bg={'white'}
                src="https://icons-for-free.com/download-icon-money+icon-1320184267002448371_512.png"
                size="xs"
                name="Segun Adebayo"
                ml={-1}
                mr={2}
              />
              Defi
            </Tag>
            <Tag cursor={'pointer'} size={'lg'}>
              <Avatar
                bg={'white'}
                src="https://cdn0.iconfinder.com/data/icons/non-fungible-token/512/NFT-Blockchain-crypto-02-1024.png"
                size="xs"
                name="Segun Adebayo"
                ml={-1}
                mr={2}
              />
              NFTs
            </Tag>

            <Tag cursor={'pointer'} size={'lg'}>
              ALL
            </Tag>
          </HStack>
          <Divider mt={4} />
          <Dapps selected={false} onSelect={onSelect} />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default SelectModule;
