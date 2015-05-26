'use strict';

angular.module('public')
.service('User', function() {
	var user;
	return {
		get :  function() {
			return user;
		},
		set : function(obj) {
			user = obj;
			return user;
		},
		reset : function() {
			user = null;
		}
	}
})