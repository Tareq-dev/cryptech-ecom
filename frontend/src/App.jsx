import { Route, Routes } from 'react-router'
import Footer from './components/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
