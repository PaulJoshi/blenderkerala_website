import React from 'react'
import About from '../components/About/about'
import Menu from "../components/Menu/menu"
import SEO from "../components/seo"

const about = () => (
    <div className='container'>
        <SEO title="About" />
        <Menu/>
        <About/>
    </div>
);

export default about;