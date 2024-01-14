import { useState } from 'react';
import './App.css'

function App() {
  
  window.onscroll = function() {
    if (window.pageYOffset > 40) {
      document.querySelector(".nav").classList.add("active");
      document.querySelector(".nav2").classList.add("active");
      
    } else {
        document.querySelector(".nav").classList.remove("active");
        document.querySelector(".nav2").classList.remove("active");

    }
  };

  useState(() => {
    window.addEventListener('mousemove', function(e) {
      var cursor = document.getElementById('cursor')
      cursor.style.top = e.clientY - cursor.offsetHeight / 2 + 'px';
      cursor.style.left = e.clientX - cursor.offsetWidth / 2 + 'px';
    });
  } , []);
  

  

  return (
    <>
      <div id="cursor"></div>
      <nav className="nav">
        <div className="navbar">
            <div className="navbar_box navbar_left">
                <p className="link">Paoline.K</p>
                <p>Collage</p>
            </div>
            <div className="navbar_box navbar_right">
                {/* <img className="logo link" src="img/Group 1.svg" alt=""> */}
                <p>Logo</p>
            </div>
        </div>
    </nav>
    <nav className="nav2">
        <div className="navbar">
            <div className="navbar_box navbar_box2 navbar_left">
                <p>content of an artist </p>
                <p>for everyone </p>
            </div>
        </div>
    </nav>
    
    </>
  )
}

export default App
