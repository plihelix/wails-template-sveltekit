import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
export default {
  kit: {
		adapter: adapter({
      // Static needs a fallback page.
      fallback: 'index.html'
    }),
	},
};
