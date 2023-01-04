package main

import (
	"embed"

	"github.com/wailsapp/wails/v2"
	"github.com/wailsapp/wails/v2/pkg/options"
	"github.com/wailsapp/wails/v2/pkg/options/assetserver"
)

// I've included two frontend directories;
//
// frontend.demo - the sveltekit demo
//    o - With a static adapter, server side rendering is
//  disabled and the app is served as a static site.
//  This breaks the wordle clone in the demo, as the
//  javascript is not executed on any server.
//
//    Note: Havent tinkered with getting it to work,
//  which I suspect is really just a matter of passing
//  the work off to golang instead.
//
// frontend.skeleton - an empty app frontend
//    o - This results in a pretty straightforward addition
//  of many useful features of sveltekit such as routing,
//  to wails svelte. It 
//
// Both are configured not to do server side rendering; they
// build the site into the frontend/build directory which is
// embedded into the application during 'wails build'.
//
// 'wails dev' should properly launch vite to serve the site
// for live development without needing to seperately launch
// 'npm run dev' or your flavor such as pnpm in the frontend
// directory seperately.

// The comment below chooses what gets packaged with
// the application.

//go:embed all:frontend/build
var assets embed.FS

func main() {
	// Create an instance of the app structure
	app := NewApp()

	// Create application with options
	err := wails.Run(&options.App{
		Title:  "wails-sveltekit",
		Width:  1024,
		Height: 768,
		AssetServer: &assetserver.Options{
			Assets: assets,
		},
		BackgroundColour: &options.RGBA{R: 27, G: 38, B: 54, A: 1},
		OnStartup:        app.startup,
		Bind: []interface{}{
			app,
		},
	})

	if err != nil {
		println("Error:", err.Error())
	}
}
