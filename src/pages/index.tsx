import Head from 'next/head';

import FooterSection from 'sections/home_page/FooterSection';
import HeaderSection from 'sections/home_page/HeaderSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>Our Blog - The Good Inside</title>
      </Head>
      <HeaderSection />
      <FooterSection />
    </>
  )
}
