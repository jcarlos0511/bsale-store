import { FC } from 'react'
import NextLink from 'next/link'
import { Box, Flex, Heading, Link, Stack } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/image'
import { useColorModeValue } from '@chakra-ui/color-mode'

import { SearchBar, UserBar } from '@/components/common'

const Header: FC = () => {
  const bg = useColorModeValue('white', 'gray.900')

  return (
    <Stack
      as="header"
      position="fixed"
      zIndex={99}
      alignItems="center"
      backgroundColor={bg}
      w="full"
      boxShadow="sm"
      px={4}
      py={2}
    >
      <Flex
        as="nav"
        alignItems="center"
        justifyContent="space-between"
        maxW="1280px"
        margin="0 auto"
        w="full"
        h={['40px', '50px', '60px']}
      >
        <Box display="flex" justifyContent="center" alignItems="center">
          <NextLink href="/" passHref>
            <Link display="flex" alignItems="center" fontWeight="medium">
              <Image
                w="84px"
                h="36px"
                src="https://dojiw2m9tvv09.cloudfront.net/16738/2/img-logos-web-bsale-naranjo.png?268"
                alt="Bsale Logo"
              />
              <Heading
                as="h4"
                size="md"
                lineHeight="tight"
                w="fit-content"
                isTruncated
              >
                Store
              </Heading>
            </Link>
          </NextLink>
        </Box>

        <SearchBar />

        <UserBar />

      </Flex>

      <SearchBar isResponsive />
    </Stack>
  )
}

export default Header
