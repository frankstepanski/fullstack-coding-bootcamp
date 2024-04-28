import React from 'react';
import Header from '../Header';
import Login from '../Login';
import Footer from '../Footer'
import Navigation from '../Navigation';

const PublicLayout = ({children}) => {

    return (
        <div className="container">
          <Header>
              <Navigation />    
              <Login />
          </Header>
              <main>
                  {children}
              </main>
          <Footer />

        </div>
    );
}

export default PublicLayout;