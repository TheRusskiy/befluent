'use strict';
module.exports = function (grunt) {
    grunt.initConfig({
        eslint: {
            all: {
                src: [
                    'app/assets/javascripts/**/*.js',
                    '!app/assets/javascripts/**/*.rt.js'
                    ]
            }
        },
        clean: {
            main: {
                src: ['app/assets/javascripts/**/*.rt.js']
            }
        },
        copy: {
          main: {
            files: [
              // includes files within path
              {
                expand: true,
                src: ['app/assets/templates/*.js'],
                flatten: true,
                dest: 'app/assets/javascripts/components/',
                filter: 'isFile'
              }
            ]
          }
        },
        watch: {
            rt: {
                files: [
                    'app/assets/templates/**/*.rt'
                ],
                tasks: ['rt', 'copy'],
                options: {
                    spawn: false,
                    livereload: true
                }
            },
            js: {
                files: [
                    'app/assets/javascripts/**/*.js'
                ],
                options: {
                    spawn: false,
                    livereload: true
                }
            },
            coffee: {
                files: [
                    'app/assets/javascripts/**/*.coffee'
                ],
                options: {
                    spawn: false,
                    livereload: true
                }
            },
            css: {
                files: [
                    'app/assets/stylesheets/**/*'
                ],
                options: {
                    spawn: false,
                    livereload: true
                }
            },
            html: {
                files: [
                    'app/views/**/*'
                ],
                options: {
                    spawn: false,
                    livereload: true
                }
            }
        },
        reactTemplates: {
            modules: 'commonjs',
            format: 'stylish',
            src: ['app/assets/templates/**/*.rt'],
            dest: ['build']
        }
    });

    grunt.loadNpmTasks('grunt-react-templates');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-eslint');

    grunt.registerTask('rt', ['react-templates']);
    grunt.registerTask('default', ['rt', 'eslint']);
    grunt.registerTask('test', []);

    grunt.registerTask('all', ['default', 'test']);
};
