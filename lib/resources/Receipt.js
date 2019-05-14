'use strict';

var resource = require('../apiResources');

var receipts = function(config) {
  return resource.resourceActions('recipients',
    ['list', 'retrieve', ],
    {'key': config['secretKey'], 'omiseVersion': config['omiseVersion']}
  );
};

module.exports = receipts;
