import { useEffect } from "react";
import anime from "animejs/lib/anime.es.js";

export function GalleryText() {
  useEffect(() => {
    console.log(
      "GalleryText mounted ----------------------------------------------- "
    );
    var textWrapper = document.querySelector(".ml13");
    textWrapper.innerHTML = textWrapper.textContent.replace(
      /\S/g,
      "<span class='letter'>$&</span>"
    );
      
    anime
      .timeline()
      .add({
        targets: ".ml13 .letter",
        translateY: [80, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 2500,
        delay: (el, i) => 30 * i,
      })
      .add({
        targets: ".ml13 .letter",
        translateY: [0, -80],
        opacity: [1, 0],
        easing: "easeInExpo",
        duration: 2500,
        delay: (el, i) => 30 * i,
      });
  }, []);
  return <h1 className="title-galerie ml13">Gallerie</h1>;
}
