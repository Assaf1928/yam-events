import React from 'react';

import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import classes from './smallCarousel.module.css'

import  img1 from '../../image/smallCarousel/3.jpg';
import  img2 from '../../image/smallCarousel/6.jpg';
import  img3 from '../../image/smallCarousel/7.jpg';
import  img4 from '../../image/smallCarousel/10.jpg';
import  img5 from '../../image/smallCarousel/8.jpg';




const smallCarousel = () => {

   
    return (
        <div className={classes.img__div}>
          <h1>המומלצים</h1>
        <CarouselProvider 
            naturalSlideWidth={100}
            naturalSlideHeight={125}
            totalSlides={6}
            visibleSlides={3}
            interval={5000}
            isPlaying={true}
            naturalSlideWidth={18}
            naturalSlideHeight={10}
            step={3}
          >
            <Slider className={classes.CarouselSlider} >

            {/* <Slide index={0}> <ImageWithZoom src={img5}/>  </Slide>
              <Slide index={1}> <ImageWithZoom src={img5}/> </Slide>
              <Slide index={2}> <ImageWithZoom src={img5}/> </Slide>
              <Slide index={3}> <ImageWithZoom src={img5}/> </Slide>
              <Slide index={4}> <ImageWithZoom src={img5}/> </Slide>
              <Slide index={5}> <ImageWithZoom src={img5}/> </Slide> */}

              <Slide index={0}> <img alt="test" src={img1}/> <p>0</p></Slide>
              <Slide index={1}> <img  alt="test"  src={img2}/><p>1</p></Slide>
              <Slide index={2}> <img alt="test"  src={img3}/><p>2</p></Slide>
              <Slide index={3}> <img  alt="test"  src={img4}/><p>3</p></Slide>
              <Slide index={4}> <img alt="test"  src={img5}/><p>4</p> </Slide>
              <Slide index={5}> <img  alt="test" src={img1}/><p>5</p></Slide>
            </Slider>
            <ButtonBack>Back</ButtonBack>
            <ButtonNext>Next</ButtonNext>
        </CarouselProvider>
        </div>
    )
}

export default smallCarousel;