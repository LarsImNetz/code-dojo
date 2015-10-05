/*global module */

module.exports = function(config) {
	config.set({

		basePath: "../",

		files: [
			"src/**/*.js"
		],

		autoWatch: true,

		frameworks: ["jasmine"],

		browsers: ["Chrome"],

		plugins: [
			"karma-chrome-launcher",
			"karma-phantomjs-launcher",
			"karma-jasmine"
		]

	});
};
