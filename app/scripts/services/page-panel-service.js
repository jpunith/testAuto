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
        var pages = {};
        //page wise grouping
         responce.data.scenarioDetails.forEach(function(sen){
           if(pages[sen.categorySection]){
             pages[sen.categorySection].push(sen);
           }
           else{
             pages[sen.categorySection] = [sen];
           }
         });
        return pages;
      })
    }
  });
