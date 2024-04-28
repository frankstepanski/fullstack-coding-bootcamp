import React from 'react';

const Navigation = () => {

  const navLinks = ["About", "Team", "Events", "Contact Us"];

    return (

        <nav>
          <ul>
            {
              navLinks.map((link, index) => {
                return (
                        <li key={index}>
                          <a href="#">{link}</a>
                        </li>
                );
              })
           }
        </ul>
        </nav>
    );
}

export default Navigation;