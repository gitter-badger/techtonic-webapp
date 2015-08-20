/**
 * @file RequireJS configuration file
 * @author Jason Wohlgemuth
 */
requirejs.config({
    baseUrl: '',
    //urlArgs is used to cache bust.
    //development should use timestamp, production should use version
    urlArgs: 'bust=' + (new Date()).getTime(),
    deps: ['main'],
    paths: {
        //Dependencies
        jquery:     '../assets/library/jquery',
        underscore: '../assets/library/underscore',
        backbone:   '../assets/library/backbone',
        radio:      '../assets/library/backbone.radio.min',
        marionette: '../assets/library/backbone.marionette.min',
        handlebars: '../assets/library/handlebars.min',
        //Helpers and extensions
        'handlebars.helpers': './helpers/handlebars.helpers',
        'jquery.extensions':  './helpers/jquery.extensions',
        'underscore.mixins':  './helpers/underscore.mixins',
        //Spies, Stubs, and fake servers (Jasmine is loaded by Karma plugin)
        sinon: '../node_modules/sinon/pkg/sinon'
    }
});
