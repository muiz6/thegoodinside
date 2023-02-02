import { Box, Button, Card, chakra, SimpleGrid } from '@chakra-ui/react';
import Container from 'components/Container';
import ContentItem from 'components/ContentItem';
import React from 'react';

export default function ContentSection() {
  return (
    <chakra.section pb="7">
      <Container>
        <Card px="10" py="12">
          <SimpleGrid columns={{ md: 3 }} mx="-2.5">
            {
              Array.from({ length: 12 }).map(() => (
                <Box p="1.5">
                  <ContentItem />
                </Box>
              ))
            }
          </SimpleGrid>
          <Button type="button" w="150px" colorScheme="green" mx="auto" color="white" mt="5" bgColor="green">Load More</Button>
        </Card>
      </Container>
    </chakra.section>
  );
}
