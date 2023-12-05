import React from "react";
import { useEffect } from "react";
import Glide from "@glidejs/glide";
//import mandatory core css file for glide
import "@glidejs/glide/dist/css/glide.core.min.css";
//import optional theme css file for glide
import "@glidejs/glide/dist/css/glide.theme.min.css";
// import {userSelector} from "react-redux";
import "@glidejs/glide/dist/glide.min.js";
import "./plants.css";
import Plants from "./Search";

export default function Carousel() {
  //config contains options for carousel
  const config = {
    type: "carousel",
    perView: 3,
    breakpoints: {
      1024: {
        perView: 2,
      },
      600: {
        perView: 1,
      },
    },
    gap: 10,
    autoplay: 2000,
    hoverpause: true,
  };
  //use useEffect to hold state from glide
  useEffect(() => {
    const glide = new Glide(".glide", config);
    glide.mount();
    //add event listener to the slides
    const plantImages = document.querySelectorAll(".glide__slide");
    function handleImageClick(url) {
      window.location.href = url;
    }
    plantImages.forEach((plantImage) => {
      const imgUrl = plantImage.getAttribute("data-url");
      plantImage.addEventListener("click", () => {
        handleImageClick(imgUrl);
        console.log(`Slide ${indexOf} clicked`);
      });
    });
    return () => {
      glide.destroy();
    };
  }, []);

  return (
    <>
      <div className="glide">
        <div className="glide__track" data-glide-el="track">
          <ul id="options-autoplay-input" className="glide__slides">
            <li
              className="glide__slide"
              data-url="http://localhost:3000/search/24"
            >
              <img src="/plantImages/ChamaedoreaMetallica1.jpg" />
            </li>
            <li
              className="glide__slide"
              data-url="http://localhost:3000/search/16"
            >
              <img src="/plantImages/bougainvillea2.jpg" />
            </li>
            <li
              className="glide__slide"
              data-url="http://localhost:3000/search/21"
            >
              <img src="/plantImages/ChamaedoreaElegans2.jpg" />
            </li>
            <li
              className="glide__slide"
              data-url="http://localhost:3000/search/29"
            >
              <img src="/plantImages/CryptanthusRoseElaine1.jpg" />
            </li>
            <li
              className="glide__slide"
              data-url="http://localhost:3000/search/11"
            >
              <img src="/plantImages/DidymochlaenaTruncatula1.jpg" />
            </li>
            <li
              className="glide__slide"
              data-url="http://localhost:3000/search/1"
            >
              <img src="/plantImages/Lipstick1.jpg" />
            </li>
            <li
              className="glide__slide"
              data-url="http://localhost:3000/search/9"
            >
              <img src="/plantImages/MaidenhairFern2.jpg" />
            </li>
            <li
              className="glide__slide"
              data-url="http://localhost:3000/search/2"
            >
              <img src="/plantImages/bougainvillea3.jpg" />
            </li>
          </ul>
        </div>
        <div className="glide__arrows" data-glide-el="controls">
          <button
            className="glide__arrow glide__arrow--left arrow-left"
            data-glide-dir="<"
          >
            &#60;
          </button>
          <button
            className="glide__arrow glide__arrow--right arrow-right"
            data-glide-dir=">"
          >
            &#62;
          </button>
        </div>
      </div>
    </>
  );
}
