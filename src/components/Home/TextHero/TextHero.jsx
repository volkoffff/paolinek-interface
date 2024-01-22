import { useEffect } from "react";
import anime from 'animejs/lib/anime.es.js';

export function TextHero() {

    useEffect(() => {
        // effect text intro annimation pop up
        var textWrapper = document.querySelector('.ml13');
        textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
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
        <h1 className="title_intro ml13 titlehover">Paoline.K Collage | Paoline.K Collage | Paoline.K Collage | Paoline.K Collage |</h1>
    )
}