# Starter template svelte simple blog with caisy
Deploy this template to Vercel
<br>
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fcaisy-io%2Fstarter-template-svelte-simple-blog&env=CAISY_PROJECT_ID,CAISY_API_KEY&project-name=caisy-template-svelte-simple-blog&repository-name=caisy-template-svelte-simple-blog&demo-title=Simple%20blog%20with%20svelte%20and%20caisy&demo-url=https%3A%2F%2Fcaisy-svelte-simple-blog.vercel.app)

### Features

- ✅ 100/100 Lighthouse performance
- ✅ SEO-friendly with canonical URLs and OpenGraph data
- ✅ Dynamic content updates from caisy without redeployment
- ✅ Sitemap support

## Requirements

In order to have the right blueprints configured, make sure to follow the onboarind on [caisy.io](https://caisy.io/) and select the starter template _"svelte Simple Blog"_
To run this project a `.env` file like this (with your own projects values) is required:

```bash
 CAISY_PROJECT_ID=XXXXXX
 CAISY_API_KEY=************
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
- codegen to genereate typescript types and the sdk form the queries


#### Codegen

During development we generate code using

- @graphql-codegen/cli and plugins

### 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command             | Action                                                   |
| :------------------ | :------------------------------------------------------- |
| `npm install`       | Installs dependencies                                    |
| `npm run dev`       | Starts local dev server at `http://127.0.0.1:3000/`      |
| `npm run gen`       | Regenerates generated types and SDK                      |
| `npm run gen:watch` | Wachting changes and regenerates generated types and SDK |
| `npm run build`     | Build your production site to `.svelte-kit`              |

## 👀 Want to learn more?

Feel free to check [the caisy documentation](https://caisy.io/developer/docs)
Feel free to check [the sveltekit documentation](https://kit.svelte.dev/)
Feel free to check [the svelte documentation](https://svelte.dev/docs)

## Developing

Once you've created a project and installed dependencies with `npm install` start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```
## Building
To create a production build:

```bash
npm run build
```
You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment. Right now we have the vercel adapter set up. 
