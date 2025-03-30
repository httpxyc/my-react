import { getBaseRollupPlugins, getPkgJson, getPkgPath } from './utils';
import cmj from '@rollup/plugin-commonjs';
import rollupGenPkgJsonFile from 'rollup-plugin-generate-package-json';

const { module } = getPkgJson('react');
const pkgPath = getPkgPath('react');
const pkgDistPath = getPkgPath('react', true);

export default [
	// react
	{
		input: `${pkgPath}/${module}`,
		output: {
			file: `${pkgDistPath}/index.js`,
			name: 'index.js',
			// 兼容es和commonjs模式
			format: 'umd'
		},
		plugins: [
			getBaseRollupPlugins(),
			rollupGenPkgJsonFile({
				inputFolder: pkgPath,
				outputFolder: pkgDistPath,
				baseContents: ({ name, version, description }) => {
					return {
						name,
						version,
						description,
						main: 'index.js',
						module: 'index.js'
					};
				}
			})
		],
		external: ['react/jsx-runtime', 'react/jsx-dev-runtime']
	},
	// jsx runtime
	{
		input: `${pkgPath}/src/jsx.ts`,
		output: [
			{
				file: `${pkgDistPath}/jsx-runtime.js`,
				name: 'jsx-runtime.js',
				// 兼容es和commonjs模式
				format: 'umd'
			},
			{
				file: `${pkgDistPath}/jsx-dev-runtime.js`,
				name: 'jsx-dev-runtime.js',
				// 兼容es和commonjs模式
				format: 'umd'
			}
		],
		plugins: [getBaseRollupPlugins()]
	}
];
