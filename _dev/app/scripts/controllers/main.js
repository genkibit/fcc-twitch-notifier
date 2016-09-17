/**
 * @ngdoc function
 * @name workspaceApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the twitchApp
 */
var app = angular.module('twitchApp');

// app.filter('removeSpaces', [function() {
//   return function(string) {
//     if (!angular.isString(string)) {
//       return string;
//     }
//     return string.replace(/[\s]/g, '');
//     };
// }]);

app.controller('MainCtrl', ['twitchSvc', function (twitchSvc) {
  'use strict';
  
  var vm = this;

  vm.removeSpaces = function() {
    vm.category = vm.search.replace(/[\s]/g, '');
  };

  vm.all = function() {
    vm.category = {};
  };

  vm.online = function() {
    vm.category = { 'online': true };
  };

  vm.offline = function() {
    vm.category = { 'online': false };
  };

  var init = function() {
    twitchSvc.getTwitchData()
      .then(function(res) {
        vm.results = res;
      });
  };

  vm.refresh = function() {
    init();
  };

  init();

}]);
