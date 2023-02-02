import { Card, Flex, Link, Text, Icon, Box } from '@chakra-ui/react';
import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

export default function ContentItem() {
  return (
    <Card>
      <Box h="200px" bg="url(/img/content-item.jpg)" bgSize="cover" />
      <Box p="5">
        <Text fontSize="3xl">
          Strawberry Banana High Fiber Smoothie
        </Text>
        <Text mt="10">
          Power through your workout or workday with energy that lasts after this delightfully tasty dairy-free smoothie. While protein is the[...]
        </Text>
        <Flex alignItems="center" mt="5">
          <Link>Read More</Link>
          <Icon as={FaChevronRight} />
        </Flex>
      </Box>
    </Card>
  );
}
