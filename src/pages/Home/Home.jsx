import { useEffect } from "react";
import { Contact } from "../../components/Home/Contact/Contact";
import anime from 'animejs/lib/anime.es.js';

export function Home() {

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
        <>
        <div className="title_intro_container">
        <h1 className="title_intro ml13 titlehover">Paoline.K Collage | Paoline.K Collage | Paoline.K Collage | Paoline.K Collage |
        </h1>
    </div>
        <a href="#" className="button_2line js-attract-hover link">
            <span className="button_2line_picto">
                <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1em" width="1em"
                xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd"
                d="M10.146 4.646a.5.5 0 01.708 0l3 3a.5.5 0 010 .708l-3 3a.5.5 0 01-.708-.708L12.793 8l-2.647-2.646a.5.5 0 010-.708z"
                clipRule="evenodd"></path>
                <path fillRule="evenodd" d="M2 8a.5.5 0 01.5-.5H13a.5.5 0 010 1H2.5A.5.5 0 012 8z" clipRule="evenodd">
                </path>
            </svg>
        </span>
    </a>
    <div className="type_art ">
        <div className="type_art_left">
            <div>
                <h2>collage</h2>
                <p className="font">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa exercitationem aperiam dicta perspiciatis itaque quas neque similique autem voluptatem doloribus dolor molestiae, tenetur corporis praesentium dignissimos, veritatis accusantium? Commodi, officiis.</p>
            </div>
        </div>
        <div className="type_art_right">
            <div ></div>
            <div ></div>
            <div ></div>
        </div>
    </div>
    <div className="type_art ">
        <div className="type_art_left">
            <div>
                <h2>Peinture</h2>
                <p className="font">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa exercitationem aperiam dicta perspiciatis itaque quas neque similique autem voluptatem doloribus dolor molestiae, tenetur corporis praesentium dignissimos, veritatis accusantium? Commodi, officiis.</p>
            </div>
        </div>
        <div className="type_art_right ">
            <div ></div>
            <div ></div>
            <div ></div>
        </div>
    </div>
        <Contact />
        </>
    )
}