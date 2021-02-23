import React, { useRef, useState } from "react";

import "./carouselItems.css";
import Carousel from "react-bootstrap/Carousel";

const CarouselItems = (props) => {
  const handleSelect = (selectedIndex, e) => {
    props.setActiveIndex(selectedIndex);
  };

  let CarouselItems = "";

  CarouselItems = props.dataItems.map((img, index) => {
    let url = `"${props.dataPath}${img}"`;
    let name = img.split(".").slice(0, -1).join(".");
    return (
      <Carousel.Item key={index} id={index}>
        <div className="carousel__img_container">
          <img className="carousel__img" src={url} alt={index} />
        </div>
        <Carousel.Caption>
          <p>{name}</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  });

  return (
    <Carousel
      interval={null}
      touch={true}
      activeIndex={props.activeIndex}
      onSelect={handleSelect}
    >
      {CarouselItems}
    </Carousel>
  );
};

export default CarouselItems;
