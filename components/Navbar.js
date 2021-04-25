import React from 'react'
import { MenuIcon } from '@heroicons/react/solid'

function Navbar() {
    return (
        <div className="nav-bar w-full h-16 fixed bg-white opacity-70 flex justify-between">
            <div className="title flex flex-col justify-center content-center">
                <h1 className="text-xl ml-4">Kincso Yoga</h1>
            </div>
            <div className="flex flex-col justify-center content-center">
                {/* <MenuIcon className="h-10 w-10 mr-4 text-red-800"/> */}
            </div>
        </div>
    )
}

export default Navbar
