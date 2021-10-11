import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Intro from './Components/Intro/Intro'
import Product from './Components/Product/Product'
import About from './Components/About/About'
import Email from './Components/Email/Email'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Intro/>
      <Product />
      <About/>
      <Email/>
      <Footer/>
    </div>
  )
}

export default App
