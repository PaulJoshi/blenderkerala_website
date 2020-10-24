import React from "react"
import "./about.css"

const About = ({ children }) => (
  <div className='home' style={{height: "100vh"}}>
    <div className='text-area'>
      <h2 className='text'>ABOUT US</h2>
      <p className='text'>We are an ardent community of Blender Artists based in Kerala, India.</p>
      <p className='text'>Our mission is to build a platform for collaboration, learning and sharing on all things Blender and to encourage the use of Blender among the people of Kerala.</p>
    </div>
    {children}
  </div>
)

export default About