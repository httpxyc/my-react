import fs from 'fs';
import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import cmj from '@rollup/plugin-commonjs';
import ts from 'rollup-plugin-typescript';

const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

export const pkgPath = path.resolve(__dirname, '../../packages');
export const distPath = path.resolve(__dirname, '../../dist');
export const getPkgPath = (pkgName, isDist) => {
	if (isDist) {
		return path.resolve(distPath, pkgName);
	}
	return path.resolve(pkgPath, pkgName);
};

export const getPkgJson = (pkgName) => {
	const pkgPath = getPkgPath(pkgName);
	const pkgJsonPath = path.resolve(pkgPath, 'package.json');
	const pkgJson = JSON.parse(fs.readFileSync(pkgJsonPath, 'utf-8'));
	return pkgJson;
};

export const getBaseRollupPlugins = ({ typescript = {} } = {}) => {
	return [cmj(), ts(typescript)];
};
