angular.module("twitchApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch","svcTwitch"]).config(["$routeProvider",function(a){"use strict";a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).otherwise({redirectTo:"/"})}]);var appModule=angular.module("svcTwitch",[]);appModule.factory("twitchSvc",["$rootScope","$log","$http","$q",function(a,b,c,d){"use strict";var e=a,f={channels:["ESL_SC2","OgamingSC2","cretetion","freecodecamp","storbeck","habathcx","RobotCaleb","noobs2ninjas","brunofin","comster404"],getChannel:function(a){var b="https://api.twitch.tv/kraken/channels/",d={format:"json"},e={"Client-ID":"7bkvhco59mc748d9m11683piday8akd"},f=b+a;return c.get(f,{params:d,headers:e}).then(function(a){return a})["catch"](function(a){return a})},getChannels:function(){var a=[];return angular.forEach(f.channels,function(b){a.push(f.getChannel(b).then(function(a){return 404===a.status||422===a.status?{name:b,logo:"assets/icons/twitch/orange-warning-icon-3.png",status:"Invalid channel",url:"https://www.twitch.tv/",bg:"invalid"}:a.error?{name:b,logo:"assets/icons/twitch/orange-warning-icon-3.png",status:a.error,bg:"invalid"}:{name:a.data.display_name,logo:a.data.logo||"http://placehold.it/150x150",status:a.data.status,url:a.data.url,online:!1,bg:"offline"}}))}),d.all(a).then(function(a){if(a[0].name)return a;var c="Error: @twitchSvc.getChannels -- Unable to get Twitch channel data";return e.error=!0,b.error(c),-1})},getStreams:function(){var a="https://api.twitch.tv/kraken/streams",d=f.channels.toString(),g=[],h={format:"json",channel:d},i={"Client-ID":"7bkvhco59mc748d9m11683piday8akd"};return c.get(a,{params:h,headers:i}).then(function(a){var b=a.data.streams;return b.forEach(function(a){var b={name:a.channel.display_name,logo:a.channel.logo,status:a.channel.status,url:a.channel.url,online:!0,bg:"online"};g.push(b)}),g})["catch"](function(a){var c="Error: @twitchSvc.getStreams -- "+a.status;return e.error=!0,b.error(c),-1})},getTwitchData:function(){var a,c,g=[];return d.all([f.getChannels(),f.getStreams()]).then(function(b){a=b[0],c=b[1];for(var d=0;d<a.length;d++)for(var e=0;e<c.length;e++){if(a[d].name===c[e].name){g.push(c[e]);break}e===c.length-1&&g.push(a[d])}return g})["catch"](function(a){var c="Error: @twitchSvc.getTwitchData -- "+a.status;return e.error=!0,b.error(c),-1})}};return f}]);var app=angular.module("twitchApp");app.controller("MainCtrl",["twitchSvc",function(a){"use strict";var b=this;b.removeSpaces=function(){b.category=b.search.replace(/[\s]/g,"")},b.all=function(){b.category={}},b.online=function(){b.category={online:!0}},b.offline=function(){b.category={online:!1}};var c=function(){a.getTwitchData().then(function(a){b.results=a})};b.refresh=function(){c()},c()}]),angular.module("twitchApp").run(["$templateCache",function(a){"use strict";a.put("views/main.html",'<div id="app-panel" ng-controller="MainCtrl" ng-mousemove="main.autoUpdate()"> <section id="filter-panel"> <h4 class="sr-only">Channel Filters</h4> <div data-toggle="buttons"> <input id="search-bar" type="text" autocomplete="off" ng-model="main.search" ng-change="main.removeSpaces()" placeholder="Query"> <label class="btn btn-default active" id="all" ng-click="main.all()"> <input type="radio" autocomplete="off" checked><i class="glyphicon glyphicon-asterisk"></i><span class="sr-only">All</span> </label> <label class="btn btn-default" id="online" ng-click="main.online()"> <input type="radio" autocomplete="off"><i class="glyphicon glyphicon-facetime-video"></i><span class="sr-only">Online</span> </label> <label class="btn btn-default" id="offline" ng-click="main.offline()"> <input type="radio" autocomplete="off"><i class="glyphicon glyphicon-remove"></i><span class="sr-only">Offline</span> </label> <button class="btn btn-default" type="button" ng-click="main.refresh()"><i class="glyphicon glyphicon-refresh"></i><span class="sr-only">Refresh</span></button> </div> </section> <div id="twitch-logo"> <a href="https://www.twitch.tv/"> <img src="https://dl.dropboxusercontent.com/u/3810405/freecodecamp/twitch-tv/Twitch_BlackLogoURL.png"> </a> </div> <section id="channel-list" ng-repeat="item in main.results | filter:main.category"> <h4 class="sr-only">Twitch Channel List</h4> <a ng-class="hover-effect" href="{{ item.url }}"> <dl> <img class="{{ item.bg }}" ng-if="item.logo" ng-src="{{ item.logo }}"> <article> <dt>{{ item.name }}</dt> <dd ng-if="item.status">{{ item.status | limitTo: 50 }} {{ item.status.length > 50 ? \'...\' : \'\' }}</dd> </article> </dl> </a> </section> </div>')}]);