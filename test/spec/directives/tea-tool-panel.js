'use strict';

describe('Directive: teaToolPanel', function () {

  // load the directive's module
  beforeEach(module('testAutomationApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<tea-tool-panel></tea-tool-panel>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('');
  }));
});
