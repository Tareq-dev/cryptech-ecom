import React from 'react'
import { GiWatch } from "react-icons/gi";
function Categoty() {
    return (
        <div className='py-'>
            <div className='p-16'>
                <h1 className='text-3xl font-semibold text-center'>FEATURED CATEGORIES
                </h1>
                <p className='text-xl text-center mt-4'>
                    Get your desired product from featured category
                </p>
            </div>
            <div>
                <div className='px-14 flex justify-center'>
                    <div className='bg-gray-100 hover:bg-[#642771] transition delay-200 hover:text-white  rounded-2xl  m-4 px-8 py-6'>
                        <GiWatch className=' w-[70px] h-[70px] hover:text-white ' />
                        <p className='text-center text-2xl mt-2 font-semibold'>Watch</p>
                    </div>
                    <div className='bg-gray-100 hover:bg-[#642771] transition delay-200 hover:text-white  rounded-2xl  m-4 px-8 py-6'>
                        <GiWatch className='w-[70px] h-[70px] ' />
                        <p className='text-center text-2xl mt-2 font-semibold'>Watch</p>
                    </div>
                    <div className='bg-gray-100 hover:bg-[#642771] transition delay-200 hover:text-white  rounded-2xl  m-4 px-8 py-6'>
                        <GiWatch className='w-[70px] h-[70px] ' />
                        <p className='text-center text-2xl mt-2 font-semibold'>Watch</p>
                    </div>
                    <div className='bg-gray-100 hover:bg-[#642771] transition delay-200 hover:text-white  rounded-2xl  m-4 px-8 py-6'>
                        <GiWatch className='w-[70px] h-[70px] ' />
                        <p className='text-center text-2xl mt-2 font-semibold'>Watch</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categoty