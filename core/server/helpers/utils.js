var _       = require('lodash'),
    utils;

utils = {
    assetTemplate: _.template('<%= source %>'),
    linkTemplate: _.template('<a href="<%= url %>"><%= text %></a>'),
    scriptTemplate: _.template('<script src="<%= source %>"></script>'),
    isProduction: process.env.NODE_ENV === 'production',
    scriptFiles: {
        production: [
            'vendor.min.js',
            'ghost.min.js'
        ],
        development: [
            'vendor-dev.js',
            'templates-dev.js',
            'ghost-dev.js'
        ]
    }
};

module.exports = utils;
