const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;

app.use(cors());

const courses = require('./data/courses.json')

app.get('/', (req, res) => {
    res.send('Server running')
})

app.get('/courses', (req, res) => {
    res.send(courses)
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id
    const selectedcourse = courses.find(course => course.id === id)
    res.send(selectedcourse)
})

app.listen(port, () => {
    console.log(`Server side running in this port ${port}`)
})