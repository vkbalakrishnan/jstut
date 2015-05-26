'use strict';

angular.module('public')
  .controller('HomeCtrl', function ($scope, $http, $location, User) {
    $scope.feed = [
      {
        text : 'status 1'
      },
      {
        text : 'status 2'
      }
    ]
    if(!User.get()) {
      $location.path('/');
    }
  });