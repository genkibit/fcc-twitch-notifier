/**
 * @ngdoc overview
 * @name svcTwitch
 * @description
 * # svcTwitch
 * Twitch API service module.
 */
var appModule = angular.module('svcTwitch', []);

/**
 * Makes http call to Twitch API
 * @ngdoc factory
 * @name svcTwitch.twitchSvc
 * @requires $http, $q, errSvc
 */
appModule.factory('twitchSvc', ['$rootScope', '$log', '$http', '$q', function($rootScope, $log, $http, $q) {
  'use strict';

  var rootScope = $rootScope;
  var twitchSvc = {

  // For e2e test
  // channels: ['OgamingSC2', 'freecodecamp'],

  // Allows for future 'add channel' function
  channels: ['ESL_SC2', 'OgamingSC2', 'cretetion', 'freecodecamp', 'storbeck', 'habathcx', 'RobotCaleb', 'noobs2ninjas', 'brunofin', 'comster404'],

  // Called by getChannels
  getChannel: function(channel) {
    var baseUrl = 'https://api.twitch.tv/kraken/channels/';
    var _params = {
      format:'json'
    };
    var _headers = { 'Client-ID':'7bkvhco59mc748d9m11683piday8akd' };
    var callUrl = baseUrl + channel;
    
    return $http.get(callUrl, { params: _params, headers: _headers })
      .then(function(res) {
        return res;
      })
      .catch(function(err) {

        // err is passed to getChannels as res (with status of 404 or 422)
        return err;
      });
  }, // END -- getChannel

  getChannels: function() {
    var resArray = [];
    
    angular.forEach(twitchSvc.channels, function(ch) {
      resArray.push(
        twitchSvc.getChannel(ch)
          .then(function(res) {
            if (res.status === 404 || res.status === 422) {
              return {
                name: ch,
                logo: 'assets/icons/twitch/orange-warning-icon-3.png',
                status: 'Invalid channel',
                url: 'https://www.twitch.tv/',
                bg: 'invalid'
              };
            } 
            else if (res.error) {
              return {
                name: ch,
                logo: 'assets/icons/twitch/orange-warning-icon-3.png',
                status: res.error,
                bg: 'invalid'
              }
            }
            else {
              return {
                name: res.data.display_name,
                logo: res.data.logo || 'http://placehold.it/150x150',
                status: res.data.status,
                url: res.data.url,
                online: false,
                bg: 'offline'
              };
            }
          })
      ); // END -- resArray.push()
    });

    return $q.all(resArray)
      .then(function(res) {

        // Since forEach completes no matter what, we need to handle error here
        if (!res[0].name) {
          var errMsg = 'Error: @twitchSvc.getChannels -- Unable to get Twitch channel data';
          rootScope.error = true;
          $log.error(errMsg);
          return -1;
        }
        else {
          return res;
        }
      })
  }, // END -- getChannels

  getStreams: function() {
    var baseUrl = 'https://api.twitch.tv/kraken/streams';
    var channels = twitchSvc.channels.toString();
    var responseArray = [];
    var _params = {
      format:'json',
      channel: channels
    };
    var _headers = { 'Client-ID':'7bkvhco59mc748d9m11683piday8akd' };

    return $http.get(baseUrl, { params: _params, headers: _headers })
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
          responseArray.push(resultObj);
        });

        return responseArray;

      })
      .catch(function(err) {
        var errMsg = 'Error: @twitchSvc.getStreams -- ' + err.status;
        rootScope.error = true;
        $log.error(errMsg);
        return -1;
      });
  }, // END -- getStreams

  getTwitchData: function() {
    var channelRes;
    var streamRes;
    var resArray = [];

    return $q.all([twitchSvc.getChannels(), twitchSvc.getStreams()])
      .then(function(res) {
        channelRes = res[0];
        streamRes = res[1];

        for (var i = 0; i < channelRes.length; i++) {
          for (var j = 0; j < streamRes.length; j++) {
            if (channelRes[i].name === streamRes[j].name) {
              resArray.push(streamRes[j]);
              break;
            }
            else if (j === streamRes.length - 1) {
              resArray.push(channelRes[i]);
            }
          }
        }

        return resArray;
      })
      .catch(function(err) {
        var errMsg = 'Error: @twitchSvc.getTwitchData -- ' + err.status;
        rootScope.error = true;
        $log.error(errMsg);
        return -1;
      });
    } // END -- getTwitchData
  }; // END -- twitchSvc

  return twitchSvc;
}]);
