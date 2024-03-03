import React from 'react'
import NavigationBar from './components/NavigationBar'
import ProductSection from './components/ProductSection'
import ContactSection from './components/ContactSection'


function App() {

  return (
    <>

      <NavigationBar companyName="Abdullah shah family" />
      <ProductSection sectionTitle="silks" />
      <ProductSection sectionTitle="cotton" />
      <ContactSection />



    </>
  )

}

export default App