'use strict';

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8090

//DB Operations
const db = require('./queries')

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (request, response) => {
    response.json({
        info: 'Node.js, Express, and Postgres API'
    })
})

app.get('/users', db.getUsers)

app.get('/users/:id', db.getUserById)

app.post('/users', db.createUser)

app.put('/users/:id', db.updateUser)

app.delete('/users/:id', db.deleteUser)

app.get('/posts', db.getPosts)

app.get('/posts/:id', db.getPostById)

app.post('/posts', db.createPost)

app.put('/posts/:id', db.updatePost)

app.delete('/posts/:id', db.deletePost)

app.get('/comments', db.getComments)

app.get('/comments/:id', db.getCommentById)

app.post('/comments', db.createComment)

app.put('/comments/:id', db.updateComment)

app.delete('/comments/:id', db.deleteComment)

app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})