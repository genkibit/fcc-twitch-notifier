Twitch Notifier
===


Synopsis
---
This is one of a series of projects for the front-end program of  **[freeCodeCamp](http://www.freecodecamp.com/)**. The goal of this project is to build a Twitch channel notifier using the official **[Twitch API](https://github.com/justintv/Twitch-API/blob/master/v3_resources/streams.md#get-streamschannel)**. This application runs on the **[AngularJS framework](https://angularjs.org/)**.

The project rubric is as follows:

+ Objective: Build a CodePen.io app that is functionally similar to this: https://codepen.io/FreeCodeCamp/full/Myvqmo/.
+ Rule #1: Don't look at the example project's code. Figure it out for yourself.
+ Rule #2: Fulfill the below user stories. Use whichever libraries or APIs you need. Give it your own personal style.
+ User Story: I can see whether Free Code Camp is currently streaming on Twitch.tv.
+ User Story: I can click the status output and be sent directly to the Free Code Camp's Twitch.tv channel.
+ User Story: if a Twitch user is currently streaming, I can see additional details about what they are streaming.
+ User Story: I will see a placeholder notification if a streamer has closed their Twitch account (or the account never existed). You can verify this works by adding brunofin and comster404 to your array of Twitch streamers.



App Link
---
Access the page **[here](http://noelnoche.github.io/fcc-twitch-notifier/)**.


Testing
---
Unit tests were done on OSX 10 with **[Karma](https://karma-runner.github.io/1.0/index.html)** and **[Jasmine](http://jasmine.github.io/)**. E2E tests were run with **[Protractor](http://www.protractortest.org/#/)** installed globally and using the local Chrome driver directly.

1. Make sure you have Chrome, Firefox and Safari applications in the Applications directory and their required plugins.
2. Open Terminal and `cd` to the root app directory.
3. Run `grunt test` to run the unit tests.
4. Run `grunt serve`.
5. Open another Terminal window and run  `protractor protractor.conf.js` to run the e2e tests.


Build & development
---
Run `grunt` for building and `grunt serve` for preview.


Attribution
---
+ This project is generated with **[Yeoman AngularJS generator](https://github.com/yeoman/generator-angular)**
version 0.15.1


License
---
Code provided under an **[MIT license](https://github.com/noelnoche/fcc-twitch-notifier/blob/gh-pages/LICENSE.md)**


Changelog
---
+ 20160917 -- v1.0.0
	- Initial release.
+ 20170225 -- v2.0.0
  - Moved icons to local directory.
