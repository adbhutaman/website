import React from 'react'

const Parentscard = () => {
  return (
    <div className="row row-cols-2 row-cols-md-2 g-1">
    <div className="col ">
    <div className="wrap animate pop">
      <div className="overlay">
          <div className="overlay-content animate slide-left delay-2">
              <h1 className="animate slide-left pop delay-4">XYZ KUMAR</h1>
              <p className="animate slide-left pop delay-5" style={{color: '#fff', marginBottom: '2.5rem'}}>India: <em>Uttar Pradesh</em></p>
          </div>
          <div className="image-content animate slide delay-5 " ></div>
          <div className="dots animate">
              <div className="dot animate slide-up delay-6"></div>
              <div className="dot animate slide-up delay-7"></div>
              <div className="dot animate slide-up delay-8"></div>
          </div>
      </div>
      
      <div className="text">
          <p>Thank you… <em>Bull kids</em>.  I wish there was Kangaroo Kids when I was growing up.</p>
          <p>I’m grateful to get the opportunity to send my children to a school like this.</p>
          <p>I missed ICC Ceat Ranking Award Ceremony to be a part of this event.</p>
      </div>
  </div>
  </div>
  <div className="col ">
  <div className="wrap animate pop">
      <div className="overlay">
          <div className="overlay-content animate slide-left delay-2">
              <h1 className="animate slide-left pop delay-4">Virat</h1>
              <p className="animate slide-left pop delay-5" style={{color: '#fff', marginBottom: '2.5rem'}}>India: <em>Delhi</em></p>
          </div>
          <div className="image-content2 animate slide delay-5"></div>
          <div className="dots animate">
              <div className="dot animate slide-up delay-6"></div>
              <div className="dot animate slide-up delay-7"></div>
              <div className="dot animate slide-up delay-8"></div>
          </div>
      </div>
      <div className="text">
          <p>Marvellous activities for the children <em>Bulls kids</em>.I wish the school all the best and hope they continue to do such marvellous activities for the children.</p>
          <p>Actually, if not for the children, I request it for the parents sake, please.</p>
         
      </div>
  </div>
  </div>
    </div>
  )
}

export default Parentscard