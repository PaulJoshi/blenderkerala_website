import React from 'react'
import Request from '../components/Request/request'
import Menu from "../components/Menu/menu"
import SEO from "../components/seo"

const request = () => (
    <div className='container'>
        <SEO title="Request" />
        <h1 hidden={true}>Blender Kerala Request</h1>
        <Menu/>
        <Request/>
    </div>
);

export default request;