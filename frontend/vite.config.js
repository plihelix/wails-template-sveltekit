import { sveltekit } from '@sveltejs/kit/vite';
// import path from 'path'

/** @type {import('vite').UserConfig} */
const config = {
  server: {
    fs: {
      // To allow serving files from the frontend project root.
      // allow: ['.'],
    },
  },
	plugins: [sveltekit()],
  resolve: {
    alias: {
      // This alias finishes the ability to reference our
      // frontend dirctory. With "@path/to/file"
      // '@': path.resolve(__dirname, './'), 
    },
  },
};

export default config;

