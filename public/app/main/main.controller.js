// public/app/main/main.controller.js

var main = angular.module('main.controller', []);

main.controller('main', 
	[
		'$scope',
		'$state',
		'mainService',
		'authService',
		'toolsService',
	function(
		$scope,
		$state,
		mainService,
		authService,
		toolsService
	) {

		$scope.main = {};

	}
]);