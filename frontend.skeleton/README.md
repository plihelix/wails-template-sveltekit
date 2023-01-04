# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), to start just a frontend development server you can run the following in the `/frontend` directory:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

> If you plan to deploy your app as a cloud, served, or hosted product This would divorce the frontend from the backend with server side rendering of html through the [go solution](https://github.com/gohugoio/hugo) for example. This offers some interesting potential in a hybrid sense. Offering very efficient traffic and/or reducing server demand with client apps doing some of their own work.
> You may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
