/**
 * @ngdoc overview
 * @name twitchApp
 * @description
 * # twitchApp
 *
 * Main module of the application.
 */
angular

.module('twitchApp', [
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'svcTwitch'
])

.config(function ($routeProvider) {
  'use strict';
  
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
      controllerAs: 'main'
    })
    .otherwise({
      redirectTo: '/'
    });
});
