import { SearchPlugin } from '../../vite-plugin-search/dist/index.mjs';
// import { SearchPlugin } from '@emersonbottero/vite-plugin-search';
// import Inspect from 'vite-plugin-inspect';

export default {
	plugins: [SearchPlugin()],
	server: {
		fs: {
			// Allow serving files from one level up to the project root
			allow: ['C:/Users/emers/Source/Repos/vite-plugin-search/']
		}
	}
};
