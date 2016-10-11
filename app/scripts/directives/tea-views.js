'use strict';

/**
 * @ngdoc directive
 * @name testAutomationApp.directive:teaViews
 * @description
 * # teaViews
 */
angular.module('testAutomationApp')
  .directive('teaViews', function () {
    return {
      templateUrl: 'scripts/directives/tea-views.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        //element.text('this is the teaViews directive');
      },
      controller: function viewController(viewServicee,propertyService){
        var VC = this;
       // VC.list = [];
        VC.showSenarioList = true;
        VC.showTestcaseList = false;
        VC.showStepList = false;


        VC.viewDetail = viewServicee.getViewDetails();
        VC.viewDetail.allowedTypes =  ["scenario"];

        console.log(VC.viewDetail);


        VC.dropCallback = function(event, index, item, external, type){
          if(!item.id){
            item.id = new Date().getTime();
          }
          return item;
        }

        VC.clickOnElement = function(id,property){
          propertyService.setProperty(id,property);
        };

        VC.clickOnSelectSenario = function(Senario){
          VC.showSenarioList = false;
          VC.selectedSenario =  Senario;
          VC.showTestcaseList = true;
        };

        VC.clickOnSelectTestCase = function(testCase){
          VC.showSenarioList = false;
          VC.selectedTestCase =  testCase;
          VC.showTestcaseList = true;
          VC.showStepList = true;
        };

        VC.clickOnRemoveSenario = function(){
          if(!VC.showStepList){
            VC.showSenarioList = true;
            VC.showTestcaseList = false;
          }
          else{
            VC.showStepList = false;
          }
        };

        VC.clickOnRemoveFormList = function(list,index){
          list.splice(index,1);
        };

      },
      controllerAs: 'VC'
    };
  });
