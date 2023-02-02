import { Box, chakra, Link, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import Container from 'components/Container';

export default function FooterSection() {
  return (
    <chakra.section bgColor="black" color="white" px="5">
      <Container py="16">
        <SimpleGrid columns={{ md: 3 }}>
          <Box>
            <Text fontWeight="bold">
              Phone USA/CAN:&nbsp;
              <Link fontWeight="normal" href="#">+1(919) 900-4300</Link>
            </Text>
            <Text fontWeight="bold">
              Phone GBR:&nbsp;
              <Link fontWeight="normal" href="#">020 3887 3838</Link>
            </Text>
            <Text fontWeight="bold">
              Phone EUR:&nbsp;
              <Link fontWeight="normal" href="#">44 20 3887 3838</Link>
            </Text>
            <Text fontWeight="bold">
              <Link href="#">Email Us</Link>
            </Text>
            <Text fontWeight="bold">
              <Link href="#">Weekly Newsletter Sign-Up</Link>
            </Text>
          </Box>
          <Box>
            <Text><Link href="#">Contact Us</Link></Text>
            <Text><Link href="#">FAQs</Link></Text>
            <Text><Link href="#">Log in</Link></Text>
            <Text><Link href="#">Collaborate</Link></Text>
            <Text><Link href="#">VBO & Affiliate Resources</Link></Text>
          </Box>
          <Box fontWeight="bold">
            <Text><Link href="#">Follow Us</Link></Text>
          </Box>
        </SimpleGrid>
      </Container>
    </chakra.section>
  );
}
