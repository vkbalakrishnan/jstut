angular.module('myApp',[])

.controller('GreetingController', ['$scope', '$location', '$http', function($scope, $location, $http) {
  
  $scope.verifyPassword = function() {
  	$http.get('/verify', {
  		username  : $scope.username,
  		password : $scope.password,
  	}, function(data) {
  		console.log(data);
  	});
  }


  $scope.change = function() {
  	$scope.firstName = 'First';
  	$scope.lastName = 'Second';
  }
}]);