import React from 'react'
import Images from '../Images/watson.png'
import { BsInstagram,BsTwitter,BsFacebook} from "react-icons/bs";


const Error = () => {
  return (
    <>
  
    <section className='BKG'>
       
    <div  >
       <img className='img1' src = {Images} alt="404-Image"  />
     <h1 style={{color:'#fafafa7f', textAlign:'left',paddingLeft:'10%',paddingTop:'10%' ,fontSize:'550%', marginBottom:0}}>Oops! Wrong landing</h1>
     <p style={{ color:'#fafafa5f', paddingLeft:'11%' ,fontSize:'150%', fontFamily:'cursive' ,marginTop:'2%'}}>You’re a little lost in cyberspace. Let’s help you find your way.</p> 
      </div>
   
    </section>
    <section className='BKG1'>
    <BsInstagram  />
    <i className="bi bi-instagram" style={{fontSize:'20px', padding: '10px'}}></i>
    <i className="fa fa-instagram" style={{fontSize:'20px', padding: '10px'}}></i>
    <BsFacebook/>
    <i className="fa fa-github" style={{fontSize:'20px', padding: '10px'}}></i>
    <i className="fa fa-pinterest-square" style={{fontSize:'20px', padding: '10px'}}></i>
 
    < BsTwitter/>
    <p style={{color:'#333333',fontFamily:'Euclid Circular,sans-serif',paddingTop:'4px'}}> Copyright © 2023 XYZ School Name. All right reserved</p>
    </section>
    </>
  )
}

export default Error
