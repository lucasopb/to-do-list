const express = require('express')
const checkListRouter = require('./src/routes/checklist')
const app = express()

app.use(express.json())

app.use(checkListRouter)

/* const log = (req, res, next) => {
    console.log(req.body)
    console.log(`data : ${Date.now()}`)
    next()
}

app.use(log)

app.get('/', (req, res) => {
    res.send('<h1>my to do list :)</h1>')
})

app.get('/json', (req, res) => {
    console.log(req.body)
    res.json({title: 'task x', done: true})
}) */



app.listen(3000, () => {
    console.log('server started')
})