import React from 'react';

import classes from './bigCarousel.module.css';
import {Carousel} from 'react-bootstrap';
import  img1 from '../../image/bigCarouselImg/1.jpg';
import  img2 from '../../image/bigCarouselImg/2.jpg';
import  img4 from '../../image/bigCarouselImg/4.jpg';


const bigCarousel = () => {
   
    
        
    return(
        <div className={classes.img__div}>
            <Carousel controls={false} indicators={false}>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                    /> 
                    <Carousel.Caption />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img2}
                    alt="Third slide"
                    />
                    <Carousel.Caption />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img4}
                    alt="Third slide"
                    />
                    <Carousel.Caption />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default bigCarousel;