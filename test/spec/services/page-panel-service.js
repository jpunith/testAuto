'use strict';

describe('Service: pagePanelService', function () {

  // load the service's module
  beforeEach(module('testAutomationApp'));

  // instantiate service
  var pagePanelService;
  beforeEach(inject(function (_pagePanelService_) {
    pagePanelService = _pagePanelService_;
  }));

  it('should do something', function () {
    expect(!!pagePanelService).toBe(true);
  });

});
