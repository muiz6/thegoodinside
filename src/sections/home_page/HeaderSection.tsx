import { chakra, Text } from '@chakra-ui/react';
import React from 'react';

export default function HeaderSection() {
  return (
    <chakra.header bgColor="gray.400" px="5" pt="20" pb="48" bg="url(/img/header.jpg)" bgSize="cover">
      <Text as="h1" fontSize="6xl" color="white" textAlign="center" maxW={{ md: '1000px' }} mx={{ md: 'auto' }}>
        Get the inside scoop on plant-based nutrition, expert info, healthy inspiration and more.
      </Text>
    </chakra.header>
  );
}
