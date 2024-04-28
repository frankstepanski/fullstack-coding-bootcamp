import React from 'react'
import PublicLayout from './components/layouts/PublicLayout'
import Home from './components/pages/Home'

import './App.css'

/*
   
   Layout with Children Props

   The 'children' prop allows you to pass components or content as children to a parent component. 
   It's a powerful and flexible way to create layouts and composite components, allowing you to 
   nest components within each other easily.

     - a composite component is a component built from smaller resuable components
     - component composition is the process of building components by combining
       or nesting smaller, simpier components within one another

   This example app uses this practice for a common pattern of building a layout component that houses
   smaller components for your UI layout features such as the header, navigation, footer 
   and a placeholder for the content of the site that will change with each 'view'.

*/

function App() {
 
  return (
    <>
        <PublicLayout>
            <Home />
        </PublicLayout>
    </>
  )
}

export default App
