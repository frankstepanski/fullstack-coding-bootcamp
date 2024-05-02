import React from 'react';

const Header = ({children}) => {

  return (
        <header>
            <h2>Logo</h2>
            { children }
        </header>

  )

}

export default Header;