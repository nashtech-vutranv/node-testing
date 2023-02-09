import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import post from './router/posts.js'
import mongoose from 'mongoose'

const app = express()
const PORT = process.env.port || 5000

const URI = 'mongodb+srv://vutran:PukLygC1ZgIBVIHk@cluster0.tbz2zk0.mongodb.net/?retryWrites=true&w=majority'

app.use(bodyParser.json({limit: '30mb'}))
app.use(bodyParser.urlencoded({extended: true, limit: '30mb'}))
app.use(cors())

app.use('/posts', post)

mongoose.connect(URI).then(
  () => {
    console.log('connected to DB')
    app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})
  }
).catch(err => {
  console.log({err})
})

