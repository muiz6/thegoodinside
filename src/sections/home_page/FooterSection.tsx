import { Box, chakra, Flex, Link, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import Container from 'components/Container';

export default function FooterSection() {
  return (
    <chakra.section>
      <Box bgColor="black" color="white" px="5">
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
      </Box>
      <Container px="5">
        <Box border="1px solid black" py="5" px="10" mt="7">
          <Text fontSize="sm">
            *These statements have not been evaluated by the Food and Drug Administration. Our products are not intended to diagnose, treat, cure or prevent any disease.
          </Text>
        </Box>
        <Flex justify="space-between" pt="5" pb="10" fontSize="sm">
          &copy; COPYRIGHT 2011- 2023 TOUCHSTONE ESSENTIALS. ALL RIGHTS RESERVED
          <Box>
            <Link href="#">PRIVACY POLICY</Link>
            <Link href="#" ml="5">POLICIES & PROCEDURES</Link>
          </Box>
        </Flex>
      </Container>
    </chakra.section>
  );
}
