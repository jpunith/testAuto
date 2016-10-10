'use strict';

describe('Service: panelService', function () {

  // load the service's module
  beforeEach(module('testAutomationApp'));

  // instantiate service
  var panelService;
  beforeEach(inject(function (_panelService_) {
    panelService = _panelService_;
  }));

  it('should do something', function () {
    expect(!!panelService).toBe(true);
  });

});
