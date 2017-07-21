/* eslint-disable no-undef */
/* global app */

/**
 * Projects App Controller -- Manage all emails visible in the list
 */

app.controller('ProjectsCtrl', [
  '$scope', '$rootScope', '$http', 'Email', '$route', '$location', 'filterFilter', 'projectService',
  function ($scope, $rootScope, $http, Email, $route, $location, filterFilter, projectService) {
    $scope.editProjects = []
    for (var i in projectService.list()){
      $scope.editProjects.push(jQuery.extend(true, {}, projectService.list()[i]))
    }

    $scope.addProject = function () {
      $scope.editProjects.push({name: 'Untitled Project', addr: []})
    }

    $scope.addAddress = function (project) {
      project.addr.push('')
    }

    $scope.removeAddr = function (project,addr) {
      var index = project.addr.indexOf(addr)
      project.addr.splice(index, 1)
    }

    $scope.removeProject = function (project) {
      var index = $scope.editProjects.indexOf(project);
      $scope.editProjects.splice(index, 1);
    }

    $scope.save = function (editProjects) {
      $rootScope.$emit('saveProjects', editProjects)
      window.location.href = '#/'
    }
  }])
