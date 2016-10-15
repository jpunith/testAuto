'use strict';

/**
 * @ngdoc directive
 * @name testAutomationApp.directive:menuBar
 * @description
 * # menuBar
 */
angular.module('testAutomationApp')
  .directive('menuBar', function () {
    return {
      templateUrl: 'scripts/directives/tea-menu-bar.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      },
      controller: function menuBarController(menuService){
        var MC = this;
        MC.value = "done";
        menuService.getMenus().then(function(result){
          MC.menus = result;
        })
      },
      controllerAs:"MC"
    };
  });
