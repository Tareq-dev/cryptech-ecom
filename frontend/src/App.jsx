
import Carousel from './components/Carousel'
import Categoty from './components/Categoty'
import Navbar from './components/Navbar'
import SubMenus from './components/DropdownMenu'
import SliderProducts from './components/SliderProducts'
import NewArrivals from './components/NewArrivals'
import ProductsBanner from './components/ProductsBanner'
import FeatureProducts from './components/FeatureProducts'
import ProductsBannerTwo from './components/ProductsBannerTwo'
import Brand from './components/Brand'
import Content from './components/Content'
import Footer from './components/Footer'

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
      <ProductsBannerTwo />
      <Brand />
      <Content />
      <Footer />
    </>
  )
}

export default App
