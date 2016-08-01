module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({

        // Task configuration.
        bower: {
          install: {
              options: {
                  targetDir: './vendor',
                  cleanTargetDir: true,
                  layout: 'byType'
              }
          }
        },

        browserify: {
          dist: {
            files: {
            'dist/main.js': ['sudoku.js', 'src/*.js']
            }
          }
        },

        copy: {
            site: {
                src: ['vendor/**'],
                dest: 'site/dist/'
            }
        },

        jade: {
            site: {
                files: {
                    "site/dist/index.html": ["site/index.jade"]
                }
            }
        }

    });

    // Load the plugin(s)
    grunt.loadNpmTasks('grunt-bower-task');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Default task(s).
    grunt.registerTask('default', [
        "browserify"
    ]);

    grunt.registerTask('site', [
        "copy:site",
        "jade:site"
    ]);

};
