'use strict'

const storage = require('node-persist')

storage.initSync()

module.exports = {
  getProjects: getProjects,
  saveProjects: saveProjects
}

var defaultProjects = [{
  id: 0,
  name: 'localhost',
  addr: ['127.0.0.1', '::1']
}];

function getProjects () {
  var projects = storage.getItemSync('projects')
  if (projects !== undefined) {
    return projects
  } else {
    storage.setItemSync('projects', defaultProjects)
    return defaultProjects
  }
}

function saveProjects (projects) {
  storage.setItemSync('projects', projects)
}
