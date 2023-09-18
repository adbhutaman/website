import React from 'react'
import Footer from './footer'
import Img1 from '../Images/principal.png'
const About = () => {
  return (
    <>
    <section className='ABOUT'>
    <p style={{color:'#fafafa2f', textAlign:"left",paddingLeft:'4%', paddingTop:'4%' ,fontSize:'600%',lineHeight:'105%',fontWeight:'700', marginBottom:0,fontFamily:'Euclid Circular,sans-serif'}}>ABOUT US</p>
    </section>
    <section className='about1'>
    <div className="row">
    <div className="col-lg-6 col-md-4">
    
      <h1 style={{fontFamily:'Euclid Circular,sans-serif',fontSize:'20px' , textAlign:'justify',padding:'70px 20px 20px 60px',   color:'#8b8b8b'}}>At Bull Kids International Preschool, we work for the integral development of every child enrolled here. We make every effort to develop in every child the fear of God, Commitment to the Nation, Wise use of information, Selfless service, Dedication to words duty and thirst for excellence and Wisdom.

While academic progress is clearly the main purpose of the school, we also encourage all our pupils to develop a wide range of additional interests, so that we provide a very rounded and complete education. Most importantly, this takes place in a friendly and caring environment, and the small sizes of our classes and activity groups mean that every student’s aptitudes are readily identified and developed.</h1>
    
    </div>

    <div className="col-lg-6 col-md-4">
      <img className="title-image" src={Img1} alt="iphone-mockup"/>
      <h1 style={{ fontFamily:'Euclid Circular,sans-serif',fontSize:'20px' , textAlign:'center',   color:'#8b8b8b'}}>Principal</h1>
    </div>
</div>
  </section>
    </>
  )
}

export default About
