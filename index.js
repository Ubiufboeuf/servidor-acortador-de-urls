import express from 'express'
import { db } from './client.js'

const app = express()
const PORT = process.env.PORT ?? 1234

app.get('/', async (req, res) => {
  const { rows } = await db.execute('SELECT * FROM url')
  console.log(rows)
  res.send(rows)
})

app.post('/', (req, res) => {
  req.on('data', async (d) => {
    const body = d.toString()
    const { rows } = await db.execute({
      sql: 'SELECT url FROM url WHERE url = ?',
      args: [body]
    })
      .then(({ rows }) => {
        res.send(rows[0])
      })
  })
})

app.listen(PORT, console.log(`Server is listen in port: ${PORT}`))