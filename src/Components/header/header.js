import React from 'react';

import classes from './header.module.css';
import  img4 from '../../image/bigCarousel/4.jpg';

const header = (props) => {
console.log(props.scrollingUp);
    return(
        <div className={ (props.isTop !== true) ? classes.container_header: classes.container_header_top}>
            
            <img className={classes.img_back}  src={img4} />
            
        </div>
    );
}

export default header;