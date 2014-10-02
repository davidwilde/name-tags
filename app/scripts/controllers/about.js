'use strict';

/**
 * @ngdoc function
 * @name nameTagsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the nameTagsApp
 */
angular.module('nameTagsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
