import React from "react";

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import generalDesign from "../css/generalDesign.module.css";
import classes from "./smallCarousel.module.css";
import classNames from "classnames";

import img1 from "../../image/smallCarousel/3.jpg";
import img2 from "../../image/smallCarousel/6.jpg";
import img3 from "../../image/smallCarousel/7.jpg";
import img4 from "../../image/smallCarousel/10.jpg";
import img5 from "../../image/smallCarousel/8.jpg";

const smallCarousel = (props) => {
  return (
    <div className={classes.small__carousel_container}>
      <div
        className={classNames({
          [classes.small__carousel]: true,
          [generalDesign.center_horizontal]: true,
        })}
      >
        <h1 className={classes.title}>הסטים המומלצים שלנו</h1>
        <div className={classes.container__carousel}>
          <CarouselProvider
            totalSlides={6}
            visibleSlides={4}
            interval={3000}
            isPlaying={true}
            naturalSlideWidth={1}
            naturalSlideHeight={1}
            step={1}
            infinite={false}
            className={classNames({
              [classes.CarouselProvider]: true,
              [generalDesign.center_horizontal]: true
            })}
          >
            <ButtonBack className={classes.ButtonBack}>&#60;</ButtonBack>

            <Slider className={classes.Slider}>
              <Slide index={0} className={classes.Slide}>
                {" "}
                <img src={img3} /> <p>0</p>
              </Slide>
              <Slide index={1} className={classes.Slide}>
                {" "}
                <img src={img2} />
                <p>1</p>
              </Slide>
              <Slide index={2} className={classes.Slide}>
                {" "}
                <img src={img3} />
                <p>2</p>
              </Slide>
              <Slide index={3} className={classes.Slide}>
                {" "}
                <img src={img4} />
                <p>3</p>
              </Slide>
              <Slide index={4} className={classes.Slide}>
                {" "}
                <img src={img5} />
                <p>4</p>{" "}
              </Slide>
              <Slide index={5} className={classes.Slide}>
                {" "}
                <img src={img3} />
                <p>5</p>
              </Slide>
            </Slider>

            <ButtonNext className={classes.ButtonNext}>&#62;</ButtonNext>
          </CarouselProvider>
        </div>
      </div>
    </div>
  );
};

export default smallCarousel;
