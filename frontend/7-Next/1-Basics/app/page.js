import Todos from '@/components/Todos';

// server component unless you use the 'use client' directive

/*
    The page component would be considered as the main content of the application,
    which would be passed to the layout component as a child.
    aka Home Page ('/')

    Next.js uses server components by default, which means that the component is rendered 
    on the server and the HTML is sent to the client.

    Server component benefits:

      - Can use Node.js modules directly
      - Can use secrets, environment variables, and sensitive data
      - Data fetching (no useEffect, just use fetch or axios library)
      - Caching
      - Bundle size
      - SEO

    Fetching data:

      Next.js has a fetch function that just wraps the native Web fetch() function
        - https://nextjs.org/docs/app/api-reference/functions/fetch

      Requires less requests to the server, and the data is already available when the page is loaded.

*/

export default function Home() {
  return (
    <main>
      <h1>Todo App</h1>
      <Todos />
    </main>
  );
}