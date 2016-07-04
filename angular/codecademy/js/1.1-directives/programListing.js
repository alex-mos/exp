app.directive('programListing', function() {
    return {
        restrict: 'E',
        scope: {
            listing: '='
        },
        templateUrl: 'js/1.1-directives/programListing.html'
    }
});