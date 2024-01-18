import { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';

export function ButtonMagnetic() {

    useEffect(() => {

        anime.timeline()
            .add({
                targets: '.button-magnetic',
                translateY: [100, 0],
                translateZ: 0,
                opacity: [0, 1],
                easing: "easeOutExpo",
                duration: 2500,
                delay: 1300,
        });



        const button = document.querySelector('.button-magnetic');

        function applyMagneticEffect(event) {
            const boundingBox = button.getBoundingClientRect();

            // Calculer la position du curseur par rapport au centre du bouton
            const offsetX = event.clientX - boundingBox.left - boundingBox.width / 2;
            const offsetY = event.clientY - boundingBox.top - boundingBox.height / 2;

            // Appliquer une transformation en fonction de la position du curseur
            button.style.transform = `translate(${offsetX}px, ${offsetY}px) scale(1.1)`;

            button.animate({
                transform: `translate(${offsetX}px, ${offsetY}px) scale(1.1)`
              }, {
                duration: 4000,
                fill: "forwards",
                easing: "ease"
              })
        }

        // Ajouter l'événement de survol
        button.addEventListener('mousemove', applyMagneticEffect);

    }, []);

    return (
    <a href="#" className="button-magnetic link">
        <span className="button-magnetic-picto">
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16.293 9.293L12 13.586 7.707 9.293 6.293 10.707 12 16.414 17.707 10.707z"></path></svg>
        </span>
    </a>
    )
}