import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import ContentSection from 'sections/home_page/ContentSection';

import FooterSection from 'sections/home_page/FooterSection';
import HeaderSection from 'sections/home_page/HeaderSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>Our Blog - The Good Inside</title>
      </Head>
      <HeaderSection />
      <Box mt="-16">
        <ContentSection />
      </Box>
      <FooterSection />
    </>
  )
}
