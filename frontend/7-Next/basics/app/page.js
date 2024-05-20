import Link from "next/link";
import styles from "./page.module.css";

/*
   The Home component (called Page in previous versions), is the first component that Next.js will render 
   when visiting the root URL.

   File based routing in Next.js Version 14 is a feature that allows you to create a new page by
   creating a new file app/pages/<page-name>.js. 

    - Folders are used to define routes
    - Files are used to define pages (UI)
    
   In Version 12 and earlier, file-based routing was create in pages/<page-name>.js and Version 13
   allowed both directories to be used.

   Pages

     - Page is a UI unique to a route (i.e. the leaf of the route subtree)
     - A page.js is required to make a route publicly accessible
     - Pages can fetch data
     - Pages render server components by default but can render client components as well
     - Each page.js will be inside a folder with the same name as the route

    Linking and Navigation

     -  Can navigate between pages using the Link component
     -  The Link component is a React component that extends the <a> tag
     -  Link component can prefetch pages for faster navigation
        -  Rendered results of prefetching are added to router's client-side cache
        -  Prefetching is disabled by default (enabled only in production)

    Layout

      -  Layout is a component that wraps the page component
      -  Layout is UI shared between multiple pages
      -  On navigation, layouts preserve state, and remain interactive and do not re-render
      -  The component should accept children as a prop and render them
      -  app/layout.js is the root and required layout for all pages
      -  Sub layouts can be created for specific pages
*/


export default function Page() {
  return (
    <main>
        <h2>
             Welcome to the Movie Reviewer Database
        </h2>
        <Link href="/home">Home</Link>
    </main>
  );
}