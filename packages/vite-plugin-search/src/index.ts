import { Plugin } from 'vite';

export interface Options {
	// add plugin options here
}

const DEFAULT_OPTIONS: Options = {
	// set default values
};

export function SearchPlugin(inlineOptions?: Partial<Options>): Plugin {
	// eslint-disable-next-line no-unused-vars
	const options = {
		...DEFAULT_OPTIONS,
		...inlineOptions
	};

	let config

	return {
		name: 'vite-plugin-search',
		enforce: 'post',
		// add hooks here
		
	configResolved(resolvedConfig) {
		// store the resolved config
		config = resolvedConfig
	  },
		transform(code, id){
			if(id.endsWith(".md")){
				console.log(id);
				console.log(config.env);
				
				// code = code.replace("eeeeeeeeeeeeeeee","test")
				// console.log("\t" + code);
				return code
			}

	},

		// configureServer(server) {
		// 	server.middlewares.use((req, res, next) => {
		// 	  // custom handle request...
		// 	  console.log(res);
			  
		// 	})
		//   },

		// resolveFileUrl(path){
		// 	console.log('resolving ...' + path);
			
		// },

		// buildEnd(ctx){
		// 	console.log("build ended...");
			
		// },

		// resolveId(id){
		// 	console.log("############" + id);

		// },

		transformIndexHtml(html, ctx) {
			console.log(html);
			console.log("🙏");
			console.log(ctx);
			// return html.replace(/<title>(.*?)<\/title>/, `<title>Title replaced!</title>`);
		}
	};
}
