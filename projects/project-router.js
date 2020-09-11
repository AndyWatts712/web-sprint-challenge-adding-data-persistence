const express = require('express')

const projects = require('./project-model')

const router = express.Router()

router.get('/' , (req, res) => {
    projects.getProjects()
        .then(resp => {
            res.status(200).json({resp})
        })
        .catch(err => {
            res.json(500).json({error: error.message})
        })
})

module.exports = router