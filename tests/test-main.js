var tests = [];
for (var file in window.__karma__.files) {
    // Our test modules are named "<something>Spec.js"
    // If you decide to change the format of the file name this Regex
    // must reflect it.
    if (/\.spec\.js$/.test(file)) {
        tests.push(file);
    }
}

requirejs.config({
    // Karma serves files from '/base'
    // The "src/" part is the same as the one in the repo root
    baseUrl: '/base/app',
    // ask Require.js to load these files (all our tests) that we collected before
    deps: tests,
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
    },
    // start test run, once Require.js is done
    callback: window.__karma__.start
});