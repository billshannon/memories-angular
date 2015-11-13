var app = angular.module('memoriesApp', []);
app.controller('MemoriesController', function ($scope, $http) {

    $http.get('http://memories-theory.cfapps.io/api/v1/memories').then(function (response) {
      $scope.memories = response.data
    })

});