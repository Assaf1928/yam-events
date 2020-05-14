import React from 'react';

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import classes from './smallCarousel.module.css'

import  img1 from '../../image/aboutGallery/3.jpg';
import  img2 from '../../image/aboutGallery/6.jpg';
import  img3 from '../../image/aboutGallery/7.jpg';
import  img4 from '../../image/aboutGallery/10.jpg';
import  img5 from '../../image/aboutGallery/8.jpg';




const smallCarousel = () => {

   
    return (
        <div className={classes.img__div}>
        <CarouselProvider v
          className={classes.CarouselProvider}
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            totalSlides={6}
            visibleSlides={3}
            interval={5000}
            isPlaying={true}
          >
            <Slider className={classes.CarouselSlider} >
              <Slide index={0}> <img src={img5}/>  </Slide>
              <Slide index={1}> <img src={img5}/> </Slide>
              <Slide index={2}> <img src={img5}/> </Slide>
              <Slide index={2}> <img src={img5}/> </Slide>
              <Slide index={2}> <img src={img5}/> </Slide>
              <Slide index={2}> <img src={img5}/> </Slide>
            </Slider>
            <ButtonBack>Back</ButtonBack>
            <ButtonNext>Next</ButtonNext>
        </CarouselProvider>
        </div>
    )
}

export default smallCarousel;