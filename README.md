# README

## About

This is the unofficial Wails Sveltekit (Static) template.

## Live Development

To run in live development mode, run `wails dev` in the project directory. This will run a Vite development
server that will provide very fast hot reload of your frontend changes. If you want to develop in a browser
and have access to your Go methods, there is also a dev server that runs on http://localhost:34115. Connect
to this in your browser, and you can call your Go code from devtools.

## Two Frontend Directories Dncluded

frontend.demo - the sveltekit demo (default)

- Note: With a static adapter, server side rendering is disabled and the app is served as a static site. This breaks the wordle clone in the demo, as the javascript is not executed on any server.

- Havent tinkered with getting it to work, which I suspect is really just a matter of passing the work off to golang instead.

frontend.skeleton - an empty app frontend
- This results in a pretty straightforward addition of many useful features of sveltekit such as routing, to wails svelte.

Both are configured not to do server side rendering; they build the site into the frontend/build directory which is embedded into the application during 'wails build'.

#### 'wails dev' should properly launch vite to serve the site for live development without needing to seperately launch 'npm run dev' or your flavor such as pnpm in the frontend directory seperately.

## Building

To build a redistributable, production mode package, use `wails build`.
