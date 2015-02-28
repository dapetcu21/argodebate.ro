require('./assets/icons');

var _ = require('lodash');
var $ = require('jquery');
var React = require('react');

var RouteCreator = require('./actions/RouteCreator');
var MainView = require('./views/MainView');

_.once(function () {
  $(window).ready(function () {

    // Start routing
    RouteCreator.start();

    // Render main view
    var mainView = React.createElement(MainView, {});
    React.render(mainView, document.body);
  });
})();

