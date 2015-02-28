var _ = require('lodash');
require('./main.styl');
require('./assets/icons');

var map = {
  these: 'are',
  some: 'greetings',
};

_.each(map, function (value, key) {
  console.log(key, value);
});

if (module.hot) {
  module.hot.accept(function () {
    window.document.location.reload();
  });
}
