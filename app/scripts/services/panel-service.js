'use strict';

/**
 * @ngdoc service
 * @name testAutomationApp.panelService
 * @description
 * # panelService
 * Service in the testAutomationApp.
 */
angular.module('testAutomationApp')
  .service('panelService', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.getPanelList = function(){
      return $http.get('json/panel.json').then(function(result){
        return result.data;
      })
    }
  });
