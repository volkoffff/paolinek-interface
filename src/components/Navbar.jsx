export function Navbar() {

    window.onscroll = function() {
        if (window.pageYOffset > 40) {
          document.querySelector(".nav-top").classList.add("active");
          document.querySelector(".nav-bottom").classList.add("active");
          
        } else {
            document.querySelector(".nav-top").classList.remove("active");
            document.querySelector(".nav-bottom").classList.remove("active");
        }
    };

    return (
        <>
            <nav className="nav-top">
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
            <nav className="nav-bottom">
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