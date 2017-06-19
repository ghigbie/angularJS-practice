/* global angular*/
/* global app*/

// (function() {
//     let app = angular.model("minmax", []);
// }());

app.controller("MinMaxCtrl", function($scope, $http){
    $scope.formModel = {};
    
    $scope.onSubmit = function() {
        console.log("Hey i'm submitted");
        console.log($scope.formModel);
        
        $http.post('https://minmax-server.herokuapp.com/register', $scope.formModel)
            .success(function(data){
                console.log(": )");
            }).error(function(Data){
               console.log(": ("); 
            });
    };
});