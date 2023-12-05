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
import "./Home.less";

export default function Carousel() {
  //config contains options for carousel
  const config = {
    type: "carousel",
    perView: 3,
    breakpoints: {
      1024: {
        perView: 3,
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
      <body className="homebody">
        <section id="intro">
          <p>Struggling to find the right plant for your home or garden?</p>
          <p>Hight light, low light, tall, small, low maintenance?</p>
          <p>The Chosen Plant is here to help you find the plant that is just right for you!</p>
        </section>
        <br />
        <p>Need some ideas check out our slideshow, or head over to the search page</p>
        <div className="glide">
          <div className="glide__track" data-glide-el="track">
            <ul id="options-autoplay-input" className="glide__slides">
              <li
                className="glide__slide"
                data-url="http://localhost:3000/search/24" >
                <img src="/plantImages/ChamaedoreaMetallica1.jpg" />
                <caption>Hanging Plants</caption>
              </li>
              <li
                className="glide__slide"
                data-url="http://localhost:3000/search/16">
                <img src="/plantImages/bougainvillea2.jpg" />
                <caption>Flowering Plants</caption>
              </li>
              <li
                className="glide__slide"
                data-url="http://localhost:3000/search/21">
                <img src="/plantImages/ChamaedoreaElegans2.jpg" />
                <caption>Infrequent watering, Low maintenance plants</caption>
              </li>
              <li
                className="glide__slide"
                data-url="http://localhost:3000/search/29">
                <img src="/plantImages/CryptanthusRoseElaine1.jpg" />
                <caption>Heat tolerant plants</caption>
              </li>
              <li
                className="glide__slide"
                data-url="http://localhost:3000/search/11">
                <img src="/plantImages/DidymochlaenaTruncatula1.jpg" />
                <caption>Cold tolerant plants</caption>
              </li>
              <li
                className="glide__slide"
                data-url="http://localhost:3000/search/1">
                <img src="/plantImages/Lipstick1.jpg" />
                <caption>Direct Sunlight, lots of bright sunlight</caption>
              </li>
              <li
                className="glide__slide"
                data-url="http://localhost:3000/search/9">
                <img src="/plantImages/MaidenhairFern2.jpg" />
                <caption>Partial shade, or low light conditions</caption>
              </li>
              <li
                className="glide__slide"
                data-url="http://localhost:3000/search/2">
                <img src="/plantImages/bougainvillea3.jpg" />
                <caption>Frequent Watering plants</caption>
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
      </body>
    </>
  );
}
