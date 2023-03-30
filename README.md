# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` start a development server:

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

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

# Starter template svelte simple blog with caisy

## svelte x Caisy

Deploy this template to Vercel
<br>
<br>
![Deploy to Vercel]

### Features

- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Dynamic content updates from caisy without redeployment
- ✅ Sitemap support

## Requirements

In order to have the right blueprints configured, make sure to follow the onboarind on [caisy.io](https://caisy.io/) and select the starter template _"svelte Simple Blog"_
To run this project a `.env` file like this (with your own projects values) is required:

```


 VITE_CAISY_PROJECT_ID= XXXXXX
 VITE_CAISY_API_KEY= ************

```

### To run this project locally

- [ ] `git clone https://github.com/caisy-io/starter-template-svelte-simple-blog.git`
- [ ] create `.env` file with your project id and API key
- [ ] `npm install`
- [ ] `npm run dev`

In order to have the right blueprints configured, make sure to follow the onboarind and select the starter template "svelte Simple Blog"

### We are using

- svelte as server and server side rendering framework
- tailwindcss for styling
- @caisy/rich-text-svelte-renderer to render the caisy richtexts in svelte
- graphql and graphql-request to fetch data from caisy
- codegen to genereate typescript types


#### Codegen

During development we generate code using

- @graphql-codegen/cli and plugins

### 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command             | Action                                                   |
| :------------------ | :------------------------------------------------------- |
| `npm install`       | Installs dependencies                                    |
| `npm run dev`       | Starts local dev server at `http://127.0.0.1:5173/`      |
| `npm run gen`       | Regenerates generated types and SDK                      |
| `npm run gen:watch` | Wachting changes and regenerates generated types and SDK |
| `npm run build`     | Build your production site to `.svelte-kit`              |

## 👀 Want to learn more?

Feel free to check [the caisy documentation](https://caisy.io/developer/docs)
Feel free to check [the astro documentation](https://svelte.dev/docs)
