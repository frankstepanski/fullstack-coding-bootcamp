## Next.js 

Next.js is a flexible React framework that gives you building blocks to create fast web
full-stack applications. Next.js buils on React and provides additional features and optimizations. 

You can use React to build your UI and then incrementally adopt Next.js features
to solve common application requirements such as routing, data fetching, etc.

### Features of Next.js

- File-system based routing
- Hybrid rendering: SSR (server-side rendering), SSG (static site generation) and CSR (client-side rendering)
- Image and font optimization
- Automatic bundle-splitting and lazy-loading
- SEO

#### Fullstack Framework

Next.js can be used to build ***fullstack*** applications. You can use Next.js to build the frontend 
and backend of your application. Next.js provides an API route feature that allows you to create API endpoints
within your Next.js application. This eliminates the need for a separate backend server 
(eg. Node + Express, Python + Flask, etc).

***Note:*** There is no requirement that you have to use Next.js for the backend. You can use any backend technology
but Next.js provides a convenient way to build fullstack applications.

#### Server-side Rendering (SSR)

The default behavior of Next.js is to render pages on the server-side. This means that when a user requests a page,
the server will render the page and send the HTML to the client. This is useful for SEO and performance.

#### Server Components

They allow you to render components on the server and reduce the amount of JavaScript sent to the client.

You can interweave server components with client components. React will seemlessly manage the rendering of both.

All components inside the /app directory are Server Components by default.

![server vs client compoments](images/client-vs-server-component.png)

#### Client-side Rendering (CSR)

Next.js can also render pages on the client-side. This is useful for pages that change often or require user interaction.
When a user requests a page, the server will send a minimal HTML page to the client. The client will then fetch the data

To create a client component you use the 'use client' directive at the top of the file.

### Data Fetching

Data fetching can be done in Next.js on a page-by-page basis.

You can choose the data fetching strategy that best fits the specific page requirements.

#### Static Data Fetching (aka Static Site Generation SSG) is the default behavior in Next.js. 

  - Data is fetched at build time once and then cached. The cached data is re-used on each additional request.
  - This is useful for pages that do not change often.

#### Static Data Fetching with Revalidation or (aka Incremental Static Regeneration ISR)

  - Data is fetched at build time and then cached. The cached data is re-used on each additional request.
  - Cached data is re-used on each request until it reaches a specificed interval of time.
  - After the specified time interval, Next.js revalidates the data, and invalidates the previous cache.
  - This method is useful for pages that change often but do not require real-time data.

#### Dynamic Data Fetching (aka Server-side Rendering SSR)

  - Data is fetched on each request.
  - This method is useful for pages that require real-time data (eg. shopping cart, user dashboard, etc).
  - There is no caching of data. Performance can be slower than SSG or ISR.

### Fetching Data on the Server with fetch

Data fetching in Next.js uses the Fetch API in the /app folder.

The Fetch API works on top of the native fetch() Web API, which makes use of the async/await functions and
returns a promise. It allows caching and revalidation options within the fetch request itself. 

#### Static Data Fetching or Static Site Generation (SSG)

By default, the fetch call is set to static data fetching from the cache.

```javascript
async function fetchData() {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts`,
    );
    const data = await res.json();
    return data;
}
```

#### Static Data Fetching with Revalidation or Incremental Static Regeneration (ISR)

You use the [next.revalidate option](https://nextjs.org/docs/app/building-your-application/data-fetching/fetching-caching-and-revalidating#time-based-revalidation) 
of fetch to set the cache lifetime of a resource (in seconds).

```javascript
async function fetchData() {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts`,
        {
            next: { revalidate: 3600 }
        }
    );
    const data = await res.json();
    return data;
}
```

#### Dynamic Data Fetching or Server-side Rendering (SSR)

This request should be re-fetched on every request.

```javascript
async function fetchData() {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/posts`,
        {
            cache: 'no-store'
        }
    );
    const data = await res.json();
    return data;
}
```




### Setup

To create a new Next.js project, you can use the following command:

```bash
npx create-next-app my-next-app
```

### Pages


