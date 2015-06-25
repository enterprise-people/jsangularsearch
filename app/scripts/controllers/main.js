'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('MainCtrl', function ($scope, $location, $rootScope) {
  	$rootScope.showAdvSearch = false;
    console.log("here it is");
    console.log($rootScope.configData);
    $scope.showSearchDetailsPage = function(showAdvSearch) {
    	$rootScope.searchText = $scope.searchText;
    	$location.url("/searchDetails");
    	if (showAdvSearch) {
    		$rootScope.showAdvSearch = true;
    	}
    }
  });
