import anime from "animejs/lib/anime.es.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GalleryText } from "../../components/Home/Gallery/GalleryText";
import { Loading } from "../../components/Loading";
import axiosInstance from "../../helper/AxiosInstance";
import "./Gallery.css";

export function Gallery() {
  const navigate = useNavigate();
  const [oeuvres, setOeuvres] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    axiosInstance
      .get("/oeuvres")
      .then((response) => {
        // Gérer la réponse ici
        setOeuvres(response.data["hydra:member"]);
        setIsLoaded(true);
      })
      .catch((error) => {
        // Gérer les erreurs ici
        console.error("Error fetching collections:", error);
      });
  }, []);

  const sectionRef = useRef(null);
  const triggerRef = useRef(null);
  // Register ScrollTrigger animation on component mount
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
      {
        /* A return function for killing the animation on component unmount */
      }
      pin.kill();
    };
  }, [isLoaded]);

  useEffect(() => {
    if (isLoaded === true) {
      // Sélectionnez toutes les divs avec la classe .ml14
      const elements = document.querySelectorAll(".ml14");

      // Définissez l'animation avec Anime.js
      anime({
        targets: elements,
        opacity: [0, 1],
        scale: [0.9, 1],
        duration: 1100, // Durée de l'animation en millisecondes
        easing: "easeInOutQuad", // Fonction d'accélération
        delay: anime.stagger(100), // Délai entre les animations de chaque élément
      });
    }
  }, [isLoaded]);

  return (
    <>
      {isLoaded === false ? (
        <Loading />
      ) : (
        <>
          <section className="scroll-section-outer">
            <div ref={triggerRef}>
              <GalleryText />
              <div ref={sectionRef} className="scroll-section-inner">
                {oeuvres.map((oeuvre, index) => (
                  <div className="image-container ml14" key={index}>
                    <img
                      onClick={() => {
                        navigate(`/gallery/${oeuvre.id}`);
                      }}
                      className="image-gallerie"
                      src={oeuvre.image}
                      alt=""
                    ></img>
                    <div className="image-container-title">
                      <h3>{oeuvre.name}</h3>
                      {oeuvre.serie && <p>{oeuvre.serie.name}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
