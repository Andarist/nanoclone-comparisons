const path = require('path')
const webpack = require('webpack')

const { FORMAT, MIN, HOIST } = process.env

module.exports = {
	entry: {
		bundle: './index.js'
	},
	output: {
		path: path.resolve(__dirname, './dist/'),
		filename: `[name]${ HOIST ? '-hoisted' : '' }.${ FORMAT }${ MIN ? '.min' : '' }.js`,
	},
	resolve: {
		alias: {
			nanoclone: `./nanoclone.${ FORMAT }.js`
		},
	},
	plugins: [
		MIN && new webpack.optimize.UglifyJsPlugin(),
		HOIST && new webpack.optimize.ModuleConcatenationPlugin(),
	].filter(Boolean)
}
