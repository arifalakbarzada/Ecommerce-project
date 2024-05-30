import React from 'react'
import Navbar from './navbar'
import SideBar from './sidebar'
import { Outlet } from 'react-router'
import Footer from './footer'

function AdminLayout() {
    return (
        <>
            <Navbar />
            <SideBar />
            <Outlet />
            <Footer />
        </>
    )
}

export default AdminLayout