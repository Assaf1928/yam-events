import React from 'react';
import classes from './smallCarouselCard.module.css';
import classses from './smallCarouselCard.module.css';

const smallCarouselCard = (props) => (
<div className={classes.card}>
    <div className={classses.header}> 
    <div className={classes.background_img} style={{ backgroundImage: "url("+props.img+")"}}>
    </div>
    </div>
    <div className={classes.footer}>
        <h2>כותרת</h2>
        <p>תיאור קצר</p>
        <button className={classes.btn}> <span>&#8592;</span> צפה בעוד </button>
    </div>
    
</div>

)

export default smallCarouselCard