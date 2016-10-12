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

        var prePage;
        pagePanelService.getPagesDetails().then(function(result){
          PC.pages = result;
        });

        PC.clickOnPanelHeading = function(page){
          if(prePage && page.id == prePage.id){
            page.show = !page.show;
            return;
          }
          if(prePage){
            prePage.show = false;
          }
          page.show = true;

          prePage = page;
        };
      },
      controllerAs:"PC"
    };
  });
