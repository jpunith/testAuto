'use strict';

describe('Directive: teaFooter', function () {

  // load the directive's module
  beforeEach(module('testAutomationApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<tea-footer></tea-footer>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('');
  }));
});
