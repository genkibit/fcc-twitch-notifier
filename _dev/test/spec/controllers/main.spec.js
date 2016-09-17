describe('Controller: MainCtrl', function() {
  'use strict';  
  
  var MainCtrl, scope, q, deferred, twitchSvc;

  beforeEach(module('twitchApp'));
  
  beforeEach(inject(function (_$rootScope_, _$controller_, _$q_, _twitchSvc_) {
    q = _$q_;
    twitchSvc = _twitchSvc_;
    
    scope = _$rootScope_.$new();
    
    deferred = q.defer();
    
    spyOn(twitchSvc, 'getTwitchData').and.returnValue(deferred.promise);
    
    MainCtrl = _$controller_('MainCtrl', {
      'scope': scope,
      'twitchSvc': twitchSvc
    });
    
  }));
  
  
  /* TEST SPECS */
  it('should remove all white spaces', function() {
    MainCtrl.search = ' s t a r l o r d ';
    MainCtrl.removeSpaces();    
    expect(MainCtrl.category).toEqual('starlord');
  });
  
  it('should call twitchSvc.getTwitchData and pass an Array', function() {
    deferred.resolve(['a', 'b', 'c']);
    scope.$apply();
    expect(twitchSvc.getTwitchData).toHaveBeenCalled();
    expect(MainCtrl.results).toEqual(['a', 'b', 'c']);
  });
});
