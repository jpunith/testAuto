'use strict';

/**
 * @ngdoc service
 * @name testAutomationApp.viewServicee
 * @description
 * # viewServicee
 * Service in the testAutomationApp.
 */
angular.module('testAutomationApp')
  .service('viewServicee', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var viewDetails = {
      viewList: []
    }
    this.setViewList = function(list){
      console.log("set list");
      console.log(list);
      viewDetails.viewList = list
    }
    this.getViewDetails = function(){
      console.log("get list");
      console.log(viewDetails.viewList);
      return viewDetails;
    }
  });
