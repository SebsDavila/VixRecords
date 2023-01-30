module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{css,html,js,json,png}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};