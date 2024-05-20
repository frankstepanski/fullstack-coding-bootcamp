## Next.js 

Next.js is a flexible React framework that gives you building blocks to create fast web
full-stack applications. Next.js buils on React and provides additional features and optimizations. 

You can use React to build your UI and then incrementally adopt Next.js features
to solve common application requirements such as routing, data fetching, etc.

### Some of Features of Next.js

- File-system based routing
- Hybrid rendering: SSR (server-side rendering), SSG (static site generation) and CSR (client-side rendering)
- Image and font optimization
- Automatic bundle-splitting and lazy-loading
- SEO

### Fullstack Framework

Next.js can be used to build ***fullstack*** applications. You can use Next.js to build the frontend 
and backend of your application. Next.js provides an API route feature that allows you to create API endpoints
within your Next.js application. This eliminates the need for a separate backend server 
(eg. Node + Express, Python + Flask, etc).

***Note:*** There is no requirement that you have to use Next.js for the backend. You can use any backend technology
but Next.js provides a convenient way to build fullstack applications.

### Server-side Rendering (SSR)

The default behavior of Next.js is to render pages on the server-side. This means that when a user requests a page,
the server will render the page and send the HTML to the client. This is useful for SEO and performance.

### Static Site Generation (SSG)

Next.js can also generate static pages at build time. This is useful for pages that do not change often. 
When a user requests a page, the server will send the pre-generated HTML to the client. This is useful for performance.

### Client-side Rendering (CSR)

Next.js can also render pages on the client-side. This is useful for pages that change often or require user interaction.
When a user requests a page, the server will send a minimal HTML page to the client. The client will then fetch the data

### Setup

To create a new Next.js project, you can use the following command:

```bash
npx create-next-app my-next-app
```

### Pages


