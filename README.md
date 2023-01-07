# This is the Unofficial Wails Svelte Kit Static-Adapter blank template.
... and ... 
## How-To Build any Svelte Kit Front End in Wails. (or others!)

This is a minimally invasive template remix of [Wails.io](https://wails.io) to support [SvelteKit](https://kit.svelte.dev) out of the box. This results in a pretty straightforward addition of many useful features of Svelte Kit such as routing to a Wails.io app.

## Why is the static site adapter needed in Svelte Kit and not Svelte?

*Well, it may not be. I'm still wrapping my head around it.*

* The first thing to understand is that Vite is a web-server which is used for the dev mode. Wails uses this to locally host a website with live reload for development mode, which the application navigates to. This is commonly used for all the top frameworks and has robust features such as server side rendering(ssr).

Wails.io is an application framework that by design packages the html, js, etc front end into the binary executable during `wails build`. This happens in main.go with:
`
//go:embed all:frontend/dist
var assets embed.FS
`
If I'm reading the source correctly, these assets are served out of this embedded file-system to each systems web kit by a lightweight file asset server. 

The default configuration of Vite for Svelte Kit projects includes ssr. But, this is normal for web served applications using **server** compute for more "consistent" web user experience by sending server rendered html to the client. This is more consistent than an api call to that same server, yes. But in a wails app, we're packaging the UI in the binary itself.

This means that **unlike Vite,** wails doesn't provide a web-server with a Javascript back end built in. It uses the appropriate webclient to provide the Javascript runtime. 
- *(webview2 in windows, webkit2 on linux, and wkwebview on mac respectively)*

## Dependencies:

* A nodejs package manager.
* Install wails. ([docs](https://wails.io/docs/gettingstarted/installation))

## Install:

`wails init -n [My-App-Name] -t https://github.com/plihelix/wails-sveltekit`

## Live Development

To run in live development mode, run `wails dev` in the project directory. This will run a Vite development server that will provide very fast hot reload of your frontend changes. If you want to develop in a browser and have access to your Go methods, there is also a dev server that runs on http://localhost:34115. Connect to this in your browser, and you can call your Go code from devtools.

* `wails dev` should properly launch vite to serve the site for live development without needing to seperately launch 'npm run dev' or your flavor such as pnpm in the frontend directory seperately.

The adapter combined with the option not to do server side rendering builds the site into the frontend/build directory which is embedded into the application during `wails build` or (iirc) file referenced during `dev` mode. I find this to be great for live development stability; any error which stops a rebuild, avoids getting sent to the wails app webclient. Save early, save often with less fear.

## Building

To build a redistributable, production mode package, use `wails build`.

## What's the difference? Why not just use Svelte?

As already mentioned, server side rendering of html content moves API calls that the client would request and then need to format into the webpage skeleton to the server. There are various reasons you may want this capability, but at it's core ssr seeks to provide a user experience that *feels* more like a locally run app. By moving the api calls into the server farm, the user doesn't need to load the page and then stare at a blank page waiting on product data to show up. This makes for a more consistent user experience on everything from mobile to hpc.

Wails, however, is for building applications that run on a users device with a golang back end and an embedded front end. The idea here is the opposite from ssr; the target client is expected to do some or all of the work, but is provided the assets. The commonality is in placing the work with the data. Wails with svelte is already pretty smooth at building sites dynamically around the data you provide it with.

The addition of routing should not be understated. Basically, the big advantage to SvelteKit over svelte in wails is the routing. Since you have these endpoints for pages and can navigate through them you don't have to build a one-page app like svelte does; you can effectively load and unload modular parts of an interface.

If the app is complex, let's say you were building your own 2d slider game, a one page app becomes a behemoth to contend with handling all the various flags and cross-talk. The fact that it only loads once, means that wails has to throw a flag to hide one pseudo-page to and unhide another. You probably want the hidden one to stop taking a steam of data. If you want it to be quick and snappy, you've got to do all that cleanup yourself.

On this game, you want to do a bunch of levels with different art? You can probably imagine the monstrosity of 30+ level designs, art, menus, and all packed into a single page in memory terms let alone the design nightmare to manage it. 

Using SvelteKit, the user can just navigate to the new endpoint. Automatically unloading the old page and cleaning up connections, while loading in just what you need. Just like wails svelte, the page is built around the data provided to it as it's loaded. So, for this example, the controls and hud can be loaded from their own endpoints, each level from it's own.

# How to install this template

- `wails init -n {MY_APP} -t https://github.com/plihelix/wails-sveltekit`

# How to install any Vite based *SvelteKit* frontend into a new Wails project

Init your new project as normal
- `wails init -n {MY_APP} -t svelte` 

*// I used the svelte base just in case I am misunderstanding how this all works together.*

Remove the new `{MY_APP}/frontend` folder:
`cd MY_APP
rm -r ./frontend`

Use the npm create to generate a new /frontend from a template: (eg:)

- SvelteKit - and nothing else, yet.

`npm create svelte@latest frontend`

- [SkeletonUI](https://www.skeleton.dev/guides/install) - SvelteKit, Tailwindcss, lightweight UI

`npm create skeleton-app@latest frontend`

* The `Yes, using Typescript syntax` option is by recommended by SkeletonUI.

I don't see why this wouldn't be the go-to choice with most; since wails uses generated ts as well.
The choices here will only matter if you open the **project** in your editor at the **`/frontend`** or use their commands from within the front end folder.
`[todo: add linter selection photo]`

## Here is where we can replicate the main issue people have when attempting to use Wails with SvelteKit.

* On `wails dev`, the binary of your app is compiled without the assets. Instead wails is expecting to connect to the Vite server at `localhost:5143` for live-reload.

* On `wails build`, (default) `/frontend/dist/**/*` is stored into the binary. Wail apps, serves their *embedded* file-system to `localhost:5143`.

Both are accessed by the web kit just like any website. Allowing for all of the clientside js in the svelte page, but not the code that would run on the server in a js runtime environment.

A default Svelte Kit project in the `/frontend` folder expects a Vite to do server side rendering and included server side Javascript out of the `/frontend/[src]` directories. Wails can take advantage of this in dev mode because Vite is doing the work, it just navigates to the web socket.

* Compare: Vite w/ Svelte embeds all the script that is in the `[whatever].svelte` into a single top page and builds that page once.

If you compile now with `wails build`, you'll see the dreaded `Can't find index.html` message.

## If you get "Can't find index.html" after a compile:

#### check main.go for what is being embedded
- When we disable ssr, Vite will compile the website into `/frontend/build` which is then served just as wails will in compile. This means that `main.go`s asset embed declaration needs to be changed to:
`
//go:embed all:frontend/build
var assets embed.FS
`
Note: Turning off ssr results in a minor launch hang time in dev mode as Vite compiles the assets into the build directory. This hang should be absent when compiled.

## Turning off ssr with adapter-static.

Go into the front end folder and install the dependencies adding @sveltejs/adapter-static.
`
cd frontend
npm i -D @sveltejs/adapter-static
`

## Edit the svelte.config.js file.

`
import adapter from '@sveltejs/adapter-auto';  // Change the adapter-auto to this.
import preprocess from "svelte-preprocess";     // <-- Others may be included from your template.

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {                        // <-- Begins SvelteKit options.
		adapter: adapter({
      fallback: 'index.html'    // Add this. (Don't forget the bounding '{}')
    }),
    embedded: true,             // Add this.
	},                            // <-- Others may be included from your template.
	preprocess: [
		preprocess({
			postcss: true,
		}),
	],
};

export default config;
`

## Don't forget to include `.sveltekit` in your git or you'll probably have trouble after cloning.
## There is a simple shell script to do this with [SkeletonUI](https://www.skeleton.dev/guides/install) located in its
## own [repo](https://www.github.com/plihelix/wails-skeletonui-script)

### That's it, go back to the root of the project and run `wails dev` or `wails build`.
