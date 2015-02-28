var React = require('react');

var RouteStore = require('../stores/RouteStore');

var RootPage = require('./RootPage');
var AnotherPage = require('./AnotherPage');
var NotFoundPage = require('./NotFoundPage');


var MainView = React.createClass({
  componentDidMount: function () {
    RouteStore.on('change', function () {
      this.forceUpdate();
    }, this);
  },

  componentWillUnmount: function () {
    RouteStore.off(null, null, this);
  },
    
  render: function () {
    var domain = RouteStore.getDomain();
    var page = RouteStore.getPage();

    switch (page) {
      case null:
        return <RootPage/>;
      case 'another':
        return <AnotherPage/>;
      default:
        return <NotFoundPage/>;
    }
  }
});

module.exports = MainView;
