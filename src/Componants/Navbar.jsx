import React from 'react'
import './Button.css'
import './logo.jpg'
export default function Navbar() {
  return (
    <div className=''>
      <nav className="navbar fixed-top navbar-expand-lg back navbar-light  ">
  <div className="container-fluid">
    <a className="navbar-brand logo" href="/"><img className='side-img1' src="https://i.pinimg.com/originals/20/80/7e/20807e2199a0ac40963eab666b261e44.png" alt="Company logo"/>Wingspan Echo Tech</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {/* <ul className="navbar-nav me-2 mb-2 mb-lg-0"> */}
      <ul className="navbar-nav me-2 d-flex navbar-right">
      <li className="nav-item">
          <a className="nav-link active " href="/"  >YouTube</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active " aria-current="page" href="/">Discord</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active " href="/">Instagram</a>
        </li>
       
        <li className="nav-item">
          <a className="nav-link active " href="/"  >Twitter</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active " href="/" >Linkedin</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="/"  >We're hiring</a>
        </li>
      </ul>
      
    </div>
  </div>
  {/* <img className='side-img2' src="https://i.pinimg.com/originals/20/80/7e/20807e2199a0ac40963eab666b261e44.png" alt="Company logo"/>  */}
</nav>
{/* <img className='side-img2' src="https://i.pinimg.com/originals/20/80/7e/20807e2199a0ac40963eab666b261e44.png" alt="Company logo"/>  */}
    </div>
  )
}
