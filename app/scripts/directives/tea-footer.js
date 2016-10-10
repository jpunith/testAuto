'use strict';

/**
 * @ngdoc directive
 * @name testAutomationApp.directive:teaFooter
 * @description
 * # teaFooter
 */
angular.module('testAutomationApp')
  .directive('teaFooter', function () {
    return {
      templateUrl: 'scripts/directives/tea-footer.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
      },
      controller: function footerController(){
        var FC = this;
        FC.message = "Status Messages";
      },
      controllerAs: "FC"
    };
  });
