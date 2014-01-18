/*global module:false*/
module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        copy: {
            dependencies: {
                expand: true,
                cwd: 'bower_components/modularjs-es5/src/es5',
                src: ['**/*.js'],
                dest: 'src/es5'
            }
        },
        release: {
            options: {
                file: 'bower.json', //default: package.json
                npm: false //default: true
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-release');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Default task.
    grunt.registerTask('default', ['copy']);

};
