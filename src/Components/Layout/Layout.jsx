import React from 'react'
import Style from './Layout.module.css'
import Desktop from '../Navbar/Desktop.jsx'
import Mobile from "../Navbar/Mobile"

const Layout = ({ children }) => {
    return (
        <div className={Style.main}>
            <Desktop />
            <Mobile />
            {children}
        </div>
    )
}

export default Layout