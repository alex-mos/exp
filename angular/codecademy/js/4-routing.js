var app = angular.module('GalleryApp', ['ngRoute']);

app.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            controller: 'HomeController',
            templateUrl: '4-views/home.html'
        })
        .when('/photos/:id', {
            controller: 'PhotoController',
            templateUrl: '4-views/photo.html'
        })
        .otherwise({
            redirectTo: '/'
        });
});