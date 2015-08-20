module.exports = function(grunt) {
    'use strict';
    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);
    var config = require('config').grunt;
    grunt.initConfig({
        /**
         * NOTE: To change "templates.js" and/or "config.js", manually change names in this file.
        **/
        package: grunt.file.readJSON('package.json'),
        ports: config.ports,
        paths: config.paths,
        encryptedExtension: config.encryptedExtension,
        files: config.files,
        jshint: {
            options: {
                force: true,
                reporter: require('jshint-table-reporter'),
                jshintrc: '<%= files.config.jshint %>',
                ignores: '<%= paths.app %>/templates.js'
            },
            grunt: 'Gruntfile.js',
            tasks: '<%= files.tasks %>',
            app:   '<%= files.scripts %>'
        },
        jscs: {
            options: {
                force: true,
                reporter: 'console',//checkstyle, inline, console, text
                reporterOutput: null
            },
            app: {
                options: {config: '<%= files.config.jscs %>'},
                files: {src: ['<%= files.scripts %>', '!<%= paths.app %>/templates.js']}
            },
            comments: {
                options: {config: '<%= files.config.jsdoc %>'},
                files: {src: ['<%= files.scripts %>']}
            }
        },
        jsonlint: {
            project: {src: ['./*.json', './config/.*']}
        },
        csslint: {
            options: {csslintrc: '<%= files.config.csslint %>'},
            src: ['<%= files.styles %>']
        },
        accessibility: {
            index: {
                options: {
                    reportLevels: {
                        notice: false,
                        warning: true,
                        error: true
                    },
                    accessibilityLevel: 'WCAG2AAA',
                    ignore : [
                        'WCAG2A.Principle2.Guideline2_4.2_4_2.H25.2'
                    ]
                },
                src: ['<%= files.index %>']
            },
            templates: {
                options: {
                    accessibilityLevel: 'WCAG2AAA',
                    ignore : [
                        'WCAG2A.Principle2.Guideline2_4.2_4_2.H25.2',
                        'WCAG2A.Principle2.Guideline2_4.2_4_2.H25.1.NoTitleEl',
                        'WCAG2A.Principle3.Guideline3_1.3_1_1.H57.2'
                    ]
                },
                src: ['<%= files.templates %>']
            }
        },
        a11y: {
            index: {
                options: {urls: ['<%= files.index %>']}
            }
        },
        //Find "magic numbers" (unnamed numerical constants) in code
        buddyjs: {
            src: ['<%= files.scripts %>', '!<%= paths.app %>/templates.js'],
            options: {
                ignore: [0, 1, 10, 100]
            }
        },
        jsinspect: {
            app:         {src: ['<%= files.scripts %>']},
            models:      {src: ['<%= files.models %>']},
            views:       {src: ['<%= files.views %>']},
            controllers: {src: ['<%= files.controllers %>']}
        },
        //Transcompile LESS to CSS
        less: {
            main: {
                options: {
                    paths: ['<%= files.less %>'],
                    compress: false,
                    plugins: [
                        new (require('less-plugin-clean-css'))({advanced: true}),
                        new (require('less-plugin-autoprefix'))({browsers: ['last 2 versions']})
                    ]
                },
                files: {
                    '<%= files.styles %>':                'assets/less/style.less',
                    '<%= paths.buildClient %>/style.css': 'assets/less/style.less'
                }
            }
        },
        //Pre-compile Handlebars templates
        handlebars: {
            compile: {
                options: {
                    amd: true,
                        processName: function(filePath) {
                        var tplRoot = /[.][/]assets[/]templates[/]/;
                        return filePath.replace(tplRoot, '').replace(/[.]hbs/, '');
                    }
                },
                files: {
                    './app/templates.js': ['<%= files.templates %>']
                }
            }
        },
        //Optimize JS code into single file
        requirejs: {
            build: {
                options: {
                    baseUrl: '<%= paths.app %>',
                        mainConfigFile: '<%= paths.app %>/config.js',
                        include: ['config'],
                        out: '<%= paths.buildClient %>/config.js'
                }
            }
        },
        //Minimize final JS file
        uglify: {
            options: {
                banner: '/* <%= package.name %> - v<%= package.version %> - ' +
                        '<%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                files: [
                    {
                        src:  '<%= paths.buildClient %>/config.js',
                        dest: '<%= paths.buildClient %>/config.js'
                    }
                ]
            }
        },
        //Minimize index.html for deployment
        htmlmin: {
            options: {
                removeComments: true,
                collapseWhitespace: true
            },
            build: {
                files: [
                    {
                        src:  '<%= files.index %>',
                        dest: '<%= paths.buildClient %>/index.html'
                    }
                ]
            }
        },
        imagemin: {
            build: {
                files: [{
                    expand: true,
                    cwd: './',
                    src: ['./<%= files.images %>'],
                    dest: 'web/'
                }]
            }
        },
        jasmine: {
            main: {
                src: ['<%= files.scripts %>', '!<%= paths.app %>/main.js'],
                options: {
                    specs: ['<%= paths.test %>/jasmine/specs/**/*.js'],
                    keepRunner: false,
                    template: require('grunt-template-jasmine-requirejs'),
                    templateOptions: {
                        requireConfigFile: '<%= paths.app %>/config.js',
                        requireConfig: {
                            baseUrl: '<%= paths.app %>'
                        }
                    }
                }
            }
        },
        karma: {
            options: {
                configFile: '<%= files.config.karma %>',
                port: '<%= ports.karma %>'
            },
            watch: {
                background: true,
                singleRun: false,
                coverageReporter: {
                    dir: '<%= paths.test %>/coverage/',
                    includeAllSources: true
                }
            },
            coverage: {
                autoWatch: false
            },
            covering: {
                autoWatch: true,
                singleRun: false
            }
        },
        watch: {
            style: {
                files: ['<%= files.less %>', '<%= files.styles %>'],
                tasks: ['less:main', 'csslint'],
                options: {spawn: false}
            },
            jshint: {
                files: '<%= files.scripts %>',
                tasks: ['jshint:app'],
                options: {spawn: false}
            },
            jscs: {
                files: '<%= files.scripts %>',
                tasks: ['jscs:app', 'jscs:comments'],
                options: {spawn: false}
            },
            lint: {
                files: '<%= files.all %>',
                tasks: ['less:main', 'csslint', 'jshint:app', 'jscs'],
                options: {spawn: false}
            },
            review: {
                files: '<%= files.all %>',
                tasks: ['compile', 'jshint:app', 'jscs', 'jasmine:main', 'karma:watch:run'],
                options: {
                    livereload: '<%= ports.livereload %>',
                    spawn: false
                }
            },
            browser: {
                files: '<%= files.app %>',
                tasks: ['compile'],
                options: {
                    livereload: '<%= ports.livereload %>',
                    spawn: false
                }
            }
        },
        express: {
            main: {
                options: {
                    bases: [__dirname],
                    port:       '<%= ports.default %>',
                    hostname:   '0.0.0.0',
                    livereload: '<%= ports.livereload %>'
                }
            },
            demo: {
                options: {
                    bases: [__dirname],
                    port:       '<%= ports.default %>',
                    hostname:   '0.0.0.0',
                    serverreload: true
                }
            }
        },
        coveralls: {
            options: {
                // LCOV coverage file relevant to every target
                coverageDir: '<%= paths.test %>/coverage/',
                recursive: true,
                force: true
            }
        },
        plato: {
            app : {
                src : '<%= files.scripts %>',
                dest : 'reports',
                options : {
                    jshint : grunt.file.readJSON('./config/.jshintrc')
                }
            }
        },
        jsdoc : {
            app: {
                src: ['<%= files.scripts %>'],
                dest: 'docs',
                options: {
                    readme: 'README.md'
                }
            }
        },
        open: {
            chrome: {
                path: 'http://localhost:<%= ports.default %>/app',
                app: 'Chrome'
            },
            firefox: {
                path: 'http://localhost:<%= ports.default %>/app',
                app: 'Firefox'
            },
            demo: {
                path: 'http://localhost:<%= ports.default %>/<%= paths.buildClient %>',
                app: 'Chrome'
            }
        },
        clean: {
            docs:    ['docs/*'],
            test:    ['<%= paths.test %>/coverage'],
            compile: ['<%= paths.app %>/templates.js', '<%= files.styles %>'],
            build:   ['<%= paths.buildClient %>', '<%= paths.buildAssets %>'],
            plain:   ['vault/*', '!vault/*<%= encryptedExtension %>', '!vault/README.md'],
            cipher:  ['vault/*<%= encryptedExtension %>']
        },
        copy: {
            build: {
                files: [{
                    expand: true,
                    src: ['assets/fonts/*.{ttf,woff,eot,svg}'],
                    dest: '<%= paths.web %>/',
                    filter: 'isFile'
                }]
            }
        },
        crypt:{
            options: {
                key: grunt.cli.options.key || 'password'
            },
            files: [
                {
                    dir: 'vault',
                    include: '**/!(README.md|README.MD)',
                    encryptedExtension: '<%= encryptedExtension %>'
                }
            ]
        }
    });
    grunt.registerTask('default', ['quick-review']);
    grunt.loadTasks('./tasks');
};
