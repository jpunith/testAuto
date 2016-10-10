'use strict';

/**
 * @ngdoc directive
 * @name testAutomationApp.directive:teaPropertyPanel
 * @description
 * # teaPropertyPanel
 */
angular.module('testAutomationApp')
  .directive('teaPropertyPanel', function () {
    return {
      templateUrl: 'scripts/directives/tea-property-panel.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      //  element.text('this is the teaPropertyPanel directive');
      },
      controller: function propertyController(propertyService){
        var PRC = this;
        PRC.propertyDetails = propertyService.getPropertyDetails()
      },
      controllerAs:"PRC"
    };
  });
