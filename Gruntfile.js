'use strict';

module.exports = function(grunt) {

  // Project configuration
  grunt.initConfig({

    // Read package.json file
    pkg: grunt.file.readJSON('package.json'),

    // Define paths
    meta: {
        srcPathSass: 'src/sass/',
        srcPathJS: 'src/js/',
        buildPathCSS: 'src/css/',
        buildPathJS: 'src/js/'
    },

    // $TASK = Sass
    sass: {
      dist: {
        // Grab the style.scss and make the style.css, simple as hell
        files: {
          '<%= meta.buildPathCSS %>style.css' : '<%= meta.srcPathSass %>style.scss'
        },
        // Minify Sass FTW!
        options: {
          style: 'compressed'
        }
      }
    },

    // $TASK = Uglify
    uglify: {
      options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("dd-mm-yyyy") %> */\n',
          mangle: false
      },
      target: {
          // Grab the wtf.js and make the wtf.min.js, simple as hell
          files: {
              '<%= meta.buildPathJS %>wtf.min.js': ['<%= meta.srcPathJS %>wtf.js']
          }
      }
    },

    // $TASK = Connect... Create a Node server!
    connect: {
      options: {
        port: 9000,
        hostname: 'localhost',
        livereload: 35729
      },
      livereload: {
        options: {
          open: true
        }
      }
    },

    // $Task = Watch... watch the files dude, watch the files! Forget F5
    watch: {
      sass: {
        files: '<%= meta.srcPathSass %>*.scss',
        tasks: ['sass']
      },
      uglify: {
        files: '<%= meta.srcPathJS %>wtf.js',
        tasks: ['uglify']
      },
      html: {
        files: '*.html'
      },
      options: {
        livereload: '<%= connect.options.livereload %>'
      }
    }

  });

  grunt.registerTask('default', ['connect', 'watch']);

}
