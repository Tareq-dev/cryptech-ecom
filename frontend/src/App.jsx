
import Carousel from './components/Carousel'
import Categoty from './components/Categoty'
import Navbar from './components/Navbar'
import SubMenus from './components/DropdownMenu'
import SliderProducts from './components/SliderProducts'
import NewArrivals from './components/NewArrivals'
import ProductsBanner from './components/ProductsBanner'
import FeatureProducts from './components/FeatureProducts'

function App() {

  return (
    <>
      <Navbar />
      <SubMenus />
      <Carousel />
      <Categoty />
      <SliderProducts />
      <FeatureProducts />
      <ProductsBanner />
      <NewArrivals />

    </>
  )
}

export default App
