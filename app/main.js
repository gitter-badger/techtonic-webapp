/**
 * @file Main entry point for application
 * @author Jason Wohlgemuth
 * @requires module:app
 * @requires module:router
**/
define(function(require) {
    'use strict';

    var WebApp = require('app');
    var Router = require('router');

    WebApp.on('before:start', function() {
        console.info(WebApp.model.get('name') + ' is starting...');
        WebApp.router = new Router();
    });
    WebApp.on('start', function() {
        Backbone.history.start();
        console.info(WebApp.model.get('name') + ' is started!');
    });
    WebApp.start();
});
