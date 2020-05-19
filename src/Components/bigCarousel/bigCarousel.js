import React from 'react';

import classes from './bigCarousel.module.css';
import {Carousel} from 'react-bootstrap';
const bigCarousel = (props) => {

    console.log(props.data)
    let data = props.data.map(img => {

        return (<Carousel.Item>
        <img
        className="d-block w-100"
        src={require('../../image/bigCarousel/'+img)}
        alt="First slide"
        /> 
        <Carousel.Caption />
    </Carousel.Item>)
    })
    return(<div className={classes.img__div}><Carousel controls={false} indicators={false}> {data} </Carousel> </div>);
    
}

export default bigCarousel;