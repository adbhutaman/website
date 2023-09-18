import React from 'react'

const Contact = () => {
  return (
<>
<section className='contact'>
    <p style={{color:'#fafafa2f', textAlign:'center',paddingLeft:'4%', paddingTop:'4%' ,fontSize:'600%',lineHeight:'105%',fontWeight:'700', marginBottom:0,fontFamily:'Euclid Circular,sans-serif'}}>CONTACT US</p> 
    </section>
  <div className='contact'>
    <div className="col-lg-12 col-md-10">
    <div className="form-body">
  <div className="row">
    <div className="form-holder">
      <div className="form-content">
        <div className="form-items">
          <h3 style={{textAlign:'center', color:'#8b8b8b',fontFamily:'Euclid Circular,sans-serif'}}>Contact Us</h3>
        
          <form className="requires-validation" novalidate>

            <div className="col-md-12">
              <input className="form-control" type="text" name="name" placeholder="Full Name" required/>
              <div className="valid-feedback">Username field is valid!</div>
              <div className="invalid-feedback">Username field cannot be blank!</div>
            </div>

            <div className="col-md-12">
              <input className="form-control" type="email" name="email" placeholder="E-mail Address" required/>
              <div className="valid-feedback">Email field is valid!</div>
              <div className="invalid-feedback">Email field cannot be blank!</div>
            </div>

            <div className="col-md-12">
              <select className="form-select mt-3" required>
                <option selected disabled value="">Enquiry</option>
                <option value="jweb">Job</option>
                <option value="sweb">Enrollment</option>
                <option value="pmanager">Other</option>
              </select>
              <div className="valid-feedback">You selected a position!</div>
              <div className="invalid-feedback">Please select a position!</div>
            </div>

            <div className="col-md-12">
              <input className="form-control" type="password" name="password" placeholder="Password" required/>
              <div className="valid-feedback">Password field is valid!</div>
              <div className="invalid-feedback">Password field cannot be blank!</div>
            </div>

            <div className="col-md-12 mt-3">
              <label className="mb-3 mr-1" for="gender">Gender: </label>

              <input type="radio" className="btn-check" name="gender" id="male" autocomplete="off" required/>
              <label className="btn btn-sm btn-outline-secondary" for="male">Male</label>

              <input type="radio" className="btn-check" name="gender" id="female" autocomplete="off" required/>
              <label className="btn btn-sm btn-outline-secondary" for="female">Female</label>

              <input type="radio" className="btn-check" name="gender" id="secret" autocomplete="off" required/>
              <label className="btn btn-sm btn-outline-secondary" for="secret">Secret</label>
              <div className="valid-feedback mv-up">You selected a gender!</div>
              <div className="invalid-feedback mv-up">Please select a gender!</div>
            </div>

            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
              <label className="form-check-label">I confirm that all data are correct</label>
              <div className="invalid-feedback">Please confirm that the entered data are all correct!</div>
            </div>

            <div className="form-button mt-3">
              <button id="submit" type="submit" class="btn btn-primary">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>
    </div>
    </div>
    </>
  )
}

export default Contact