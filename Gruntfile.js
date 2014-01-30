module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    nggettext_extract: {
      pot: {
        files: {
          'po/template.pot': ['www/index.html', 'www/templates/*.html', 'www/js/*.js']
        }
      }
    },
    nggettext_compile: {
      all: {
        /*options: {
          module: 'demo.translations'
        },*/
        files: {
          'www/js/translations.js': ['po/*.po']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-angular-gettext');
  grunt.registerTask('default', ['nggettext_extract']);
  grunt.registerTask('compile', ['nggettext_compile']);
};