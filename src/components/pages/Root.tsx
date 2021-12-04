import React from 'react'
import { Outlet } from 'react-router-dom'
import { Footer, Navbar } from '../utilities'

export default function Root() {
    return (
        <React.Fragment>
            <Navbar />
            <Outlet />
            <Footer />
        </React.Fragment>
    )
}
