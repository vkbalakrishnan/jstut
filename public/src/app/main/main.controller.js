'use strict';

angular.module('public')
  .controller('MainCtrl', function ($scope, $http, $location, User) {
    $scope.signup = function() {
      if ($scope.newUserName && $scope.newPassword && $scope.newRepeatPassword ) {
        $http.post('http://localhost:5000/signup', {
          username : $scope.newUserName,
          password : $scope.newPassword,
          repeat : $scope.newRepeatPassword
        }).then(function(data) {
          if(data) {
            User.set(data);
            $location.path('home');
          }
        });
      }
    }

    $scope.login = function() {
      if ($scope.userName && $scope.passWord ) {
        $http.get('http://localhost:5000/login', {
          username : $scope.userName,
          password : $scope.passWord
        }).then(function(data) {
          if(data) {
            User.set(data);
            $location.path('home');
          }
        }, function(err) {
          alert(err);
        });
      }
    }
  });