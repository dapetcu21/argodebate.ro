var _ = require('lodash');
require('./main.css');

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
