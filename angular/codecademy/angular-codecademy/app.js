var app = angular.module('myApp', []);

app.controller('MainController', ['$scope', function($scope){
    $scope.title = 'Top sellers in Books';
}]);