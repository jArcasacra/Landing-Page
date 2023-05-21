import './App.css'
import Analytics from './components/Analytics'
import Company from './components/Company'
import Footer from './components/Footer'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import Newsletter from './components/Newsletter'
import Subcriptions from './components/Subcriptions'


function App() {

  return (
    <div className="">
      <NavBar />
      <Hero />
      {/*<Company/> */ }
      <Analytics />
      <Newsletter />
      <Subcriptions />
      <Footer />
    </div>
  )
}

export default App
