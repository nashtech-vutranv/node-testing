import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import post from './router/post.js'

const app = express()
const PORT = process.env.port || 5000

app.use(bodyParser.json({limit: '30mb'}))
app.use(bodyParser.urlencoded({extended: true, limit: '30mb'}))
app.use(cors())

app.use('/posts', post)

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`)
})