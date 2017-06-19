/* global angular*/
/* global app*/

let app = angular.module('minmax', []);

app.controller('MinMaxCtrl', function($scope){
	$scope.formModel = {};

	let clickCount = 0;
	let times = "time";
	let messageElement = document.getElementById("messageElement");
	let message = "";

	$scope.onSubmit = function(){
		clickCount++;
		if(clickCount > 1){
			times = "times";
		}
		message = `The form was submitted ${clickCount} ${times}.`;
		messageElement.innerHTML = message;
		console.log(message);
		console.log($scope.formModel);
	};
});