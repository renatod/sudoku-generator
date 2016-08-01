module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({

        // Task configuration.
        bower: {
          vendor: {
              options: {
                  targetDir: './vendor',
                  cleanTargetDir: true,
                  layout: 'byType'
              }
          }
        },

        less: {
            site: {
                src: 'site/src/site.less',
                dest: 'site/dist/site.css'
            }
        },

        browserify: {
          site: {
            files: {
            'site/dist/site.js': ['site/src/*.js', 'src/*.js']
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
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');

    // Default task(s).
    grunt.registerTask('default', [
       "bower:vendor",
       "site"
    ]);

    grunt.registerTask('site', [
        "copy:site",
        "jade:site",
        "less:site",
        "browserify:site"
    ]);

};
