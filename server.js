const express = require('express')

const ProjectRouter = require('../projects/project-router')

const db = require('../data/connection')

const server = express()

server.use(express.json())

server.use('/api', ProjectRouter)

module.exports = server