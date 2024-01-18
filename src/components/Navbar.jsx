import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export function Navbar() {
    const navigate = useNavigate();

    window.onscroll = function() {
        if (window.pageYOffset > 40) {
          document.querySelector(".nav-top").classList.add("active");
          document.querySelector(".nav-bottom").classList.add("active");
          
        } else {
            document.querySelector(".nav-top").classList.remove("active");
            document.querySelector(".nav-bottom").classList.remove("active");
        }
    };
    
    useEffect(() => {

        const menuInfo = document.querySelector(".menu-info");

        window.onscroll = function() {
            menuInfo.classList.add("active");    
        };
        window.onscrollend = function() {
            setTimeout(() => {
                menuInfo.classList.remove("active");    
            }, 2000);
        };
    }, []);

    return (
        <>
            <nav className="nav-top">
                <div className="navbar">
                    <div className="navbar_box navbar_left">
                        <p className="link text-main" onClick={() => {navigate('/')}}>Paoline.K</p>
                        <p className="pl35">Collage</p>
                    </div>
                    <div className="navbar_box navbar_right">
                        <div className="navbar_box menu-info">(Menu)</div>
                        <p className='link navbar_logo' onClick={() => {navigate('/')}}>PK</p>
                    </div>
                </div>
            </nav>
            <nav className="nav-bottom">
                <div className="navbar">
                    <div className="navbar_box navbar_box2 navbar_left">
                        <p>content of an artist </p>
                        <p className='text-main pl35'>for everyone </p>
                    </div>

                </div>
            </nav>
        </>
    )
}