import React from 'react'
import Features from '../components/Features/features'
import Menu from "../components/Menu/menu"
import SEO from "../components/seo"

const features = () => (
    <div className='container'>
        <SEO title="Features" />
        <h1 hidden={true}>Blender Kerala Features</h1>
        <Menu/>
        <Features/>
    </div>
);

export default features;