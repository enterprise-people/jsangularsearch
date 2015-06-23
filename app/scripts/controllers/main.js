'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('MainCtrl', function ($scope, $location) {
    $scope.showSearchDetailsPage = function() {
    	console.log($location);
    	$location.url("/searchDetails");
    }
  });
