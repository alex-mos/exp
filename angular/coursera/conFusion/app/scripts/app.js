var app = angular.module('confusionApp', ['ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
		.when('/contactus', {
			templateUrl: 'contactus.html',
			controller: 'ContactController'
		})
		.when('/menu', {
			templateUrl: 'menu.html',
			controller: 'MenuController'
		})
		.when('/menu/:id', {
			templateUrl: 'dishdetail.html',
			controller: 'DishDetailController'
		})
		.otherwise('/menu');
});