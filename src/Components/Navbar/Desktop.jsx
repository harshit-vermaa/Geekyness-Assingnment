import React from 'react'
import Style from './Desktop.module.css'
import { NavLink } from 'react-router-dom'

const Desktop = () => {
  return (
    <div className={Style.navbar}>
    <p>Geekyness</p>
    <div className={Style.navbarMenu}>
        <NavLink to='/about-us'>about us</NavLink>
        <NavLink to='/contact-us'>contact us</NavLink>
    </div>
    <div className={Style.navbarSearch}>
    <input type="text" placeholder='product search' />
    </div>
    <div className={Style.navbarIcon}>
        <div className={Style.navbarIcon_icons} ></div>
        <div className={Style.navbarIcon_icons} ></div>
        <div className={Style.navbarIcon_icons} ></div>
    </div>
    </div>
  )
}

export default Desktop