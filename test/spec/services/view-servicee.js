'use strict';

describe('Service: viewServicee', function () {

  // load the service's module
  beforeEach(module('testAutomationApp'));

  // instantiate service
  var viewServicee;
  beforeEach(inject(function (_viewServicee_) {
    viewServicee = _viewServicee_;
  }));

  it('should do something', function () {
    expect(!!viewServicee).toBe(true);
  });

});
