'use strict';

/**
 * @ngdoc service
 * @name testAutomationApp.menuService
 * @description
 * # menuService
 * Service in the testAutomationApp.
 */
angular.module('testAutomationApp')
  .service('menuService', function menuService($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    this.getMenus = function(){
      return $http.get('json/menu.json').then(function(responce){
        return responce.data;
      });
    }
  });
