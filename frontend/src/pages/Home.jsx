import React from 'react'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import Categoty from '../components/Categoty'
import SliderProducts from '../components/SliderProducts'
import FeatureProducts from '../components/FeatureProducts'
import ProductsBanner from '../components/ProductsBanner'
import NewArrivals from '../components/NewArrivals'
import ProductsBannerTwo from '../components/ProductsBannerTwo'
import Brand from '../components/Brand'
import Content from '../components/Content'
import DropdownMenu from '../components/DropdownMenu'

function Home() {
    return (
        <div>
            <DropdownMenu />
            <Carousel />
            <Categoty />
            <SliderProducts />
            <FeatureProducts />
            <ProductsBanner />
            <NewArrivals />
            <ProductsBannerTwo />
            <Brand />
            <Content />
        </div>
    )
}

export default Home