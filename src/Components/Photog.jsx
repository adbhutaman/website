import React from 'react'

import Img5 from '../Images/Hotpot (5).png'
import Img6 from '../Images/Hotpot (6).png'
import Img7 from '../Images/Hotpot (7).png'
import Img8 from '../Images/plgground.png'
import Img9 from '../Images/smtlab.png'
const Photog = () => {
  return (
    <>
     <section className='prg1'>
   <div className="container">
  <div className="box">
    <img src={Img5} alt='SCHOOL'/>
    <span>PLAY SCHOOL</span>
  </div>
  <div className="box">
    <img src={Img7} alt='PLAYGROUND'/>
    <span>NURSERY</span>
  </div>
  <div className="box">
    <img src={Img8} alt='CLASSROOM'/>
    <span>JUNIOR KG</span>
  </div>
  <div className="box">
    <img src={Img6} alt='LAB'/>
    <span>SENIOR KG</span>
  </div>
  <div className="box">
    <img src={Img9} alt='SMART LAB'/>
    <span>CLASS 1</span>
  </div>
</div>
   </section>
    </>
  )
}

export default Photog