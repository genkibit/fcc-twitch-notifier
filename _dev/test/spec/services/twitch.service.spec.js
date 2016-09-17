describe('Service: twitchSvc.getStreams', function () {
'use strict';
  
  var mkHttp, mkSvc, mkHandler, mkUrl, mkArgs, mkChannels, mkRes;
  var $scope = {};
  
  beforeEach(inject(function($http, $q, _$httpBackend_) {
    mkHttp = _$httpBackend_;
    
    // Mock test code
    mkUrl = 'http//:foo/streams?';
    mkArgs =  ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin", "comster404"];
    mkChannels = mkArgs.toString();
    mkRes = {"streams":[{"_id":22111100864,"game":"StarCraft II","viewers":265,"created_at":"2016-06-30T21:01:29Z","video_height":720,"average_fps":60.872110038,"delay":0,"is_playlist":false,"_links":{"self":"https://api.twitch.tv/kraken/streams/ogamingsc2"},"preview":{"small":"https://static-cdn.jtvnw.net/previews-ttv/live_user_ogamingsc2-80x45.jpg","medium":"https://static-cdn.jtvnw.net/previews-ttv/live_user_ogamingsc2-320x180.jpg","large":"https://static-cdn.jtvnw.net/previews-ttv/live_user_ogamingsc2-640x360.jpg","template":"https://static-cdn.jtvnw.net/previews-ttv/live_user_ogamingsc2-{width}x{height}.jpg"},"channel":{"mature":false,"status":"[FR] SSL - Rediffusion - Group D.","broadcaster_language":"fr","display_name":"OgamingSC2","game":"StarCraft II","language":"fr","_id":71852806,"name":"ogamingsc2","created_at":"2014-09-24T15:06:58Z","updated_at":"2016-07-01T07:03:01Z","delay":null,"logo":"https://static-cdn.jtvnw.net/jtv_user_pictures/ogamingsc2-profile_image-9021dccf9399929e-300x300.jpeg","banner":null,"video_banner":"https://static-cdn.jtvnw.net/jtv_user_pictures/ogamingsc2-channel_offline_image-1570cf4930177aa3-1920x1080.jpeg","background":null,"profile_banner":"https://static-cdn.jtvnw.net/jtv_user_pictures/ogamingsc2-profile_banner-d418aed2c0ef7d35-480.jpeg","profile_banner_background_color":null,"partner":true,"url":"https://www.twitch.tv/ogamingsc2","views":17902993,"followers":37022,"_links":{"self":"http://api.twitch.tv/kraken/channels/ogamingsc2","follows":"http://api.twitch.tv/kraken/channels/ogamingsc2/follows","commercial":"http://api.twitch.tv/kraken/channels/ogamingsc2/commercial","stream_key":"http://api.twitch.tv/kraken/channels/ogamingsc2/stream_key","chat":"http://api.twitch.tv/kraken/chat/ogamingsc2","features":"http://api.twitch.tv/kraken/channels/ogamingsc2/features","subscriptions":"http://api.twitch.tv/kraken/channels/ogamingsc2/subscriptions","editors":"http://api.twitch.tv/kraken/channels/ogamingsc2/editors","teams":"http://api.twitch.tv/kraken/channels/ogamingsc2/teams","videos":"http://api.twitch.tv/kraken/channels/ogamingsc2/videos"}}}],"_total":1,"_links":{"self":"https://api.twitch.tv/kraken/streams?channel=ESL_SC2%2COgamingSC2%2Ccretetion%2Cfreecodecamp%2Cstorbeck%2Chabathcx%2CRobotCaleb%2Cnoobs2ninjas%2Cbrunofin%2Ccomster404\u0026limit=25\u0026offset=0","next":"https://api.twitch.tv/kraken/streams?channel=ESL_SC2%2COgamingSC2%2Ccretetion%2Cfreecodecamp%2Cstorbeck%2Chabathcx%2CRobotCaleb%2Cnoobs2ninjas%2Cbrunofin%2Ccomster404\u0026limit=25\u0026offset=25","featured":"https://api.twitch.tv/kraken/streams/featured","summary":"https://api.twitch.tv/kraken/streams/summary","followed":"https://api.twitch.tv/kraken/streams/followed"}};
    mkHandler = mkHttp.when('JSONP', mkUrl, { 'channels': mkChannels }).respond(mkRes); 
    
    mkSvc = {
      getStreams: function() {
        var params = { channels:mkChannels};
        var resArray = [];     
  
        $http.jsonp(mkUrl, params)
          .then(function(res) {
            var resData = res.data.streams;
  
            resData.forEach(function(obj) {
              var resultObj = {
                name: obj.channel.display_name,
                logo: obj.channel.logo,
                status: obj.channel.status,
                url: obj.channel.url,
                online: true,
                bg: 'online'
              };
              resArray.push(resultObj);
            });
            
            $scope.res = resArray;
            
          }, function(err) {
            var errMsg = 'Error -- ' + err.status;
            $scope.err = errMsg;
          });
        } 
    }; // END -- Mock code
    
  }));
  
  afterEach(function() {
    mkHttp.verifyNoOutstandingExpectation();
    mkHttp.verifyNoOutstandingRequest();
  });
  
  it('should be invoked', function () {
    mkSvc.getStreams();
    expect(mkHttp.flush).not.toThrow();
  });
  
  it('shoud return an array with valid JSON data', function() {
    mkSvc.getStreams();
    mkHttp.flush();
    expect($scope.res.length).toEqual(1);
    expect($scope.res[0].id).toBe(mkRes.streams[0].id);
  });
  
  it('should throw an error', function () {
    mkHandler.respond(404);
    mkSvc.getStreams();
    mkHttp.flush();
    expect($scope.err).toBe('Error -- 404');
  });
  
});


describe('Service: twitchSvc.getChannels', function () {
 
  var mkHttp, mkSvc, mkHandler, mkUrl, mkArgs, mkChannels, mkResA, mkResB;
  var $scope = {};
  
  beforeEach(inject(function($http, $q, _$httpBackend_) {
    mkHttp = _$httpBackend_;
    
    // Mock test code
    mkUrl = 'http//:foo/channels/';
    mkArgs =  ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin", "comster404"];
    mkResA = {"mature":false,"status":"[FR] SSL - Rediffusion - Group D.","broadcaster_language":"fr","display_name":"OgamingSC2","game":"StarCraft II","language":"fr","_id":71852806,"name":"ogamingsc2","created_at":"2014-09-24T15:06:58Z","updated_at":"2016-07-01T07:32:59Z","delay":null,"logo":"https://static-cdn.jtvnw.net/jtv_user_pictures/ogamingsc2-profile_image-9021dccf9399929e-300x300.jpeg","banner":null,"video_banner":"https://static-cdn.jtvnw.net/jtv_user_pictures/ogamingsc2-channel_offline_image-1570cf4930177aa3-1920x1080.jpeg","background":null,"profile_banner":"https://static-cdn.jtvnw.net/jtv_user_pictures/ogamingsc2-profile_banner-d418aed2c0ef7d35-480.jpeg","profile_banner_background_color":null,"partner":true,"url":"https://www.twitch.tv/ogamingsc2","views":17903345,"followers":37023,"_links":{"self":"https://api.twitch.tv/kraken/channels/ogamingsc2","follows":"https://api.twitch.tv/kraken/channels/ogamingsc2/follows","commercial":"https://api.twitch.tv/kraken/channels/ogamingsc2/commercial","stream_key":"https://api.twitch.tv/kraken/channels/ogamingsc2/stream_key","chat":"https://api.twitch.tv/kraken/chat/ogamingsc2","features":"https://api.twitch.tv/kraken/channels/ogamingsc2/features","subscriptions":"https://api.twitch.tv/kraken/channels/ogamingsc2/subscriptions","editors":"https://api.twitch.tv/kraken/channels/ogamingsc2/editors","teams":"https://api.twitch.tv/kraken/channels/ogamingsc2/teams","videos":"https://api.twitch.tv/kraken/channels/ogamingsc2/videos"}};
    mkResB = {"error":"Not Found","status":404,"message":"Channel 'comster404&format=json' does not exist"};
    mkHandler = mkHttp.when('JSONP', mkUrl).respond(mkResA);

    mkSvc = {
      getChannel: function(channel) {
        return $http.jsonp(mkUrl).then(function(res) {
          $scope.res = res.data;
          return res;
        });      
      },
      
      getChannels: function() {
        var resArray = [];
        
        angular.forEach(mkArgs, function(ch) {
          resArray.push(
            mkSvc.getChannel(ch)
              .then(function(res) {
                if (res.status === 422) {
                  return {
                    name: ch,
                    logo: 'http://placehold.it/150x150',
                    status: res.status,
                    online: false,
                    bg: 'invalid'
                  };                
                } else {
                  return {
                    name: res.display_name,
                    logo: res.logo || 'http://placehold.it/150x150',
                    status: res.status,
                    url: res.url,
                    online: false,
                    bg: 'offline'
                  };
                }
              })
              .catch(function(err) {
                var errMsg = 'Error -- ' + err.status;
                $scope.err = errMsg;
              })
          );
        });
        
        $q.all(resArray)
          .then(function(res) {
            $scope.res = res;
          });
      }
    };// END -- Mock code
    
  }));
  
  afterEach(function() {
    mkHttp.verifyNoOutstandingExpectation();
    mkHttp.verifyNoOutstandingRequest();
  });
  
  it('should be invoked and return JSON object indicating that the channel exists', function () {
    mkSvc.getChannel('OgamingSC2');
    mkHttp.flush();
    expect($scope.res.display_name).toBe('OgamingSC2');
  });
  
  it('shoud return a JSON object indicating that the channel does not exist', function() {
    mkHandler.respond(mkResB); 
    mkSvc.getChannel('comster404');
    mkHttp.flush();
    expect($scope.res.status).toEqual(404);
  });
  
  it('should be invoked and return an array of length 10', function () {
    mkSvc.getChannels();
    mkHttp.flush();
    expect($scope.res.length).toEqual(10);
  });
  
});


describe('Service: twitchSvc.getTwitchData', function () {
 
  var mkRoot, mkHttp, deferred, mkSvc, spyA, spyB;
  var $scope = {};
  
  beforeEach(inject(function(_$rootScope_, $http, $q, _$httpBackend_) {
    mkRoot = _$rootScope_;
    mkHttp = _$httpBackend_;
    
    mkSvc = {
      getChannels: function() {
        var data = [{ "name":123, "status":"aaa"}, { "name":"b", "status":"bbb"}, { "name":"c", "status":"ccc"}];
        var deferred = $q.defer();
        deferred.resolve(data);
        return deferred.promise;
      },
      
      getStreams: function() {
        var data = [{ "name":"a", "status":"aaa"}];
        var deferred = $q.defer();
        deferred.resolve(data);
        return deferred.promise;
      },
      
      getTwitchData: function() {
        var channelRes;
        var streamRes;
        var resArray = [];
    
        $q.all([mkSvc.getChannels(), mkSvc.getStreams()])
          .then(function(res) {
            channelRes = res[0];
            streamRes = res[1];
            
            for (var i = 0; i < channelRes.length; i++) {
              for (var j = 0; j < streamRes.length; j++) {
                if (channelRes[i].name === streamRes[j].name) {
                  resArray.push(streamRes[j]);
                  continue;
                }
                else if (j === streamRes.length - 1) {
                  resArray.push(channelRes[i]);
                }
              }
            }
            
            $scope.res = resArray;
          })
          .catch(function(err) {
            var errMsg = 'Error -- ' + err.status;
            $scope.err = errMsg; 
          });
      }
    }; // END -- Mock code
    
    spyOn(mkSvc, 'getStreams').and.callThrough();
    spyOn(mkSvc, 'getChannels').and.callThrough();
    
  }));
  
  afterEach(function() {
    mkHttp.verifyNoOutstandingExpectation();
    mkHttp.verifyNoOutstandingRequest();
  });
  
  it('should invoke getChannels and getStreams', function () {
    mkSvc.getTwitchData();
    mkRoot.$apply();
    expect(mkSvc.getChannels).toHaveBeenCalled();
    expect(mkSvc.getChannels).toHaveBeenCalled();
  });
  
  it('should return an array of length 3', function () {
    mkSvc.getTwitchData();
    mkRoot.$apply();
    expect($scope.res.length).toEqual(3);
  });
  
  it('should throw an error', inject(function ($q) {
    mkSvc.getStreams = function() {
      var deferred = $q.defer();
      deferred.reject('foo');
      return deferred.promise;
    };
    
    mkSvc.getTwitchData();
    mkRoot.$apply(); 
    expect($scope.err).toBe('Error -- undefined');
  }));
  
});