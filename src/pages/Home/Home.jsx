import { useEffect } from "react";
import { Contact } from "../../components/Home/Contact/Contact";
import anime from 'animejs/lib/anime.es.js';
import { ButtonMagnetic } from "../../components/Home/ButtonMagnetic/ButtonMagnetic";

export function Home() {

    useEffect(() => {
     // effect text intro annimation pop up
     var textWrapper = document.querySelector('.ml13');
     textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
     console.log('start');
     anime.timeline()
         .add({
             targets: '.ml13 .letter',
             translateY: [100, 0],
             translateZ: 0,
             opacity: [0, 1],
             easing: "easeOutExpo",
             duration: 2500,
             delay: (el, i) => 300 + 30 * i
         });
    }, [])

    return (
        <>
        <div className="title_intro_container">
            <h1 className="title_intro ml13 titlehover">Paoline.K Collage | Paoline.K Collage | Paoline.K Collage | Paoline.K Collage |</h1>
            <ButtonMagnetic />
        </div>
       
        <Contact />
        </>
    )
}