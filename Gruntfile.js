module.exports = function(grunt) {

	// bring in existing tasks from plugins
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-typescript');
	
	// create an alias task
	grunt.registerTask('default', ['watch']);

	// task configurations
	grunt.initConfig({
		typescript: {
	      base: {
	        src: ['file.ts'],
	        dest: 'file.js',
	        options: {
	          module: 'amd', //or commonjs
	          target: 'es5', //or es3
	          base_path: '/',
	          sourcemap: false,
	          declaration: false
	        }
	      }
	    },
		pkg: grunt.file.readJSON('package.json'),
		watch: {
		  scripts: {
		    files: ['**/*.js'],
		    tasks: ['typescript'],
		    options: {
		      spawn: true
		    }
		  }
		}
	});
}