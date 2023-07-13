import './App.css'
import Company from './components/Company'
import Footer from './components/Footer'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import Contact from './components/Contact'
import Services from './components/Services'
import Principles from './components/Principles'


function App() {

  return (
    <div className="">
      <NavBar />
      <Hero />
      <Company />
      <Principles />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
