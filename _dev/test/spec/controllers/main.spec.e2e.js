// Be sure to uncomment the e2e test channels in twitch.service.js file
describe('Search and filter functions', function() {
  'use strict';
  
  beforeEach(function() {
    browser.addMockModule('mockHttp', function() {
        angular.module('mockHttp', ['twitchApp', 'ngMockE2E'])
          .run(function($httpBackend) {
              $httpBackend.whenGET(/\.html$/).passThrough();

              $httpBackend.whenJSONP('https://api.twitch.tv/kraken/channels/OgamingSC2?callback=JSON_CALLBACK&format=json')
                .respond({"mature":false,"status":"[FR] GSL Code S - Rediffusion.","broadcaster_language":"fr","display_name":"OgamingSC2","game":"StarCraft II","language":"en","_id":71852806,"name":"ogamingsc2","created_at":"2014-09-24T15:06:58Z","updated_at":"2016-07-14T08:32:57Z","delay":null,"logo":"https://static-cdn.jtvnw.net/jtv_user_pictures/ogamingsc2-profile_image-9021dccf9399929e-300x300.jpeg","banner":null,"video_banner":"https://static-cdn.jtvnw.net/jtv_user_pictures/ogamingsc2-channel_offline_image-1570cf4930177aa3-1920x1080.jpeg","background":null,"profile_banner":"https://static-cdn.jtvnw.net/jtv_user_pictures/ogamingsc2-profile_banner-d418aed2c0ef7d35-480.jpeg","profile_banner_background_color":null,"partner":true,"url":"https://www.twitch.tv/ogamingsc2","views":18145194,"followers":37326,"_links":{"self":"https://api.twitch.tv/kraken/channels/ogamingsc2","follows":"https://api.twitch.tv/kraken/channels/ogamingsc2/follows","commercial":"https://api.twitch.tv/kraken/channels/ogamingsc2/commercial","stream_key":"https://api.twitch.tv/kraken/channels/ogamingsc2/stream_key","chat":"https://api.twitch.tv/kraken/chat/ogamingsc2","features":"https://api.twitch.tv/kraken/channels/ogamingsc2/features","subscriptions":"https://api.twitch.tv/kraken/channels/ogamingsc2/subscriptions","editors":"https://api.twitch.tv/kraken/channels/ogamingsc2/editors","teams":"https://api.twitch.tv/kraken/channels/ogamingsc2/teams","videos":"https://api.twitch.tv/kraken/channels/ogamingsc2/videos"}});

              $httpBackend.whenJSONP('https://api.twitch.tv/kraken/channels/freecodecamp?callback=JSON_CALLBACK&format=json')
                .respond({"mature":false,"status":"@Jackel demonstrating FCC Camper Leaderboard with Vuejs #vuejs #programming #javascript\n\n\n\n\n\n\n\n\n\n\n\n","broadcaster_language":"en","display_name":"FreeCodeCamp","game":"Creative","language":"en","_id":79776140,"name":"freecodecamp","created_at":"2015-01-14T03:36:47Z","updated_at":"2016-07-14T08:03:05Z","delay":null,"logo":"https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_image-d9514f2df0962329-300x300.png","banner":null,"video_banner":"https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-channel_offline_image-b8e133c78cd51cb0-1920x1080.png","background":null,"profile_banner":"https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_banner-6f5e3445ff474aec-480.png","profile_banner_background_color":null,"partner":false,"url":"https://www.twitch.tv/freecodecamp","views":155354,"followers":9831,"_links":{"self":"https://api.twitch.tv/kraken/channels/freecodecamp","follows":"https://api.twitch.tv/kraken/channels/freecodecamp/follows","commercial":"https://api.twitch.tv/kraken/channels/freecodecamp/commercial","stream_key":"https://api.twitch.tv/kraken/channels/freecodecamp/stream_key","chat":"https://api.twitch.tv/kraken/chat/freecodecamp","features":"https://api.twitch.tv/kraken/channels/freecodecamp/features","subscriptions":"https://api.twitch.tv/kraken/channels/freecodecamp/subscriptions","editors":"https://api.twitch.tv/kraken/channels/freecodecamp/editors","teams":"https://api.twitch.tv/kraken/channels/freecodecamp/teams","videos":"https://api.twitch.tv/kraken/channels/freecodecamp/videos"}});

              $httpBackend.whenJSONP('https://api.twitch.tv/kraken/streams?callback=JSON_CALLBACK&channel=OgamingSC2,freecodecamp&format=json')
                .respond({"streams":[{"_id":22335572160,"game":"StarCraft II","viewers":2292,"created_at":"2016-07-14T12:01:00Z","video_height":720,"average_fps":60.9523809524,"delay":0,"is_playlist":false,"_links":{"self":"https://api.twitch.tv/kraken/streams/ogamingsc2"},"preview":{"small":"https://static-cdn.jtvnw.net/previews-ttv/live_user_ogamingsc2-80x45.jpg","medium":"https://static-cdn.jtvnw.net/previews-ttv/live_user_ogamingsc2-320x180.jpg","large":"https://static-cdn.jtvnw.net/previews-ttv/live_user_ogamingsc2-640x360.jpg","template":"https://static-cdn.jtvnw.net/previews-ttv/live_user_ogamingsc2-{width}x{height}.jpg"},"channel":{"mature":false,"status":"[FR] Dreamhack Valencia Day 1","broadcaster_language":"fr","display_name":"OgamingSC2","game":"StarCraft II","language":"fr","_id":71852806,"name":"ogamingsc2","created_at":"2014-09-24T15:06:58Z","updated_at":"2016-07-14T15:04:05Z","delay":null,"logo":"https://static-cdn.jtvnw.net/jtv_user_pictures/ogamingsc2-profile_image-9021dccf9399929e-300x300.jpeg","banner":null,"video_banner":"https://static-cdn.jtvnw.net/jtv_user_pictures/ogamingsc2-channel_offline_image-1570cf4930177aa3-1920x1080.jpeg","background":null,"profile_banner":"https://static-cdn.jtvnw.net/jtv_user_pictures/ogamingsc2-profile_banner-d418aed2c0ef7d35-480.jpeg","profile_banner_background_color":null,"partner":true,"url":"https://www.twitch.tv/ogamingsc2","views":18178944,"followers":37339,"_links":{"self":"http://api.twitch.tv/kraken/channels/ogamingsc2","follows":"http://api.twitch.tv/kraken/channels/ogamingsc2/follows","commercial":"http://api.twitch.tv/kraken/channels/ogamingsc2/commercial","stream_key":"http://api.twitch.tv/kraken/channels/ogamingsc2/stream_key","chat":"http://api.twitch.tv/kraken/chat/ogamingsc2","features":"http://api.twitch.tv/kraken/channels/ogamingsc2/features","subscriptions":"http://api.twitch.tv/kraken/channels/ogamingsc2/subscriptions","editors":"http://api.twitch.tv/kraken/channels/ogamingsc2/editors","teams":"http://api.twitch.tv/kraken/channels/ogamingsc2/teams","videos":"http://api.twitch.tv/kraken/channels/ogamingsc2/videos"}}},{"_id":22336857568,"game":"Calll of Duty Modern Warefare 3","viewers":3,"created_at":"2016-07-14T14:13:14Z","video_height":720,"average_fps":30.0075018755,"delay":0,"is_playlist":false,"_links":{"self":"https://api.twitch.tv/kraken/streams/cretetion"},"preview":{"small":"https://static-cdn.jtvnw.net/previews-ttv/live_user_cretetion-80x45.jpg","medium":"https://static-cdn.jtvnw.net/previews-ttv/live_user_cretetion-320x180.jpg","large":"https://static-cdn.jtvnw.net/previews-ttv/live_user_cretetion-640x360.jpg","template":"https://static-cdn.jtvnw.net/previews-ttv/live_user_cretetion-{width}x{height}.jpg"},"channel":{"mature":true,"status":"Thowback Thursday","broadcaster_language":"en","display_name":"cretetion","game":"Calll of Duty Modern Warefare 3","language":"en","_id":90401618,"name":"cretetion","created_at":"2015-05-06T15:57:39Z","updated_at":"2016-07-14T15:05:14Z","delay":null,"logo":"https://static-cdn.jtvnw.net/jtv_user_pictures/cretetion-profile_image-12bae34d9765f222-300x300.jpeg","banner":null,"video_banner":"https://static-cdn.jtvnw.net/jtv_user_pictures/cretetion-channel_offline_image-0410bb4dec3a9991-1920x1080.jpeg","background":null,"profile_banner":"https://static-cdn.jtvnw.net/jtv_user_pictures/cretetion-profile_banner-c50d8ffd97fc7ffa-480.png","profile_banner_background_color":null,"partner":false,"url":"https://www.twitch.tv/cretetion","views":8945,"followers":756,"_links":{"self":"http://api.twitch.tv/kraken/channels/cretetion","follows":"http://api.twitch.tv/kraken/channels/cretetion/follows","commercial":"http://api.twitch.tv/kraken/channels/cretetion/commercial","stream_key":"http://api.twitch.tv/kraken/channels/cretetion/stream_key","chat":"http://api.twitch.tv/kraken/chat/cretetion","features":"http://api.twitch.tv/kraken/channels/cretetion/features","subscriptions":"http://api.twitch.tv/kraken/channels/cretetion/subscriptions","editors":"http://api.twitch.tv/kraken/channels/cretetion/editors","teams":"http://api.twitch.tv/kraken/channels/cretetion/teams","videos":"http://api.twitch.tv/kraken/channels/cretetion/videos"}}}],"_total":2,"_links":{"self":"https://api.twitch.tv/kraken/streams?channel=OgamingSC2%2Ccretetion%2Cfreecodecamp%2Cstorbeck%2Chabathcx%2CRobotCaleb%2Cnoobs2ninjas%2Cbrunofin%2Ccomster404\u0026limit=25\u0026offset=0","next":"https://api.twitch.tv/kraken/streams?channel=OgamingSC2%2Ccretetion%2Cfreecodecamp%2Cstorbeck%2Chabathcx%2CRobotCaleb%2Cnoobs2ninjas%2Cbrunofin%2Ccomster404\u0026limit=25\u0026offset=25","featured":"https://api.twitch.tv/kraken/streams/featured","summary":"https://api.twitch.tv/kraken/streams/summary","followed":"https://api.twitch.tv/kraken/streams/followed"}});
          });         
    });

    browser.get('http://localhost:8080');
  });


  it('should filter out freecodecamp channel', function() {
    var channelList;
    var searchBar = element(by.id('search-bar'));
    searchBar.clear();
    searchBar.sendKeys('fre');
    channelList = element.all(by.repeater('item in main.results').row(0).column('item.name')).getText();
    
    expect(element.all(by.repeater('item in main.results')).count()).toEqual(1);
    expect(channelList).toEqual(['FreeCodeCamp']);
  });

  it('should show all two channels', function() {
    var channelList;
    var allBtn = element(by.id('all'));
    allBtn.click();

    expect(element.all(by.repeater('item in main.results')).count()).toEqual(2);
  });

  it('should show only online channels (OgamingSC2)', function() {
    var channelList;
    var onlineBtn = element(by.id('online'));
    onlineBtn.click();
    channelList = element.all(by.repeater('item in main.results').row(0).column('item.name')).getText();

    expect(element.all(by.repeater('item in main.results')).count()).toEqual(1);
    expect(channelList).toEqual(['OgamingSC2']);
  });

  it('should show only offline channels (FreeCodeCamp)', function() {
    var channelList;
    var offlineBtn = element(by.id('offline'));
    offlineBtn.click();
    channelList = element.all(by.repeater('item in main.results').row(0).column('item.name')).getText();

    expect(element.all(by.repeater('item in main.results')).count()).toEqual(1);
    expect(channelList).toEqual(['FreeCodeCamp']);
  });


  describe('Link to Twitch channel', function() {
    it('should jump to the channel source when clicked', function() {
      browser.ignoreSynchronization = true;
      var onlineBtn = element(by.id('online'));
      onlineBtn.click();
      element.all(by.repeater('item in main.results').row(0)).click();

      expect(browser.getCurrentUrl()).toBe('https://www.twitch.tv/ogamingsc2');
    });
  });  
});

