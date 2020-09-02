import React from 'react';

import classes from './welcome.module.css';


const welcome = (props) => {
    return(
        <div className={classes.text}  >
            <h1>ברוכים הבאים</h1>
            <h3>ים אירועים</h3>
            <h5>השכרת ציוד לאירועים</h5>
            <div className={classes.arrow}>&#8675;</div>
        </div>
    );
}

export default welcome;