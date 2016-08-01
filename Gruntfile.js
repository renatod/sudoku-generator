module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({

        // Task configuration.
        browserify: {
          dist: {
            files: {
            'main.js': ['sudoku.js', 'src/*.js']
            }
          }
        }

    });

    // Load the plugin(s)
    grunt.loadNpmTasks('grunt-browserify');

    // Default task(s).
    grunt.registerTask('default', [
        "browserify"
    ]);
};
