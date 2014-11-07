/*
 * grunt-closure-deps-fix
 * https://github.com/Orlac/grunt-closure-deps-fix
 *
 * Copyright (c) 2014 Orlac
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('closure_deps_fix', 'The best Grunt plugin ever.', function() {
    // Merge task-specific and/or target-specific options with these defaults.
    var string = grunt.file.read(this.options.filepath);

    console.log('string', string);
    
  });

};
