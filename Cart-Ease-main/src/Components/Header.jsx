import React from 'react';
import { Link } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from 'react-redux';
// #1b2430 green and #17cf97 black

function Header() {
    const Cartsquantity = useSelector(state => state.cartRed.products);

    return (
        <div>

            <nav className="bg-white  py-2.5 dark:bg-gray-900 ">
                <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                    <Link to={"/"} className="flex items-center">

                        <span className="self-center text-xl font-semibold whitespace-nowrap text-[#17cf97] ">Cart<span className='text-[#1b2430]'>Ease</span></span>
                    </Link>
                    <div className="flex items-center lg:order-2 gap-x-2">
                        <div className="hidden mt-2 mr-4 sm:inline-block">
                            <span></span>
                        </div>

                        <Link to={"/login"}
                            className="text-[#ffffff] bg-[#1b2430] hover:bg-[#17cf97] focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800">Sign In</Link>
                         <Link to={"/cart"}
                            className="text-[#ffffff] bg-[#1b2430] hover:bg-[#17cf97] focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800 flex justify-center items-center" ><FaCartShopping  size={20}/>{Cartsquantity.length}</Link>
                        <button data-collapse-toggle="mobile-menu-2" type="button"
                            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="mobile-menu-2" aria-expanded="true">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clip-rule="evenodd"></path>
                            </svg>
                            <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <Link to={"/"}
                                    className="block py-2 pl-3 pr-4 hover:text-[#17cf97] duration-500 ease-linear text-[#1b2430] bg-purple-700 rounded lg:bg-transparent lg:p-0 dark:text-white"
                                    aria-current="page">Home</Link>
                            </li>
                            <li>
                                <Link to={"/products"}
                                    className="block py-2 pl-3 pr-4 text-[#1b2430]  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0  hover:text-[#17cf97] duration-500 ease-linear lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Product</Link>
                            </li>
                            <li>
                                <Link to={"/about"}
                                    className="block py-2 pl-3 pr-4 text-[#1b2430]  hover:text-[#17cf97] duration-500 ease-linear border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0  lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">About</Link>
                            </li>
                            <li>
                                <Link to={"/contact"}
                                    className="block py-2 pl-3 pr-4 text-[#1b2430] hover:text-[#17cf97] duration-500 ease-linear  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0  lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact</Link>
                            </li>
                            <li>
                                <Link to={"/Signup"}
                                    className="block py-2 pl-3 pr-4 hover:text-[#17cf97] duration-500 ease-linear text-[#1b2430]  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0  lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Sign Up</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

            <script src="https://unpkg.com/flowbite@1.4.1/dist/flowbite.js"></script>



        </div>
    )
}

export default Header;