'use strict';

/**
 * @ngdoc overview
 * @name appApp
 * @description
 * # appApp
 *
 * Main module of the application.
 */
angular
  .module('appApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'mgcrea.ngStrap',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/searchDetails', {
        templateUrl: 'views/searchDetails.html',
        controller: 'searchCntrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function run($rootScope) {
    $rootScope.configData = configData;
});
