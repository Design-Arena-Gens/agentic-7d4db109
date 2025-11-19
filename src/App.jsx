import { Routes, Route } from 'react-router-dom'
import NavigationBar from './components/NavigationBar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import VirtualFitting from './pages/VirtualFitting.jsx'
import Gallery from './pages/Gallery.jsx'
import Pricing from './pages/Pricing.jsx'
import Contact from './pages/Contact.jsx'

const App = () => {
  return (
    <div className="app-wrapper">
      <NavigationBar />
      <main className="content-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/virtual-fitting" element={<VirtualFitting />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
