import React from 'react';

import classes from './gridGallery.module.css';
import  img1 from '../../../image/aboutGallery/3.jpg';
import  img2 from '../../../image/aboutGallery/6.jpg';
import  img3 from '../../../image/aboutGallery/7.jpg';
import  img4 from '../../../image/aboutGallery/10.jpg';
import  img5 from '../../../image/aboutGallery/8.jpg';


const gridGallery = () => {

    return(  
        <div className={classes.row}>
                <img src={img5}/> 
                <img src={img4}  /> 
                <img src={img3} /> 
                <img className={classes.big__img} src={img2}  /> 
        </div>        
    );
}

export default gridGallery;