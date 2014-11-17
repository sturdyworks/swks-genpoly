/*global describe, beforeEach, it, browser, expect */
'use strict';

var buildConfigFile = require('findup-sync')('build.config.js')
  , buildConfig = require(buildConfigFile)
  , HomePagePo = require('./home.po');

describe('Home page', function () {
  var homePage;

  beforeEach(function () {
    homePage = new HomePagePo();
    browser.driver.get(buildConfig.host + ':' + buildConfig.port + '/#/home');
  });

  it('should say HomeCtrl', function () {
    expect(homePage.heading.getText()).toEqual('home');
    expect(homePage.text.getText()).toEqual('HomeCtrl');
  });
});
