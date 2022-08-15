import { cpSync } from 'fs';

/** @type {import("tsup").Options} */
export const tsup = {
	entryPoints: ['src/index.ts'],
	format: ['esm'],
	sourcemap: true,
	splitting: false,
	clean: true,
	target: 'node14.13.1',
	onSuccess() {
		cpSync('./src/client/Search.vue', './dist/client/Search.vue');
		cpSync('./src/lunr-esm.js', './dist/lunr-esm.js');
	}
};
