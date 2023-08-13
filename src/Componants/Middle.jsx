import React from 'react'
import './Button.css'
export default function Middle() {
  return (
    <div className='middle'>
    <div className='d-flex'>
      <div className='block '>
        <img class ="side-img3" src="https://i.pinimg.com/originals/20/80/7e/20807e2199a0ac40963eab666b261e44.png" alt="Company logo"/>
        <div className='become'>Become a real estate tycoon.</div>
        <div className='join'>Join a group of like-minded people that believe the real estate market should not be available only to the weathiest of us.</div>
        <button type="button" class="btn btn-outline btn1"><b>Start now</b></button>
      </div>
      {/* <button type="button" class="btn btn-outline-success">Success</button> */}
      
      <div className='century'>
      <img className='side-img3' src="https://i.pinimg.com/originals/20/80/7e/20807e2199a0ac40963eab666b261e44.png" alt="Company logo"/>
      <div className='become1'>Rent like it's the twenty first century.</div>
        <div className='join1'>Explore properties, meet owners, save on brokers, stay updated, automate payment and many more tenant-focused features.</div>
        <button type="button" class="btn btn-outline btn2 ">Learn More</button>
      </div>

      
    </div>
    <div className='d-flex'>
      <div className='block3 '>
        <img class ="side-img3" src="https://i.pinimg.com/originals/20/80/7e/20807e2199a0ac40963eab666b261e44.png" alt="Company logo"/>
        <div className='become3'>Build with a set of dedicated tools.</div>
        <div className='join3'>Interested in developing your real estate project with the power of our community?</div>
        {/* <button type="button" class="btn btn-outline "><b>Start now</b></button> */}
      </div>
      {/* <button type="button" class="btn btn-outline-success">Success</button> */}
      
      <div className='block4'>
      <img className='side-img3' src="https://i.pinimg.com/originals/20/80/7e/20807e2199a0ac40963eab666b261e44.png" alt="Company logo"/>
      <div className='become4'>Join our growing team.</div>
        <div className='join4'>Passionate about blockchain and its real estate applications? Join us in the revolution.</div>
        <button type="button" class="btn btn-outline  btn4">Apply now</button>
      </div>

      
    </div>
    <div className='empty'></div>
    
    </div>
  )
}
