'use strict';

describe('Directive: teaPropertyPanel', function () {

  // load the directive's module
  beforeEach(module('testAutomationApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<tea-property-panel></tea-property-panel>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('');
  }));
});
