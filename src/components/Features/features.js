import React from "react"
import "./features.css"

const Features = ({ children }) => (
  <div className='home' style={{width: "70%", height: "100vh"}}>
    {children}
  </div>
)

export default Features;