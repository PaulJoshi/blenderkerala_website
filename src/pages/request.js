import React from 'react'
import Request from '../components/Request/request'
import Menu from "../components/Menu/menu"
import SEO from "../components/seo"

const request = () => (
    <div className='container'>
        <SEO title="Request" />
        <h2 hidden={true}>Blender Kerala Request</h2>
        <Menu/>
        <Request/>
    </div>
);

export default request;