import React from "react"
import "./features.css"

const Features = ({ children }) => (
  <div className='home' style={{height: "100vh"}}>
    {children}
    <section className="instagram-area">
      Coming Soon!
    </section>
  </div>
)

export default Features;