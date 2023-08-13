import React from 'react'
import './Button.css'
import './sparrow.jpg'


export default function Content() {
  return (
    <div>
      {/* <img className='side-img2' src="https://i.pinimg.com/originals/20/80/7e/20807e2199a0ac40963eab666b261e44.png" alt="Company logo"/> */}
      <div className='d-flex content-main'>
      {/* <img className='side-img2' src="https://i.pinimg.com/originals/20/80/7e/20807e2199a0ac40963eab666b261e44.png" alt="Company logo"/> */}
      <div className='heading'>Your
       relationship with real estate.</div>
      {/* <img  className="main-img" src="https://th.bing.com/th/id/R.9de36e269d9b67a541d4a73e031cc7ce?rik=FO5zr7r8p9fhAQ&riu=http%3a%2f%2fcdn.vectorstock.com%2fi%2fthumb-large%2f17%2f33%2f7791733.jpg&ehk=h3OoolIJkggiOvEoI8KFx3Y6Ralig72oW%2bPPc3VwmY0%3d&risl=&pid=ImgRaw&r=0" alt="Company Logo"/> */}
      <img className="main-img" src='https://cdn.vectorstock.com/i/preview-1x/32/81/hummingbird-vector-1283281.jpg' alt="logo"/>
      
      </div>
      <div className='contents'>
      Take control of how you browse, rent, invest, and stay. All powered by blockchain.
      {/* <a className= "anchor " href="/" >Explore</a> */}
      </div>
      <a className= "anchor " href="/" >Explore</a>
    </div>
  )
}
