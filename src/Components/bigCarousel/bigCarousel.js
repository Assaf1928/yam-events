import React from 'react';

import classes from './bigCarousel.module.css';
import {Carousel} from 'react-bootstrap';
import Aux from '../../hoc/Auxiliary/Auxiliary'
import  img1 from '../../image/bigCarouselImg/1.jpeg';
import  img2 from '../../image/bigCarouselImg/2.jpeg';
import  img4 from '../../image/bigCarouselImg/4.jpeg';


const bigCarousel = () => {
   
    
        
    return(
        <div className={classes.img__div}>
            <Carousel>
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