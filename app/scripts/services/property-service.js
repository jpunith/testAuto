'use strict';

/**
 * @ngdoc service
 * @name testAutomationApp.propertyService
 * @description
 * # propertyService
 * Service in the testAutomationApp.
 */
angular.module('testAutomationApp')
  .service('propertyService', function ($http) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var propertyDetails = {
      properties:{}
    }
    this.setProperty = function(property){
      console.log(property);
      propertyDetails.properties = property;
    }
    this.getPropertyDetails = function(){
      return propertyDetails;
    }
    this.setPropertyDetailsByService = function(id){
      $http.get('json/property.json').then(function(res){
        console.log(res.data);
        propertyDetails.properties = res.data;
      });
    }
  });
