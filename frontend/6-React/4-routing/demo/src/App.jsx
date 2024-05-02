import React from 'react';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Products from './components/pages/Products';
import Team from './components/pages/Team';
import Contact from './components/pages/Contact';
import PublicLayout from './components/layouts/PublicLayout';
import { Routes, Route } from "react-router-dom";
import './App.css';

/*

     Routing:

     - Backend routing - (traditional - MPA) new request for each page
     - Frontend routing - handled by browser with minimal requests (SPA)
     - routing - keeping the browser URL in sync with the UI of page

     As the visitor navigates around the site, they expect the URL to change along with the content on the page.

     Frontend Routing has benefits of:

     - It allows visitors to bookmark pages 
     - It allows visitors to move forward and backward in their browsing history.
     - Routing between views is generally faster than backend routing.
     - Breaking up your code by pages helps promote modularity.

     The React Router library was created specifically to allow for routing in React applications (SPAs). It wraps around the browser history API and provides declarative syntax to keep your React application UI in sync with the browser's URL.

     The library intercepts requests for a new 'page' and swaps out the content with a
     new compoent(s).

     React Router components:

       - <BrowserRouter>: defines the scope of routing within the app; wraps everything within the app.

       - <Routes>: Renders one of its child <Route> components. It will render only the first
                   <Route> component that has a match. It checks the path of its child <Route>
                   components in order. You can also nest routes.

       - <Route>: Renders some UI when its path matches the current URL from <Link>

       - <Link>:  Renders an anchor tag to match the route path.

       Note: <Switch> is deprecated as of version 6 and replaced with <Routes>

       Link => Route => Component

*/

function App() {

  return (
    <>
      <PublicLayout>
        <Routes>
          {/* index prop is the same pas path="/" */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="team" element={<Team />} />
          <Route path="products" element={<Products />} />
          <Route path="contact-us" element={<Contact />} />
        </Routes>
      </PublicLayout>
    </>
  );
}

export default App;