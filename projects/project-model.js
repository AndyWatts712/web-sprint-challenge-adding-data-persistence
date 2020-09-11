const db = require('../data/connection')

module.exports = {
    getProjects
}

function getProjects() {
    return db('projects')
}