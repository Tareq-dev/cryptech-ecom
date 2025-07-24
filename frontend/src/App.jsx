import { Route, Routes } from 'react-router'
import Footer from './components/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import HappyClients from './pages/HappyClients'
import Cart from './pages/Cart'
import NewOffer from './pages/NewOffer'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/happy-clients" element={<HappyClients />} />
        <Route path="/new-offer" element={<NewOffer />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
