import React from 'react'
import Request from '../components/Request/request'
import Menu from "../components/Menu/menu"
import SEO from "../components/seo"

const request = () => (
    <div className='container'>
        <SEO title="Request" />
        <Menu/>
        <Request/>
    </div>
);

export default request;