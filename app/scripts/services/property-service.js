'use strict';

/**
 * @ngdoc service
 * @name testAutomationApp.propertyService
 * @description
 * # propertyService
 * Service in the testAutomationApp.
 */
angular.module('testAutomationApp')
  .service('propertyService', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var propertyDetails = {
      property:{}
    }
    this.setProperty = function(property){
      propertyDetails.property = property;
    }
    this.getPropertyDetails = function(){
      return propertyDetails;
    }
  });
