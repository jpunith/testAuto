'use strict';

/**
 * @ngdoc directive
 * @name testAutomationApp.directive:teaInput
 * @description
 * # teaInput
 */
angular.module('testAutomationApp')
  .directive('teaInput', function () {
    return {
      template:
      '<input class="form-control" ng-if="teaInputType == \'text\'" type="text" ng-model="ngModel" ng-disabled="ngDisabled">'+
      '<select class="form-control" ng-options="item for item in teaInputList" ng-if="teaInputType == \'list\'" ng-model="ngModel" ng-disabled="ngDisabled">' +
      '</select>'+
      '<select class="form-control" ng-options="boolean for boolean in booleanList" ng-if="teaInputType == \'boolean\'" ng-model="ngModel" ng-disabled="ngDisabled">' +
      '</select>'+
      '<textarea class="form-control" ng-if="teaInputType == \'text:multiline\'" ng-model="ngModel" ng-disabled="ngDisabled" rows="2">' +
      '</textarea>'+
      '<input class="form-control" ng-if="!teaInputList || teaInputList[0] == \'\' && teaInputType == \'number\'" type="text" ng-model="ngModel" ng-disabled="ngDisabled">'+
      '<select  class="form-control" ng-if="teaInputType == \'number\' && teaInputList && teaInputList[0] != \'\'" ng-options="item for item in teaInputList" ng-if="teaInputType == \'boolean\'" ng-model="ngModel" ng-disabled="ngDisabled">' +
      '</select>',
      restrict: 'E',
      scope:{
        ngModel: "=ngModel",
        teaInputType: "@teaInputType",
        teaInputList: "=teaInputList",
        ngDisabled: "=ngDisabled"
      },
      link: function postLink(scope, element, attrs) {
        scope.booleanList = [true,false];
      }
    };
  });
