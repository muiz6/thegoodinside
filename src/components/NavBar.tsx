import { Button, chakra, Flex, Image, Link, Icon } from '@chakra-ui/react';
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

import Container from './Container';

export default function NavBar() {
  return (
    <chakra.nav bgColor="primary" py="4">
      <Container display="flex" justifyContent="space-between" alignItems="center">
        <Image src="/img/logo.webp" />
        <Flex color="white" alignItems="center">
          <Button variant="sm" colorScheme="orange" color="white" bgColor="orange">SHOP</Button>
          <Link ml="5" href="#">Collaborate</Link>
          <Link ml="5" href="#">Community</Link>
          <Link ml="5" href="#">Why Touchstone</Link>
          <Icon as={FaShoppingCart} ml="5" />
        </Flex>
      </Container>
    </chakra.nav>
  );
}
