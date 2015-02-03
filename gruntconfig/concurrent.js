'use strict';

var concurrent = {
  build: [
    'browserify',
    'compass',
    'copy:build',
    'jshint'
  ],
  scripts: [
    'browserify',
    'jshint:scripts'
  ],
  tests: [
    'browserify',
    'jshint:tests'
  ],
  example: [
    'browserify',
    'jshint:example'
  ],
  dist: [
    'cssmin',
    'uglify'
  ]
};

module.exports = concurrent;
