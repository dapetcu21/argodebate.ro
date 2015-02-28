var Backbone = require('backbone');
var AppDispatcher = require('../AppDispatcher');

var RouteStore = Backbone.Model.extend({
  initialize: function () {
    this.dispatchToken = AppDispatcher.register(this.dispatchCallback.bind(this));
    this.set('domain', null);
    this.set('page', null);
  },

  dispatchCallback: function (payload) {
    switch (payload.actionType) {
      case 'route-change':
        this.set('domain', payload.domain || null, { silent: true });
        this.set('page', payload.page || null);
        break;
    }
  },

  getUrl: function () {
    var domain = this.getDomain();
    var page = this.getPage();
    return (domain ? domain + '/' : '' ) + (page ? page : '');
  },

  getDomain: function () {
    return this.get('domain');
  },

  getPage: function () {
    return this.get('page');
  },
});

module.exports = new RouteStore();
