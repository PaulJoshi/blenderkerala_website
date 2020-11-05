import React from "react"
import "./about.css"
import Feed from "react-instagram-authless-feed"

const About = () => (
  <div className='home' style={{height: "100vh"}}>
    <section className="heading-area">
      <h2 request-heading>About Us</h2>
      <p request-heading-text>Blender Artists based in Kerala, India</p>
      <hr/>
      <br/><br/>
      <Feed userName="blenderkerala" className="about-feed"/>
      <br/><br/>
      <p request-heading-text>Blender Kerala was founded with a mission to build a platform for collaboration, learning and sharing on all things Blender and to encourage the use of Blender among the people of Kerala.</p>
      <p request-heading-text>Blender is a free and open source 3D creation suite. It supports the entirety of the 3D pipeline—modeling, rigging, animation, simulation, rendering, compositing and motion tracking, video editing and 2D animation pipeline. For more information, visit the <a className="contact-link" href="https://www.blender.org/" target="_blank">official website</a></p>
      <p request-heading-text>The Blender Kerala website was designed and built by <a className="contact-link" href="https://github.com/PaulJoshi" target="_blank">@PaulJoshi</a></p>
      <p request-heading-text>For further queries, mail us <a className="contact-link" href="mailto:blenderkerala@gmail.com" target="_blank">here</a></p>
    </section>
  </div>
)

export default About