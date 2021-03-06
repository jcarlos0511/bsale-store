import { FC } from 'react'
import { useRouter } from 'next/router'
import NextLink from 'next/link'
import { Link, List, ListItem } from '@chakra-ui/layout'

import { useSearchMeta } from '@/lib/hooks'

interface Props {
  closeMenu?: () => void
}

const SORT = Object.entries({
  'price-asc': 'Precio: Bajo a alto',
  'price-desc': 'Precio: Alto a bajo'
})

const SortItem: FC<Props> = ({ closeMenu }) => {
  const router = useRouter()
  const { asPath } = router
  const { q } = router.query
  const { pathname, category } = useSearchMeta(asPath)

  // * remove this
  console.log({ pathname, category })

  return (
    <List spacing={2} mt={4}>
      <ListItem
        fontWeight="semibold"
        fontSize="xl"
        textTransform="capitalize"
        lineHeight="tight"
      >
        <NextLink href={{ pathname, query: { q } }}>
          <Link onClick={closeMenu}>Ordenar</Link>
        </NextLink>
      </ListItem>

      {SORT.map(([key, text]) => (
        <ListItem key={key} ml={[4, 4, 4, 0]}>
          <NextLink
            href={{
              pathname,
              query: q !== undefined ? { q, sort: key } : { sort: key }
            }}
          >
            <Link onClick={closeMenu}>{text}</Link>
          </NextLink>
        </ListItem>
      ))}
    </List>
  )
}

export default SortItem
