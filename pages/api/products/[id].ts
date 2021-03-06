import { NextApiHandler } from 'next'

import { query } from '@/lib/db'

const handler: NextApiHandler = async (req, res) => {
  const { id } = req.query

  try {
    if (id === undefined) {
      return res.status(400).json({ message: 'id required' })
    }

    const results = await query(
      `
        SELECT * FROM product
        WHERE id = ?
      `,
      id // Query with placeholders (?)
    )

    return res.status(200).json(results)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export default handler
