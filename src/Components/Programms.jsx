import React from 'react'
import Img1 from '../Images/Preschool-02.png'
import Photog from './Photog'

const Programms = () => {
  return (
    <>
    <section className='Programms'>
    <p style={{color:'#fafafa2f', textAlign:"left",paddingLeft:'4%', paddingTop:'4%' ,fontSize:'600%',lineHeight:'105%',fontWeight:'700', marginBottom:0,fontFamily:'Euclid Circular,sans-serif'}}>PROGRAMMS</p> 
    </section>
    <section className='prg0'>
    <div className="row">
    <div className="col-lg-6 col-md-4">
    
      <h1 style={{fontFamily:'Euclid Circular,sans-serif',fontSize:'20px' , textAlign:'justify',padding:'70px 20px 20px 60px',   color:'#8b8b8b'}}>
We use multiple materials, media and mediums which include resources that have been curated and specially created to develop age-appropriate skill set in our children. The programmes are designed to set up new learning experiences that are self-motivating and self-driven to give our children a head start by helping them prepare for their first five years!</h1>
    
    </div>

    <div className="col-lg-6 col-md-4">
      <img className="title-image1" src={Img1} alt="iphone-mockup"/>
    </div>
</div>
  </section>
  <Photog />
</>
  )
}

export default Programms