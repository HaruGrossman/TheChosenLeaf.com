import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Glide from "@glidejs/glide";
//import mandatory core css file for glide
import "@glidejs/glide/dist/css/glide.core.min.css";
//import optional theme css file for glide
import "@glidejs/glide/dist/css/glide.theme.min.css";
import "@glidejs/glide/dist/glide.min.js";
import "./plants.css";
import "./Home.less";

export default function Carousel() {
  const [isImageClicked, setIsImageClicked] = useState(false);
  const [plantCategory, setPlantCategory] = useState("");

  //config contains options for carousel
  const config = {
    type: "carousel",
    perView: 3,
    breakpoints: {
      919: {
        perView: 2,
      },
      700: {
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
      <body className="homebody">
        <section id="intro">
          <p>
            Struggling to find the right plant for your home or garden? High
            light, low light, tall, small, low maintenance?
          </p>
          <p>
            The Chosen Plant is here to help you find the plant that is just
            right for you!
          </p>
        </section>
        {/* <br /> */}
        <p>
          Need some ideas check out our slideshow{" "}
          <span id="arrowdown"> &#x21e3; </span> or head over to the search page
        </p>
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
                <caption>Anthurium Plants</caption>
              </li>
              <li
                className="glide__slide"
                data-url="http://localhost:3000/search/16"
                data-type="Flower"
              >
                <Link to={`/Search/plantType/3`}>
                  <img src="/plantImages/bougainvillea3.jpg" alt="Flower" />
                </Link>
                <caption>Flowering Plants</caption>
              </li>
              <li
                className="glide__slide"
                data-url="http://localhost:3000/search/21"
                data-type="Palm"
              >
                <Link to={`/Search/plantType/4`}>
                  <img src="/plantImages/ChamaedoreaElegans2.jpg" alt="Palm" />
                </Link>
                <caption>
                  Palms, Infrequent watering, Low maintenance plants
                </caption>
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
                <caption>Bromeliads</caption>
              </li>
              <li
                className="glide__slide"
                data-url="http://localhost:3000/search/11"
                data-type="Fern"
              >
                <Link to={`/Search/plantType/2`}>
                  <img src="/plantImages/MaidenhairFern2.jpg" alt="Fern" />
                </Link>
                <caption>Ferns</caption>
              </li>
              <li
                className="glide__slide"
                data-url="http://localhost:3000/search/1"
                data-type="Hanging"
              >
                <Link to={`/Search/plantType/1`}>
                  <img src="/plantImages/Lipstick1.jpg" alt="Hanging" />
                </Link>
                <caption>Hanging Plants</caption>
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
                <caption>Cactus And Succulent</caption>
              </li>
              <li
                className="glide__slide"
                data-url="http://localhost:3000/search/2"
                data-type="Foliage Plant"
              >
                <Link to={`/Search/plantType/8`}>
                  <img
                    src="/plantImages/FoliagePlant1.jpg"
                    alt="Foliage Plant"
                  />
                </Link>
                <caption>Foliage Plants</caption>
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
        <p>
          Our goal is to connect beginning and experienced plant owners to a
          wide range of plants, and where to find them. We're continuously work
          to bring you that "It's Perfect!" flower, succulent, or plant for your
          house and home. Whether you're looking or just need some advice on
          what that houseplant special care and needs, stop by and we can help
          you!
        </p>
      </body>
    </>
  );
}
