app.controller('MainController', ['$scope', function($scope){

    $scope.program = {
        series: "Sherlock",
        series_img: "img/sherlock.jpeg",
        genre: "Crime drama",
        season: 3,
        episode: "The Empty Hearse",
        description: "Two years after his reported Reichenbach Fall demise, Sherlock, who has been cleared of all fraud charges against him, returns with Mycroft's help to a London under threat of terrorist attack. John has moved on and has a girlfriend, Mary Morstan. Sherlock enlists Molly to assist him, but when John is kidnapped by unknown assailants and is rescued by Sherlock and Mary, John returns to help find the terrorists and an underground plot to blow up the Houses of Parliament during an all night sitting on Guy Fawkes Night.",
        datetime: new Date(2014, 11, 31, 21, 0, 0, 0)
    };

    $scope.breakingbad = {
        series: "Breaking Bad",
        series_img: "img/breaking_bad.jpg",
        genre: "Crime drama",
        season: 5,
        episode: "Blue Meth",
        description: "Two years after his reported Reichenbach Fall demise, Sherlock, who has been cleared of all fraud charges against him, returns with Mycroft's help to a London under threat of terrorist attack. John has moved on and has a girlfriend, Mary Morstan. Sherlock enlists Molly to assist him, but when John is kidnapped by unknown assailants and is rescued by Sherlock and Mary, John returns to help find the terrorists and an underground plot to blow up the Houses of Parliament during an all night sitting on Guy Fawkes Night.",
        datetime: new Date(2012, 11, 31, 21, 0, 0, 0)
    };

}]);