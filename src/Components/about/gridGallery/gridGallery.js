import React from 'react';

import classes from './gridGallery.module.css';
import  img1 from '../../../image/aboutGallery/1.jpg';
import  img2 from '../../../image/aboutGallery/2.jpg';
import  img3 from '../../../image/aboutGallery/3.jpg';
import  img4 from '../../../image/aboutGallery/4.jpg';

const gridGallery = () => {

    return(  
        <div class={classes.row}>
            <div class={classes.column}>
                <img src={img1}/> 
                <img src={img2}  /> 
                <img src={img3} /> 
            </div>
            <div class={classes.column}>
                <img src={img4}  /> 
                <img src={img1} style={{height:'66%'}} /> 
            </div>
        </div>         
    );
}

export default gridGallery;