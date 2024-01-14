export function Navbar() {
    
    window.onscroll = function() {
        if (window.pageYOffset > 40) {
          document.querySelector(".nav").classList.add("active");
          document.querySelector(".nav2").classList.add("active");
          
        } else {
            document.querySelector(".nav").classList.remove("active");
            document.querySelector(".nav2").classList.remove("active");
        }
    };

    return (
        <>
            <nav className="nav">
                <div className="navbar">
                    <div className="navbar_box navbar_left">
                        <p className="link text-main">Paoline.K</p>
                        <p>Collage</p>
                    </div>
                    <div className="navbar_box navbar_logo">
                        {/* <img className="logo link" src="img/Group 1.svg" alt=""> */}
                        <p className=''>PK</p>
                    </div>
                </div>
            </nav>
            <nav className="nav2">
                <div className="navbar">
                    <div className="navbar_box navbar_box2 navbar_left">
                        <p>content of an artist </p>
                        <p className='text-main'>for everyone </p>
                    </div>
                </div>
            </nav>
        </>
    )
}