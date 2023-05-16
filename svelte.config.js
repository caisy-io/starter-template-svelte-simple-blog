import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/adapter-vercel').Config} */
const config = {
	runtime: 'edge',
	kit: {
		adapter: adapter()
	},
	preprocess: vitePreprocess()
};

export default config;
