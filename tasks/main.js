module.exports = function(grunt) {
    'use strict';

    //Write & Review Tasks
    grunt.registerTask('styling', ['csslint','watch:style']);
    grunt.registerTask('lint', 'Lint JSON, CSS, and JS code', [
        'jsonlint',
        'csslint',
        'jshint:app',
        'jscs:app',
        'buddyjs'
    ]);
    grunt.registerTask('aria', ['accessibility', 'a11y']);
    grunt.registerTask('inspect', 'Detect copy-pasted and structurally similar code', ['jsinspect:app']);
    grunt.registerTask('review', [
        'compile',
        'lint',
        'karma:coverage',
        'karma:watch:start',
        'express',
        'open:chrome',
        'open:firefox',
        'watch:review'
    ]);
    grunt.registerTask('quick-review', [
        'compile',
        'express',
        'open:chrome',
        'watch:browser'
    ]);
    //Continuous versions of jshint, jscs and lint
    grunt.registerTask('jshinting', ['jshint:app','watch:jshint']);
    grunt.registerTask('jscsing',   ['jscs', 'watch:jscs']);
    grunt.registerTask('linting',   ['lint','watch:lint']);

    //Generate Documentation
    grunt.registerTask('docs', 'Generate Documentation with JSDocs', ['clean:docs', 'jsdoc:app']);

    //Utility Tasks
    grunt.registerTask('lock',   ['encrypt', 'clean:plain']);
    grunt.registerTask('unlock', ['decrypt', 'clean:cipher']);
};