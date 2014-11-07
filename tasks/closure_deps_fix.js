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
    
    var options = this.options({ });

    //console.log('this.options', options);
    var string = grunt.file.read(options.filepath);
    string = string.split('\n');

    var res = [];

    for(var i in string){
    	var s = string[i];
    	s = s.replace('\r', '');

    	var reg = new RegExp('goog.addDependency\\(\'app', 'img')
    	if(!reg.test(s)){
    		res.push(s);	
    	}
    }


    //console.log('string', res);
    
    grunt.file.write(options.filepath, res.join('\n') );

    var compileDone = this.async();
    compileDone(null);

  });

};
