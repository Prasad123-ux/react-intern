import React from 'react'
import './Button.css'

export default function Contact() {
  return (
    <>
    <div className='contact' >
        <div className='d-flex'>
         {/* <img className='side-img2' src="https://i.pinimg.com/originals/20/80/7e/20807e2199a0ac40963eab666b261e44.png" alt="Company logo"/> */}
      <div className='contact1 text-center'>
      Subscribe to our newsletter. ✉️
      
      </div>
      <div><img  className="spinner" src="https://assets.website-files.com/63512879678c8b7ef14c7068/63ca883f6d096629bfc4cc2a_Ellipse%201%20(Stroke).png" alt="logo"/></div>
      </div>
      <div className='text-center be'>Be the first to know the news.</div>
      <div className='d-flex'>
      <div><img className='side-img4' src="https://i.pinimg.com/originals/20/80/7e/20807e2199a0ac40963eab666b261e44.png" alt="Company logo"/> </div>
      <div className='box'>
        <form>
            <label className='email' for="Email">Email Address</label><br></br>
            <input className='input align-center' type='Email'  placeholder="Enter your email"/><br></br>
            <input className='submit' type="submit" value='Submit'/>
            

        </form>
        </div>
      </div>
      </div>

    </>
  )
}
