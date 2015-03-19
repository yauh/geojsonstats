Package.describe({
  name: 'yauh:geojsonstats',
  version: '0.0.1-dev',
  // Brief, one-line summary of the package.
  summary: 'Get statistics for GeoJSON objects on the server',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/yauh/geojsonstats',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  'geojson-stats': '0.0.1',
  'geojson-validation': '0.1.5',
  'geojson-length': '0.1.1',
  'geojson-area': '0.2.0'
});

Package.onUse(function (api) {
  api.export('GeoJsonStats');
  api.versionsFrom('1.0.4.1');
  api.addFiles(['geojsonstats.js'], 'server');
});

Package.onTest(function (api) {
  api.use('tinytest');
  api.use('yauh:geojsonstats');
  api.addFiles(['geojson-samples.js', 'geojsonstats-tests.js'], 'server');
});