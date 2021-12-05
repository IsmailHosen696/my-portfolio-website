import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer/Footer'
import Navbar from '../../components/Navbar'

export default function Root() {
    return (
        <React.Fragment>
            <div className="relative w-full dark:bg-gray-900 text-gray-900 dark:text-gray-200 min-h-screen">
                <Navbar />
                <Outlet />
                <Footer />
            </div>
        </React.Fragment>
    )
}
