'use strict';

describe('Directive: menuBar', function () {

  // load the directive's module
  beforeEach(module('testAutomationApp'));

  var element,
    scope,
    controller,
    $q,
    templateCache,
    MOCKS = {};

  beforeEach(module(function($provide) {
    createMocks()
    $provide.value('menuService', MOCKS.menuService)
  }));

  beforeEach(inject(function ($rootScope,$compile,_$q_,_$injector_) {
    $q = _$q_;
    scope = $rootScope.$new();


     templateCache = _$injector_.get('$templateCache');
    templateCache.put('scripts/directives/tea-menu-bar.html', '<div class="navbar navbar-default" role="navigation">'+
    '<div class="container">'+
    '<div class="navbar-header">'+

    '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#js-navbar-collapse">'+
    '<span class="sr-only">Toggle navigation</span>'+
    '<span class="icon-bar"></span>'+
    '<span class="icon-bar"></span>'+
    '<span class="icon-bar"></span>'+
    '</button>'+

    '<a class="navbar-brand" href="#/">TEA Tool</a>'+
    '</div>'+

    '<div class="collapse navbar-collapse" id="js-navbar-collapse">'+

    '<ul class="nav navbar-nav">'+
    '<li ng-repeat="menu in MC.menus"><a ng-href="#/">{{menu.name}}</a></li>'+
    '</ul>'+
    '</div>'+
    '</div>'+
    '</div>');
    //var elemDirective = document.createElement('menu-bar')
    //document.body.appendChild(elemDirective)
    //var direvtiveSelector =  document.querySelector('menu-bar')
    //element = angular.element(direvtiveSelector)

    element = angular.element('<menu-bar></menu-bar>');
    element = $compile(element)(scope);
    controller = element.controller("menuBar");
    scope.$digest();
    console.log("controller.value "+controller);
  }));

  it('should make hidden element visible', inject(function () {

    scope.$digest();
   console.log("controller.menus "+controller.menus);
    expect(controller.menus).not.toBe(undefined);
  }));
  function createMocks() {
    MOCKS.menuService = {
      getMenus : function() {
        var d = $q.defer()
        console.log('MOCKED SERVICE CALLED')
        d.resolve({data : [{},{}]})
        return d.promise
      }
    }
  }
});
