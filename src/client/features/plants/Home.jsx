import React from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Glide from "@glidejs/glide";
//import mandatory core css file for glide
import "@glidejs/glide/dist/css/glide.core.min.css";
//import optional theme css file for glide
import "@glidejs/glide/dist/css/glide.theme.min.css";
import "@glidejs/glide/dist/glide.min.js";
import "./plants.css";

export default function Carousel() {
  const [isImageClicked, setIsImageClicked] = useState(false);
  const [plantCategory, setPlantCategory] = useState("");

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

  function handleImageClick(selectedType) {
    setIsImageClicked(true);
    setPlantCategory(selectedType);
  }
  //use useEffect to hold state from glide
  useEffect(() => {
    const glide = new Glide(".glide", config);
    const plantImages = document.querySelectorAll(".glide__slide");
    plantImages.forEach((plantImage) => {
      plantImage.addEventListener("click", () => {
        const selectedType = plantImage.getAttribute("data-type");
        handleImageClick(selectedType);
      });
    });

    glide.mount();
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
              data-type="Anthurium"
            >
              <Link to={`/Search/plantType/7`}>
                <img src="/plantImages/Anthurium1.jpg" alt="Anthurium" />
              </Link>
            </li>
            <li
              className="glide__slide"
              data-url="http://localhost:3000/search/16"
              data-type="Cactus And Succulent"
            >
              <Link to={`/Search/plantType/5`}>
                <img
                  src="/plantImages/Cactus1.jpg"
                  alt="Cactus And Succulent"
                />
              </Link>
            </li>
            <li
              className="glide__slide"
              data-url="http://localhost:3000/search/21"
              data-type="Palm"
            >
              <Link to={`/Search/plantType/4`}>
                <img src="/plantImages/ChamaedoreaElegans2.jpg" alt="Palm" />
              </Link>
            </li>
            <li
              className="glide__slide"
              data-url="http://localhost:3000/search/29"
              data-type="Bromeliad"
            >
              <Link to={`/Search/plantType/6`}>
                <img
                  src="/plantImages/CryptanthusRoseElaine1.jpg"
                  alt="Bromeliad"
                />
              </Link>
            </li>
            <li
              className="glide__slide"
              data-url="http://localhost:3000/search/11"
              data-type="Foliage plant"
            >
              <Link to={`/Search/plantType/8`}>
                <img src="/plantImages/FoliagePlant1.jpg" alt="Foliage plant" />
              </Link>
            </li>
            <li
              className="glide__slide"
              data-url="http://localhost:3000/search/1"
              data-type="Hanging"
            >
              <Link to={`/Search/plantType/1`}>
                <img src="/plantImages/Lipstick1.jpg" alt="Hanging" />
              </Link>
            </li>
            <li
              className="glide__slide"
              data-url="http://localhost:3000/search/9"
              data-type="Fern"
            >
              <Link to={`/Search/plantType/2`}>
                <img src="/plantImages/MaidenhairFern2.jpg" alt="Fern" />
              </Link>
            </li>
            <li
              className="glide__slide"
              data-url="http://localhost:3000/search/2"
              data-type="Flower"
            >
              <Link to={`/Search/plantType/3`}>
                <img src="/plantImages/bougainvillea3.jpg" alt="Flower" />
              </Link>
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
