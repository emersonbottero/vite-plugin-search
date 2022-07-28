import { SearchPlugin } from '../../vite-plugin-search/dist';
// import { SearchPlugin } from '@emersonbottero/vite-plugin-search';
import Inspect from 'vite-plugin-inspect';

export default {
	plugins: [
		 SearchPlugin(),
		 Inspect()]
};
