import React from 'react'
import Parentscard from './Parentscard'

import Image from '../Images/Hotpot (3).png'
import Image1 from '../Images/Hotpot (1).png'
import Image2 from '../Images/Hotpot (2).png'
import Image3 from '../Images/laptop-coffee-17904.png'
import Image4 from '../Images/Award.png'
import Img5 from '../Images/Cmplab.png'
import Img6 from '../Images/building.png'
import Img7 from '../Images/classroom.png'
import Img8 from '../Images/plgground.png'
import Img9 from '../Images/smtlab.png'
import Img10 from '../Images/Growth.png'
import { NavLink } from 'react-router-dom'
const Homepage = () => {
  return (

    <>
      <section>
      <div id="carouselExampleCaptions" className="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Image} className="d-block w-100" alt="Video"/>
      <div className="carousel-caption color-red d-none d-md-block">
        <h2 style={{color:'#fafafa9f' , fontFamily:'Bold', fontSize:'40px'}}>Build A Strong Foundation For Learning</h2>
        <p style={{color:'#fafafa8f' , fontFamily:'serif', fontSize:'20px'}}>Equip Them With 9 Future Skills & 15 Habits Of Mind.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={Image1} className="d-block w-100 " alt="Image"/>
      <div className="carousel-caption d-none d-md-block">
        <h2 style={{color:'#fafafa19f' , fontFamily:'Bold', fontSize:'40px'}}>First Five Years Count</h2>
        <p style={{color:'#fafafa8f' , fontFamily:'Bold', fontSize:'20px'}}>With India's most Desired Preschool Brand.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src={Image2} className="d-block " alt="Image"/>
      <div className="carousel-caption d-none d-md-block">
        <h2 style={{color:'#fafafa10f' , fontFamily:'Bold', fontSize:'40px'}}>Make Them Thrive</h2>
        <p style={{color:'#fafafa8f' , fontFamily:'Bold', fontSize:'20px'}}>To Harness Their Inner Selves And Be Lifelong Learner.</p>
      </div>
    </div>
    
      
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      </section>
      
      <section id="header" className="d-flex align-items-center">
      
        <div className='row  '>
        <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>
        <p style={{color:'#fafafa2f',backgroundColor:'#000000', textAlign:"center",paddingLeft:'4%',textAlign:'center' ,fontSize:'600%',lineHeight:'105%',fontWeight:'700',  fontFamily:'Euclid Circular,sans-serif'}}>PURPOSE</p>
        <h1 className='my-3 mx-5 mt-10 .justify-content d-flex' >To create a learning environment that accommodates all individual learners providing them with opportunities to maximise their inherent potential. Our ultimate and cherished dream is to capture the latest and most innovative learning and teaching techniques and to introduce them successfully in India and across the world.</h1>
        <div className='mt-3 mx-5'>
        <NavLink to='/about' className="btn-get-started">Know More</NavLink>
        </div>
        </div>
        <div className="col-lg-6 order-1 order-lg-2 header-img">
            <img src={Image3} className="h-auto d-inline-block" style={{width:'60%' ,marginLeft:'16%',paddingTop:'10%'}} alt="Imagelogo" />
        </div>
        </div>
      </section>
 <section id="features">
    <p style={{color:'#fafafa2f', textAlign:'center',paddingLeft:'4%' ,fontSize:'600%',lineHeight:'105%',fontWeight:'700', marginBottom:0,fontFamily:'Euclid Circular,sans-serif'}}>OUR FACILITIES</p>
<div className="row">
  <div className="feature-box col-lg-3">
  <i className="fa fa-flask" aria-hidden="true" style = {{fontSize:'155px'}}></i>
    <h3 style={{fontFamily:'Euclid Circular,sans-serif'}}>Science Lab.</h3>
    
  </div>

  <div className="feature-box col-lg-3">
  <i class="fa fa-bus"  style = {{fontSize:'55px'}}/>
    <h3 style={{fontFamily:'Euclid Circular,sans-serif'}}>Transportation</h3>
    
  </div>

  <div className="feature-box col-lg-3">
  <i class="fa fa-desktop"  style = {{fontSize:'55px'}}/>
    <h3 style={{fontFamily:'Euclid Circular,sans-serif'}}>Computer Lab</h3>
    
  </div>
  <div className="feature-box col-lg-3">
  <i class="fa fa-coffee" style = {{fontSize:'55px' ,color:'#8b8b8b',backgroundColor:"#8b8b8b"}}/>
    <h3 style={{fontFamily:'Euclid Circular,sans-serif'}}>Cafeteria</h3>
    
  </div>
 
</div>
</section>

<section id="features">
    <p style={{color:'#fafafa2f', textAlign:'center',paddingLeft:'4%' ,fontSize:'600%',lineHeight:'105%',fontWeight:'700', marginBottom:0,fontFamily:'Euclid Circular,sans-serif'}}>PRO  GRAMMES</p>
<div  id="card1" className="main">
  
<div className="card">
    <div className="card-inner">

      <div className="card-face card-face-front">
        <h3>Play School</h3>
      </div>

      <div className="card-face card-face-back">
        <div className="card-content">
          <div className="card-header">
            <img src={Image3}  className="card-image" />
            <h2>ProObra</h2>
          </div>
          <div className="card-body">
          <NavLink to='/about' className="btn-get-started">Know More</NavLink>
            
          </div>
        </div>
      </div>

    </div>
  </div>
  <div  className="card">
    <div className="card-inner">

      <div className="card-face card-face-front">
        <h3>Nursery</h3>
      </div>

      <div className="card-face card-face-back">
        <div className="card-content">
          <div className="card-header">
            <img src={Image3}  className="card-image" />
            <h2>ProObra</h2>
          </div>
          <div className="card-body">
          <NavLink to='/about' className="btn-get-started">Know More</NavLink>
            
          </div>
        </div>
      </div>

    </div>
  </div>
  <div className="card">
    <div className="card-inner">

      <div className="card-face card-face-front">
        <h3>Junior KG</h3>
      </div>

      <div className="card-face card-face-back">
        <div className="card-content">
          <div className="card-header">
            <img src={Image3}  className="card-image" />
            <h2>ProObra</h2>
          </div>
          <div className="card-body">
          <NavLink to='/about' className="btn-get-started">Know More</NavLink>
            
          </div>
        </div>
      </div>

    </div>
  </div>
  <div className="card">
    <div className="card-inner">

      <div className="card-face card-face-front">
        <h3>Senior KG</h3>
      </div>

      <div className="card-face card-face-back">
        <div className="card-content">
          <div className="card-header">
            <img src={Image3} className="card-image" />
            <h2>ProObra</h2>
          </div>
          <div className="card-body">
          <NavLink to='/about' className="btn-get-started">Know More</NavLink>
            
          </div>
        </div>
      </div>

    </div>
  </div>
</div>
</section>
<section  id='parent' className='parentcard'>
<p style={{color:'#fafafa2f', textAlign:'center',paddingLeft:'4%' ,fontSize:'600%',lineHeight:'105%',fontWeight:'700', marginBottom:0,fontFamily:'Euclid Circular,sans-serif'}}>PARENTS CORNER</p>
<h3>Our Ambassadors</h3>


  <Parentscard />
  <NavLink to='/about' className="btn-get-started">Know More</NavLink>
 </section>


 <section id="AWARD" className='award'>
 <p style={{color:'#fafafa2f', textAlign:'center',paddingLeft:'4%' ,fontSize:'500%',lineHeight:'105%',fontWeight:'700', marginBottom:0,fontFamily:'Euclid Circular,sans-serif'}}>AWARDS & RECOGNITIONS</p>
 <div className="row row-cols-4 row-cols-md-2 g-1">
 <div className="card" style={{width: '18rem', height:'25rem'}}>
  <img src={Image4} className="card-img-top" alt="AWARD"/>
  <div className="card-body">
    <h3 style={{fontFamily:'Euclid Circular,sans-serif',paddingTop:'15px', color:'#8b8b8b8'}}>India's Most Trusted Education Brand</h3>
  </div>
</div>

<div className="card" style={{width: '18rem',height:'25rem'}}>
  <img src={Image4} class="card-img-top" alt="AWARD"/>
  <div className="card-body">
    <h3 style={{fontFamily:'Euclid Circular,sans-serif',paddingTop:'15px', color:'#8b8b8b8'}}>The 10 Best Preschool To Watch</h3>
  </div>
</div>

<div className="card" style={{width: '18rem',height:'25rem'}}>
  <img src={Image4} class="card-img-top" alt="AWARD"/>
  <div className="card-body">
   <h3 style={{fontFamily:'Euclid Circular,sans-serif',paddingTop:'15px', color:'#8b8b8b8'}}>The Education Icon Award 2023</h3>
  </div>
</div>
 </div>

 </section>

 <section className='role'>
 <p style={{color:'#fafafa2f', textAlign:"left",paddingLeft:'4%' ,fontSize:'500%',lineHeight:'105%',fontWeight:'700', marginBottom:0,fontFamily:'Euclid Circular,sans-serif'}}>Find a role</p>
 <h3 className='role1'> Begin your story here </h3>
 <div className='teacher'>
    <h2 className='xyz'>TEACHER</h2>
 </div>
 <div id='apply'className='apply'>
    <h2>Play School  <NavLink to='/contact' className="btn-get-started">Apply Now</NavLink></h2>
    <h2>Junior KG     <NavLink to='/contact' className="btn-get-started">Coming Soon</NavLink> </h2>
 </div>
 <div className='teacher'>
    <h2 className='xyz1'>TECH</h2>
 </div>
 <div id='apply'className='apply'>
    <h2>Smart Board  <NavLink to='/contact' className="btn-get-started">Apply Now</NavLink></h2>
    <h2>Computer Lab<NavLink to='/contact' className="btn-get-started">Coming Soon</NavLink> </h2>
 </div>
 </section>


 <section className='Imageg'>
 <p style={{color:'#fafafa2f', textAlign:"left",paddingLeft:'4%' ,fontSize:'500%',lineHeight:'105%',fontWeight:'700', marginBottom:0,fontFamily:'Euclid Circular,sans-serif'}}>IMAGE GALLERY</p>
 <h3>Or say funspace</h3>


 <div className="container">
  <div className="box">
    <img src={Img6} alt='SCHOOL'/>
    <span>SCHOOL</span>
  </div>
  <div className="box">
    <img src={Img8} alt='PLAYGROUND'/>
    <span>PLAYGROUND</span>
  </div>
  <div className="box">
    <img src={Img7} alt='CLASSROOM'/>
    <span>CLASSROOM</span>
  </div>
  <div className="box">
    <img src={Img5} alt='LAB'/>
    <span>LAB</span>
  </div>
  <div className="box">
    <img src={Img9} alt='SMART LAB'/>
    <span>SMART LAB</span>
  </div>
</div>
 
 </section>

 <section className='growth'>
 <p style={{color:'#fafafa2f', textAlign:"left",paddingLeft:'4%', paddingTop:'4%' ,fontSize:'600%',lineHeight:'105%',fontWeight:'700', marginBottom:0,fontFamily:'Euclid Circular,sans-serif'}}>JOURNEY</p>
 <h3>Growth Chart</h3>
 <div className='growth1'>
    <img src={Img10} alt="GROWTH"  style={{ width:'100%' , height:'70vh'}}/>
 </div>

 </section>
 
    </>
  )
}

export default Homepage
