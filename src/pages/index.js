import React from "react"
import '../styles/index.css'
import BlenderKeralaLogo from "../assets/blenderkeralalogo.jpg"
import { Link } from "gatsby"

export default function Home() {

  return <div className='container'>
    <header>
      <h1><Link  className='title' to=''>BLENDERKERALA</Link></h1>
      <nav>
        <ul>
          <li><Link className='nav-item' to='/features/'>Recent Features</Link></li>
          <li><Link className='nav-item' to='/request/'>Request Artwork</Link></li>
          <li><Link className='nav-item' to='/about/'>About</Link></li>
        </ul>
      </nav>
    </header>
    <div className='home'>
      <img className='logo-large' src={BlenderKeralaLogo} alt='BlenderKerala logo'/>
      <p>Join our Community!</p>
      <ul>
        <li><img className='social-icon' src='' alt='Instagram'/></li>
        <li><img className='social-icon' src='' alt='WhatsApp'/></li>
        <li><img className='social-icon' src='' alt='Discord'/></li>
      </ul>
      <p>BlenderKerala is a community of Blender Artists based in Kerala, India.</p>
    </div>
  </div>
}
