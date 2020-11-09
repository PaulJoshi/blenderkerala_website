import React from 'react'
import About from '../components/About/about'
import Menu from "../components/Menu/menu"
import SEO from "../components/seo"

const about = () => (
    <div className='container'>
        <SEO title="About" />
        <h1 hidden={true}>Blender Kerala About</h1>
        <Menu/>
        <About/>
    </div>
);

export default about;