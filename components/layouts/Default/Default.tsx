import { FC } from 'react'
import Head from 'next/head'
import { Container } from '@chakra-ui/layout'
import { Footer, Header } from '@/components/ui'

const DefaultLayout: FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>BSALE Store - Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Container
        as="main"
        backgroundColor="gray.50"
        centerContent
        maxW="full"
        minHeight="100vh"
        p="1rem"
      >
        {children}
      </Container>
      <Footer />
    </>
  )
}

export default DefaultLayout
