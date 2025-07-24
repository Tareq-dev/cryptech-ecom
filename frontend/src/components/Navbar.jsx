import React from 'react'
import { IoSearch } from "react-icons/io5";
import logo from "../assets/logo.png"
import { GrCart } from "react-icons/gr";
import { Link } from 'react-router';

function Navbar() {
    return (
        <div className="navbar bg-[#642771] h-21 text-white shadow-sm md:px-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li><a>Item 1</a></li>
                        <li>
                            <a>Parent</a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <Link to="/" className=" mr-8 text-xl"> 
                    <img className='w-40' src={logo} alt="" srcset="" />
                </Link>
                <form className="flex flex-col sm:flex-row w-[400px] items-center ml-4">
                    <input
                        type="email"
                        placeholder="Search here ..."
                        className="w-full sm:w-auto flex-1 px-3 py-1 rounded-l-md  bg-white text-black focus:outline-none"
                    />
                    <button
                        type="submit"
                        className="bg-white cursor-pointer text-black px-4 py-2 transition hover:delay-300  rounded-r-md hover:bg-[#642771] hover:text-white   hover:border-[#642771]"
                    >
                        <IoSearch />
                    </button>
                </form>
            </div>

            <div className="navbar-end">
                <ul className="menu menu-horizontal text-[16px] px-6">
                    <li><Link to='/new-offer'>New Offer</Link></li>
                    <li><Link to='happy-clients'>Happy Client</Link></li>
                    <li><Link to='/cart'><GrCart className='text-md' />Cart</Link></li>
                    <li><Link to='/contact' className="">Contact Us</Link></li>
                </ul>

            </div>
        </div>
    )
}

export default Navbar