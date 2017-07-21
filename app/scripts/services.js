/* global app */

/**
 * Email Resource
 */

app.service('Email', ['$resource', function ($resource) {
  return $resource('email/:id', { id: '' }, {
    update: {
      method: 'PUT',
      params: {}
    }
  })
}])

app.factory('projectService', function () {
  var projects = []
  var projectService = []
  projectService.set = function (items) {
    projects = items
  }

  projectService.list = function () {
    return projects
  }

  projectService.getProjectForAddr = function (addr) {
    var projects = projectService.list()
    return projects.filter(function (project) {
      return project.addr.includes(addr)
    })[0]
  }

  return projectService
})
