/*global angular*/

let CustomersController = function($scope){
    $scope.sortBy = 'name';
    $scope.reverse = false;
    
    $scope.customers = [
        {id: 001, name: 'John', city: 'Chandler', joined: '2000-12-02', orderTotal: 300}, 
        {id: 002, name: 'Mary', city: 'Englewood', joined: '2010-10-12', orderTotal: 400}, 
        {id: 003, name: 'Huck', city: 'Yuma', joined: '2013-09-09', orderTotal: 500}, 
        {id: 004, name: 'Jackie', city: 'Chandler', joined: '2000-12-02', orderTotal: 300}, 
        {id: 005, name: 'Monika', city: 'Englewood', joined: '2010-10-12', orderTotal: 200},
        {id: 006, name: 'Caleb', city: 'Neches', joined: '1995-08-02', orderTotal: 300}
    ];
    
    $scope.doSort = function(propName){
        $scope.sortBy = propName;
        $scope.reverse = !$scope.reverse1;
    };
    
    CustomersController.inject('$scope');
    
    angular.module('customersApp')
        .controller('CustomersController', CustomersController);
};