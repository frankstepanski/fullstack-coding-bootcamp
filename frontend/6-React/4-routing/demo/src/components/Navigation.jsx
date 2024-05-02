import React from 'react';
import { Link } from "react-router-dom";

const Navigation = () => {

  const navLinks = [
      { to: '/', text: 'Home' },
      { to: '/about', text: 'About' },
      { to: '/team', text: 'Team' },
      { to: '/products', text: 'Products' },
      { to: '/contact-us', text: 'Contact' },

  ]

    return (

        <nav>
          <ul>
            {
              navLinks.map((link,index) => {
                return (
                        <li key = {index}>
                          <Link to={link.to}>{link.text}</Link>
                        </li>
                );
              })
           }
        </ul>
        </nav>
    );
}

export default Navigation;