
import Carousel from './components/Carousel'
import Categoty from './components/Categoty'
import Navbar from './components/Navbar'
import SubMenus from './components/DropdownMenu'
import SmartEss from './components/SmartEss'
import SliderProducts from './components/SliderProducts'

function App() {

  return (
    <>
      <Navbar />
      <SubMenus />
      <Carousel />
      <Categoty />
      {/* <SmartEss /> */}
      <SliderProducts />
    </>
  )
}

export default App
