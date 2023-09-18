import React from 'react'
import Parentscard from './Parentscard'
const Parent = () => {
  return (
    <>
    <section className='parents'>
    <p style={{color:'#fafafa2f', textAlign:"center", paddingTop:'4%',paddingBottom:'3%' ,fontSize:'400%',lineHeight:'105%',fontWeight:'700', marginBottom:0,fontFamily:'Euclid Circular,sans-serif'}}>WHAT PARENT SAYS</p>
    </section>
    <section className='parents1'>
    <Parentscard />
    <Parentscard />
    </section>
    </>
  )
}

export default Parent