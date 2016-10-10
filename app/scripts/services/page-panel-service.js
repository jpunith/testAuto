'use strict';

/**
 * @ngdoc service
 * @name testAutomationApp.pagePanelService
 * @description
 * # pagePanelService
 * Service in the testAutomationApp.
 */
angular.module('testAutomationApp')
  .service('pagePanelService', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.getPagesDetails = function(){
      return $http.get('json/pages.json').then(function(responce){
        return responce.data;
      })
    }
  });
