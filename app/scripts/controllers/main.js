'use strict';

/**
 * @ngdoc function
 * @name nameTagsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nameTagsApp
 */
angular.module('nameTagsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
