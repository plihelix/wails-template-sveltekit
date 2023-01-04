# README

## About

This is the unofficial Wails Sveltekit Static-Adapter template.

A minimally invasive template remix of [wails.io](https://wails.io) to support [SvelteKit](https://kit.svelte.dev) out of the box.

## Dependencies:

* A nodejs package manager.
* Install wails. ([docs](https://wails.io/docs/gettingstarted/installation))
* Install svelte. ([docs](https://kit.svelte.dev/docs/creating-a-project))

## Install:

`wails init -n [My-App-Name] -t https://github.com/plihelix/wails-sveltekit`

## Live Development

To run in live development mode, run `wails dev` in the project directory. This will run a Vite development server that will provide very fast hot reload of your frontend changes. If you want to develop in a browser and have access to your Go methods, there is also a dev server that runs on http://localhost:34115. Connect to this in your browser, and you can call your Go code from devtools.

* `wails dev` should properly launch vite to serve the site for live development without needing to seperately launch 'npm run dev' or your flavor such as pnpm in the frontend directory seperately.

The adapter combined with the option not to do server side rendering builds the site into the frontend/build directory which is embedded into the application during `wails build` or (iirc) file referenced during `dev` mode. I find this to be great for live development stability; any error which stops a rebuild, avoids getting sent to the wails app webclient. Save early, save often with less fear.

## Two Frontend (backup) Directories Included

`/frontend.demo/` - The default sveltekit demo.

Note: With a static adapter, server side rendering is disabled and the app is served as a static site. This breaks the wordle clone in the demo, as the javascript is not executed on any server.

- I havent tinkered with getting it to work there are two sensical options if SSR becomes a must;
1) The first is  just a matter of passing the work to golang instead of js which is sort of the point of wails imo.
2) The other is keeping the ui out of the binary. Which affords either;
    a) Run the host as a seperate program to gain SvelteKit's native ssr functionality, or
    b) use a golang ssr solution like [Hugo](https://github.com/gohugoio/hugo).

`/frontend.skeleton/` - Empty app frontend
* *This is a copy of the `/frontend` folder.*

This results in a pretty straightforward addition of many useful features of sveltekit such as routing to wails.

## Building

To build a redistributable, production mode package, use `wails build`.
