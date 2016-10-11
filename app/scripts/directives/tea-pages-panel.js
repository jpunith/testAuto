'use strict';

/**
 * @ngdoc directive
 * @name testAutomationApp.directive:teaPagesPanel
 * @description
 * # teaPagesPanel
 */
angular.module('testAutomationApp')
  .directive('teaPagesPanel', function () {
    return {
      templateUrl: 'scripts/directives/tea-pages-panel.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      },
      controller: function pagePanelController(pagePanelService){
        var PC = this;
        pagePanelService.getPagesDetails().then(function(result){
          PC.pages = result;
        });
        PC.clickOnPanelHeading = function(page){
          page.show =! page.show;
         // console.log(page.scenarios)
         // viewServicee.setViewList(page.scenarios);
        };
      },
      controllerAs:"PC"
    };
  });
