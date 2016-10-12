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
  it('get menu details', function () {
    pagePanelService.getPagesDetails().then(function (res) {
      expect(res.status == 200).toBe(true);
      expect(res.data.length > 0).toBe(true);
    });
  });
});
