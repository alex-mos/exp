/*** Menu page ***/

app.controller('MenuController', ['$scope', 'menuFactory', function($scope, menuFactory) {

	$scope.tab = 1;
	$scope.filtText = '';
	$scope.showDetails = false;

	$scope.dishes = menuFactory.getDishes();

	$scope.isSelected = function(checkTab) {
		return ($scope.tab === checkTab);
	};

	$scope.toggleDetails = function() {
		$scope.showDetails = !$scope.showDetails;
	};

	$scope.select = function(setTab) {
		$scope.tab = setTab;

		switch(setTab) {
			case 2:
				$scope.filtText = "appetizer";
				break;
			case 3:
				$scope.filtText = "mains";
				break;
			case 4:
				$scope.filtText = "dessert";
				break;
			default:
				$scope.filtText = "";
				break;
		}
	};

}]);



/*** Contact Us page ***/

app.controller('ContactController', ['$scope', function ($scope) {

	$scope.feedback = {
		mychannel: "",
		firstName: "",
		lastName: "",
		agree: false,
		email: ""
	};

	$scope.channels = [
		{
			value: "tel",
			label: "Tel."
		},
		{
			value: "Email",
			label: "Email"
		}
	];

	$scope.invalidChannelSelection = false;

}]);



app.controller('FeedbackController', ['$scope', function ($scope) {

	$scope.sendFeedback = function() {

		if ($scope.feedback.agree && $scope.feedback.mychannel === '') {

			$scope.invalidChannelSelection = true;

			console.log('incorrect');

		} else {

			console.log($scope.feedback);

			$scope.invalidChannelSelection = false;

			$scope.feedback = {
				mychannel: "",
				firstName: "",
				lastName: "",
				agree: false,
				email: ""
			};

			$scope.feedback.mychannel = "";

			$scope.feedbackForm.$setPristine();
		}
	};

}]);



/*** Dish Detail page ***/

app.controller('DishDetailController', ['$scope', '$routeParams', 'menuFactory', function ($scope, $routeParams, menuFactory) {

	$scope.dish = menuFactory.getDish(parseInt($routeParams.id, 10));

}]);



app.controller('CommentController', ['$scope', function($scope) {

	$scope.sendComment = function () {
		$scope.commentForm.$setPristine();
	}

}]);
