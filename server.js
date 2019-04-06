const express = require('express')
const { json, urlencoded } = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

const app = express()
const router = express.Router()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

const log = (req, res, next) => {
    console.log('logging')
    next()
}

app.use(log)


app.get('/data', (req, res) => {
    res.send({ data: [1, 2, 3] })
})

app.post('/data', (req, res) => {
    res.send(req.body)
})


app.listen(3000, () => {
    console.log('server is on 3000')
})

