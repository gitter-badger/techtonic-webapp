/**
 * @file Application Core
 * @author Jason Wohlgemuth
 * @version 1.0.0
 * @license MIT
 * @module app
 * @exports app
**/
define(function(require, exports, module) {
    'use strict';

    require('shims/marionette.radio.shim');
    require('handlebars.helpers');
    require('jquery.extensions');
    require('underscore.mixins');

    /**
     * @class ApplicationModel
     * @extends Backbone.Model
     * @prop {Object} default
     * @prop {string} default.name='WebApp'
    **/
    var ApplicationModel = Backbone.Model.extend({
        defaults: {
            name: 'WebApp'
        }
    });
    var App = new Marionette.Application();
    App.model = new ApplicationModel();
    App.regions = new Marionette.RegionManager({
        regions: {
            'root': 'body'
        }
    });
    module.exports = App;
});