import React from "react"
import {Link} from "gatsby"
import menuStyles from "./menu.module.css"

const Menu = () => (
  <div><div className={menuStyles.header}>
    <div className={menuStyles.headertopspace}></div>
    <h1 className={menuStyles.titleblock}><p><Link className={menuStyles.title} to=''>BLENDER</Link></p>
    <p><Link  className={menuStyles.title} to=''>KERALA</Link></p></h1>
    <div className={menuStyles.hl}/>
    <nav>
      <ul className={menuStyles.navlist}>
        <li className={menuStyles.navitem}><Link to='/features/'>Recent Features</Link></li>
        <li className={menuStyles.navitem}><Link to='/request/'>Request Artwork</Link></li>
        <li className={menuStyles.navitem}><Link to='/about/'>About</Link></li>
      </ul>
    </nav>
  </div></div>
)

export default Menu