import './Gallery.css';
import { useEffect } from 'react';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import anime from 'animejs/lib/anime.es.js';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../../helper/AxiosInstance';
import { useState } from 'react';

export function Gallery() {
    const navigate = useNavigate();
    
    const [oeuvres, setOeuvres] = useState([]);

    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    useEffect(() => {
        axiosInstance.get('/oeuvres')
          .then(response => {
            // Gérer la réponse ici
            setOeuvres(response.data["hydra:member"]);
          })
          .catch(error => {
            // Gérer les erreurs ici
            console.error('Error fetching collections:', error);
          });
    }, []);

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
                        { oeuvres.map((oeuvre, index) => (
                            <div className="image-container" key={index}>
                                <img   onClick={() => {navigate(`/gallery/${oeuvre.id}`)}} className="image-gallerie" src={oeuvre.image} alt=""></img>
                                <div className='image-container-title'>
                                    <h3>{oeuvre.name}</h3>
                                    { oeuvre.serie &&
                                        <p>{oeuvre.serie.name}</p>
                                    }
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}