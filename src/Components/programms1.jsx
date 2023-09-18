import React from 'react';
import Img1 from '../Images/plgground.png'

const programms1 = () => {
  return (
  
  <> 
  <section className='Programms'>
  <p style={{color:'#fafafa2f', textAlign:"left",paddingLeft:'4%', paddingTop:'4%' ,fontSize:'600%',lineHeight:'105%',fontWeight:'700', marginBottom:0,fontFamily:'Euclid Circular,sans-serif'}}>DAY SCHOOL</p> 
  </section>
    <section className='prg0'>
    <div className="row">
    <div className="col-lg-6 col-md-4">
    
      <h1 style={{fontFamily:'Euclid Circular,sans-serif',fontSize:'20px' , textAlign:'justify',padding:'70px 20px 20px 60px',   color:'#8b8b8b'}}>

      With a young child that needs constant attention, stimulative engagement and also informal learning, day care becomes the answer for working parents who want to simultaneously pursue their career during the child raising years. It becomes the bridge between the child's early years at home and preschool.</h1>

      <h1 style={{fontFamily:'Euclid Circular,sans-serif',fontSize:'20px' , textAlign:'justify',padding:'70px 20px 20px 60px',   color:'#8b8b8b'}}>A well established day care at Bull Kids provides a healthy happy environment where children may have the opportunity to explore and develop their own unique individuality while helping to better prepare them for a happier adjustment into kindergarten.</h1>


    
    </div>
   

    <div className="col-lg-6 col-md-4">
      <img className="title-image1" src={Img1} alt="iphone-mockup"/>
    </div>
</div>
    </section>
    </>
  )
}

export default programms1