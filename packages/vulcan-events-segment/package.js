Package.describe({
  name: "vulcan:events-segment",
  summary: "Vulcan Segment",
  version: '1.8.5',
  git: "https://github.com/VulcanJS/Vulcan.git"
});

Package.onUse(function (api) {

  api.versionsFrom('METEOR@1.5.2');

  api.use([
    'vulcan:core@1.8.5',
    'vulcan:events@1.8.5',
  ]);

  api.mainModule('lib/server/main.js', 'server');
  api.mainModule('lib/client/main.js', 'client');

});
