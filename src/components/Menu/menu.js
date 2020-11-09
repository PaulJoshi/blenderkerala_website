import React from "react"
import {Link} from "gatsby"
import menuStyles from "./menu.module.css"

const Menu = () => (
  <div>
  <nav className={menuStyles.header}>
    <h1 className={menuStyles.titleblock}><h1><Link className={menuStyles.title} to='/'>BLENDER</Link></h1>
    <h1><Link className={menuStyles.title} to='/'>KERALA</Link></h1></h1>
    <div className={menuStyles.divider}/>
    <ul className={menuStyles.navlist}>
      <li className={menuStyles.navitem}><Link to='/features/'>Featured</Link></li>
      <li className={menuStyles.navitem}><Link to='/request/'>Request Artwork</Link></li>
      <li className={menuStyles.navitem}><Link to='/about/'>About</Link></li>
    </ul>
  </nav>
  </div>
)

export default Menu