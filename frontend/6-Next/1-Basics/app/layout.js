import '@/assets/styles/globals.css';

export const metadata = {
  title: 'Todo App',
  description: 'Your first NextJS app!',
};

/*
    The 'root' layout would be considered as the main entry point of the application,
    and would be the first component to be rendered.

    The page component would be considered as the main content of the application,
    which would be passed to the layout component as a child.

    - Requires to return a valid HTML layout which includes a body tag.
    - Does not re-render when the route changes.

    Note: This layout file (you can have many) wraps the entire application.
*/
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
