define(function(require) {
    'use strict';
    var Marionette = require('marionette');
    var Radio      = require('radio');
    Marionette.Application.prototype._initChannel = function() {
        this.channelName =  _.result(this, 'channelName') || 'global';
        this.channel     =  _.result(this, 'channel') || Radio.channel(this.channelName);
        this.vent        =  _.result(this, 'channel');
    };
});