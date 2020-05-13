const express = require('express')
const bodyParser = require('body-parser')
const fs = require('fs')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(bodyParser.json())

const readTasksJson = () => JSON.parse(fs.readFileSync('./tasks.json'))

const writeTasksJson = json => {
  fs.writeFileSync('./tasks.json', JSON.stringify(json))
}

app.get('/', (req, res) => {
  res.send('ok')
})

app.get('/tasks', (req, res) => {
  try {
    const tasks = readTasksJson()
    res.json(tasks)
  } catch (error) {
    console.error(error)
    res.status(500)
    res.json(error)
  }
})

app.get('/tasks/:id', (req, res) => {
  try {
    let tasks = readTasksJson()
    tasks = tasks.filter(task => task.id == req.params.id)
    res.json(tasks)
  } catch (error) {
    console.error(error)
    res.status(500)
    res.json(error)
  }
})

app.post('/tasks', (req, res) => {
  try {
    let tasks = readTasksJson()
    let task = req.body
    let lastId = -1
    tasks.map(task => task.id > lastId ? lastId = task.id : null)
    // task.id = tasks.length ? (parseInt(tasks[tasks.length -1].id) + 1) : 1
    task.id = ++lastId
    tasks.push(task)
    writeTasksJson(tasks)
    res.status(201)
    res.json(task)
  } catch (error) {
    console.error(error)
    res.status(500)
    res.json(error)
  }
})

app.put('/tasks/:id', (req, res) => {
  try {
    let tasks = readTasksJson()
    tasks = tasks.filter(task => task.id != req.params.id)
    let task = req.body
    task.id = parseInt(req.params.id)
    tasks.push(task)
    writeTasksJson(tasks)
    res.status(200)
    res.json(task)
  } catch (error) {
    console.error(error)
    res.status(500)
    res.json(error)
  }
})

app.delete('/tasks/:id', (req ,res) => {
  try {
    let tasks = readTasksJson()
    tasks = tasks.filter(task => task.id != req.params.id)
    writeTasksJson(tasks)
    res.status(204)
    res.send('deleted')
  } catch (error) {
    console.error(error)
    res.status(500)
    res.json(error)
  }
})

app.listen(3000, () => {
  console.log('Listening at 3000')
})