'use strict';

var resource = require('../apiResources');

var receipts = function(config) {
  return resource.resourceActions('receipts',
    ['list', 'retrieve', ],
    {'key': config['secretKey'], 'omiseVersion': config['omiseVersion']}
  );
};

module.exports = receipts;
