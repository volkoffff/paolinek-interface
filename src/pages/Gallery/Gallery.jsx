import './Gallery.css';
import { useEffect } from 'react';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import anime from 'animejs/lib/anime.es.js';

export function Gallery() {

    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const pin = gsap.fromTo(
            sectionRef.current,
            {
                translateX: 0,
            },
            {
                translateX: "-300vw",
                ease: "none",
                duration: 1,
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",
                    end: "2000 top",
                    scrub: 0.6,
                    pin: true,
                },
            }
        );
        return () => {
            {/* A return function for killing the animation on component unmount */ }
            pin.kill();
        };
    }, []);

    useEffect(() => {
        var textWrapper = document.querySelector('.ml13');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
        
        anime.timeline()
            .add({
                targets: '.ml13 .letter',
                translateY: [80, 0],
                translateZ: 0,
                opacity: [0, 1],
                easing: "easeOutExpo",
                duration: 2500,
                delay: (el, i) => 30 * i
            })
            .add({
                targets: '.ml13 .letter',
                translateY: [0, -80],
                opacity: [1, 0],
                easing: "easeInExpo",
                duration: 2500,
                delay: (el, i) => 30 * i
            });
        
    }, []);

    return (
        <>
            <h1 className='title-galerie ml13'>Gallerie</h1>
            <section className="scroll-section-outer">
                <div ref={triggerRef}>
                    <div ref={sectionRef} className="scroll-section-inner">
                        <div className="image-container">
                            <img className="image-gallerie" src="https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive.jpg" alt=""></img>
                            <div className='image-container-title'>
                                <h3>Déjà vu</h3>
                                <p>Souvenirs</p>
                            </div>
                        </div>
                        <div className="image-container">
                            <img className="image-gallerie" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg" alt="" />
                            <div className='image-container-title'>
                                <h3>Déjà vu</h3>
                                <p>Souvenirs</p>
                            </div>
                        </div>
                        <div className="image-container">
                            <img className="image-gallerie" src="https://usualcom.net/wp-content/uploads/2017/09/12364849-Planet-Earth-and-human-eye-Stock-Photo.jpg" alt="" />
                            <div className='image-container-title'>
                                <h3>Déjà vu</h3>
                                <p>Souvenirs</p>
                            </div>
                        </div>
                        <div className="image-container">
                            <img className="image-gallerie" src="https://www.referenseo.com/wp-content/uploads/2019/03/image-attractive.jpg" alt=""></img>
                            <div className='image-container-title'>
                                <h3>Déjà vu</h3>
                                <p>Souvenirs</p>
                            </div>
                        </div>
                        <div className="image-container">
                            <img className="image-gallerie" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg" alt="" />
                            <div className='image-container-title'>
                                <h3>Déjà vu</h3>
                                <p>Souvenirs</p>
                            </div>
                        </div>
                        <div className="image-container">
                            <img className="image-gallerie" src="https://usualcom.net/wp-content/uploads/2017/09/12364849-Planet-Earth-and-human-eye-Stock-Photo.jpg" alt="" />
                            <div className='image-container-title'>
                                <h3>Déjà vu</h3>
                                <p>Souvenirs</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}