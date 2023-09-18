import React from 'react'
import { BsInstagram,BsTwitter,BsFacebook} from "react-icons/bs";

const footer = () => {
  return (
    <footer id="footer">
    <BsInstagram  />
    <i className="bi bi-instagram" style={{fontSize:'20px', padding: '10px'}}></i>
    <i className="fa fa-instagram" style={{fontSize:'20px', padding: '10px'}}></i>
    <BsFacebook/>
    <i className="fa fa-github" style={{fontSize:'20px', padding: '10px'}}></i>
    <i className="fa fa-pinterest-square" style={{fontSize:'20px', padding: '10px'}}></i>
 
    < BsTwitter/>
    <p style={{color:'#333333',fontFamily:'Euclid Circular,sans-serif',paddingTop:'4px'}}> Copyright © 2023 Bull Kids International Preschool. All right reserved</p>
   

  </footer>
  )
}

export default footer