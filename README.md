# CMS Backend for Blog Rendering

This is a server less project which renderes blogs using [contentstack](https://www.contentstack.com/) cms.Project implemented using next ssr.

## Feature

1. Data of all the component is fetched from cms backend.
2. Home page shows List of all blogs.
3. On clicking Read me Details of blogs is rendered.

## Downloading and Running on Localhost

1.

```
Git clone https://github.com/AdityaRawEngg/blog-cms-next.git
```

2.

```
cd blog-cms-next
```

3.

```
npm install
```

4. open next.conifg.env and add

```
    env: {
      API-KEY:"Your API_KEY",
      DELIVERY_TOKEN:"Your DELIVERY_TOKEN",
      ENVIRONMENT:"YOUR ENVIRONMENT",
    },

```

in return object

5. Added API_KEY, DELIVERY_TOKEN and ENVIRONMENT of your stack in next.config.env file.

6. To run project on development mode

```
npm run dev
```

To start project first create build

```
npm run build
```

then

```
npm run start
```

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Live Link

[Live Link](https://blog-cms-next.vercel.app/)
