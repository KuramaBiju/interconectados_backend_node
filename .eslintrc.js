/* eslint-disable no-mixed-spaces-and-tabs */
module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	extends: [
	  'eslint:recommended',
	  'plugin:@typescript-eslint/recommended'
	],
	parserOptions: {
	  ecmaVersion: 2020,
	  sourceType: 'module',
	},
	rules : {
		'@typescript-eslint/no-var-requires': 'off',
		'@typescript-eslint/no-unused-vars': 'off',
	},
	env: {
	  node: true,
	  es2021: true
	},
  };