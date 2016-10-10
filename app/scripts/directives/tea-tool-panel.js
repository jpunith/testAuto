'use strict';

/**
 * @ngdoc directive
 * @name testAutomationApp.directive:teaToolPanel
 * @description
 * # teaToolPanel
 */
angular.module('testAutomationApp')
  .directive('teaToolPanel', function () {
    return {
      templateUrl: 'scripts/directives/tea-tool-panel.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {

      },
      controller: function(panelService){
        var TP = this;
        panelService.getPanelList().then(function(result){
          TP.panelList = result;
        })
      },
      controllerAs:"TP"
    };
  });
