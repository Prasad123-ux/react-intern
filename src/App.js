import React from 'react'
import './Componants/Button.css'
 import Middle from './Componants/Middle'
import Contact from './Componants/Contact'
 import Navbar from './Componants/Navbar'
import Content from './Componants/Content'
import Fac from './Componants/Fac'
import Footer from './Componants/Footer'

export default function App() {
  function scrollDetect(){
    var lastScroll = 0;
  
    window.onscroll = function() {
        let currentScroll = document.documentElement.scrollTop || document.body.scrollTop; // Get Current Scroll Value
  
        if (currentScroll > 0 && lastScroll <= currentScroll){
          lastScroll = currentScroll;
          document.getElementById("scrollLoc").innerHTML = "Scrolling DOWN";
        }else{
          lastScroll = currentScroll;
          document.getElementById("scrollLoc").innerHTML = "Scrolling UP";
        }
    };
  }
  
  
  scrollDetect();
  return (
    <div>
<Navbar/>
<img className='side-img5' src="https://i.pinimg.com/originals/20/80/7e/20807e2199a0ac40963eab666b261e44.png" alt="Company logo"/> 
<Content/>
<Fac/>
<p id="scrollLoc"> 0</p>
      
<Middle/>

    <Contact/>
    <Footer/>
    </div>
  )
}
