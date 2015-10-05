/*global module */

module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON("package.json"),

		karma: {
			options: {
				configFile: "test/karma.conf.js"
			},
			unit: {
				singleRun: false
			},
			continuous: {
				singleRun: true,
				browsers: ["PhantomJS"]
			}
		},
	
		clean: {
			build: {
				src: ["dist"]
			},
			concatenatedJavascript: {
				src: ["dist/concat"]
			}
		},
		jshint: {
			files: ["*.js", "src/**/*.js", "app/js/**/*.js", "test/**/*.js"],
			options: {
				jshintrc: ".jshintrc",
			}
		},
	});

	grunt.loadNpmTasks("grunt-karma");
	grunt.loadNpmTasks("grunt-contrib-concat");
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks("grunt-contrib-clean");
	grunt.loadNpmTasks("grunt-processhtml");
	grunt.loadNpmTasks("grunt-contrib-copy");
	grunt.loadNpmTasks("grunt-contrib-jshint");
	grunt.loadNpmTasks("grunt-sass");
	grunt.loadNpmTasks("grunt-contrib-watch");

	grunt.registerTask("default", ["clean", "jshint", "karma:continuous", "concat", "uglify", "clean:concatenatedJavascript", "processhtml", "sass", "copy"]);
};
