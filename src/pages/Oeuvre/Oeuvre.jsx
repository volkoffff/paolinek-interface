import './Oeuvre.css';

export function Oeuvre() {
    // useEffect(() => {
    //     document.querySelector(".nav-top").classList.add("active");
    //     document.querySelector(".nav-bottom").classList.add("active");
    // }, [])

    return (
        <>
         <div className='image-oeuvre-bg-outer'>
            <img className="image-oeuvre-bg" src="https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/04/fdcd5a_e1dd92645cdf4e2a91bbd6c1a6c70202mv2.jpg?resize=1000%2C1250&quality=89&ssl=1" alt="" />
        </div>

        <div className='section-oeuvre'>
            <div className='image-oeuvre-outer'>
                <img className="image-oeuvre" src="https://i0.wp.com/www.printmag.com/wp-content/uploads/2021/04/fdcd5a_e1dd92645cdf4e2a91bbd6c1a6c70202mv2.jpg?resize=1000%2C1250&quality=89&ssl=1" alt="" />
               
            </div>
            <div className='info-outer'>
                <div className='info-header'>
                    <div className='anim-translate-container'>
                        <h1 className='anim-translate delay-8 ml13'>Déjà Vu ?</h1>
                    </div>
                    <div className='anim-translate-container'>
                    <h2 className='anim-translate delay-11'>Sous baché</h2>
                    </div>
                </div>
                <div className='info-header-p-outer'>
                    <p>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500,</p>
                </div>
            </div>
        </div>
        </>
    )
}