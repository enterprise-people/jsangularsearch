'use strict';

/**
 * @ngdoc function
 * @name appApp.controller:searchCntrl
 * @description
 * # searchCntrl
 * Controller of the appApp
 */
angular.module('appApp')
  .controller('searchCntrl', function ($scope, $rootScope, utilityFactory) {
        $('#fromdate').datepicker({
        dateFormat: "yy-mm-dd",
        changeMonth: true,
        changeYear: true
        });
        $('#todate').datepicker({
        dateFormat: "yy-mm-dd",
        changeMonth: true,
        changeYear: true
        });
     // TODO: need to generate dynamic url.
    var searchUrl = "https://api.fda.gov/drug/event.json?search=receivedate:[2014-01-01+TO+2015-06-24]+AND+(BUPROPION)";
  	$scope.showSearchResults = false;
     if ($rootScope.showAdvSearch) { // Show advanced search open on load.
          $scope.isAdvSearchBlockOpen = true;
     } else {
          $scope.isAdvSearchBlockOpen = false;
     }
     $scope.getSearchResults = function() {
     	$scope.showSearchResults = true;
          utilityFactory.doCrossDomainGet(searchUrl);
     };
     $scope.renderSearchContent = function() {
          // $scope.searchResult = 
     }
});
