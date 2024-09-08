import React from 'react'
import { FaSearch } from "react-icons/fa";

const Header = () => {
    return (
        <>
            <nav className='main-navbar position-sticky top-0 navbar navbar-expand container-fluid shadow-sm'>
                <div className='container d-flex gap-5 align-items-center'>
                    {/* logo */}
                    <div className='main-logo-container'>
                        <h1 className='navbar-brand navbar-logo'>ECom-Express</h1>
                    </div>
                    {/* search bar */}
                    <div className='navbar-search d-flex '>
                        <button className='opacity-50'><FaSearch /></button>
                        <input className='input-search-navbar w-100' type="search" placeholder='Search for Products/Brands/More' required/>
                    </div>
                    {/* user action */}
                    <div>
                        user actions
                    </div>
                    {/* cart */}
                    {/* sub menu */}   
                </div>
            </nav>
        </>
    )
}

export default Header
