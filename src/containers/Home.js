// Init
import React, { useState, useEffect, useSyncExternalStore } from "react";

// Importing Components
import Header from "../components/Header";
import MenuCard from "../components/MenuCard";

//Modules
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

// Data
import menus from "../data/menus";

// Home Component
export default function Home() {
  let [paginatedMenus, setPagnatedMenus] = useState([]);

  useEffect(() => {
    console.log("Func called");
    filterMenus();
  }, []);

  const filterMenus = () => {
    let filteredMenus = [];
    for (let i = 0; i < menus.length; i += 8) {
      filteredMenus.push(menus.slice(i, i + 8));
    }
    setPagnatedMenus(filteredMenus);
  };
  return (
    <section className="body_container">
      <Header />
      <div className="carousel_container">
        <Carousel
          autoPlay={false}
          infiniteLoop
          interval="5000"
          transitionTime="1000"
          stopOnHover={false}
          showThumbs={false}
          showArrows={false}
          showIndicators={true}
          showStatus={false}
        >
          {paginatedMenus.map((menuSet) => {
            return (
              <div className="card_container">
                {menus.map((menu) => (
                  <MenuCard menu={menu} />
                ))}
              </div>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
}
