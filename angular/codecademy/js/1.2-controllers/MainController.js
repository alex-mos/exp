app.controller('MainController', ['$scope', function($scope) {
    $scope.today = new Date();

    $scope.mains = [
        {
            name: 'Pineaple with chicken and mushrooms',
            description: 'salad',
            price: 2.10
        },
        {
            name: 'soup with cungur',
            description: 'fast soup',
            price: 1.00
        },
        {
            name: 'lentils with curry',
            description: 'very unappetite',
            price: 0.20
        }
    ];

    $scope.appetizers = [
        {
            name: 'Caprese',
            description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
            price: 4.95
        },
        {
            name: 'Mozzarella Sticks',
            description: 'Served with marinara sauce.',
            price: 3.95
        },
        {
            name: 'Bruschetta',
            description: 'Grilled bread garlic, tomatoes, olive oil.',
            price: 4.95
        }
    ];

}]);