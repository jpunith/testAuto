'use strict';

describe('Service: menuService', function () {

  // load the service's module
  beforeEach(module('testAutomationApp'));

  // instantiate service
  var menuService;
  beforeEach(inject(function (_menuService_) {
    menuService = _menuService_;
  }));

  it('should do something', function () {
    expect(!!menuService).toBe(true);
  });
  it('get menu details', function () {
    menuService.getMenus().then(function(res){
      expect(res.status == 200).toBe(true);
      expect(res.data.length > 0).toBe(true);

    });

  });
});
