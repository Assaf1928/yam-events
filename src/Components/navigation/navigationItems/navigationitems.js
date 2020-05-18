import React from 'react';
import mainclasses from './navigationItems.module.css';
import classes from '../navigationItems/navigationItem/navigationItem.module.css'
import { NavLink } from 'react-router-dom';

const navigationItems = ( props ) => (
    <div className={mainclasses.navigation__items}>

<div className={classes.container}>
   <NavLink to={'/'}  activeClassName={classes.active}>דף ראשי</NavLink>
</div>
<div className={classes.container}>
    <NavLink to={'/card'}  activeClassName={classes.active}>אודות</NavLink>
</div>
<div className={classes.container}>
   <NavLink to={'/category'}  activeClassName={classes.active}>קטגוריה</NavLink>
</div>
<div className={classes.container} >
        
        <div className={classes.drop__down}>
    
        <button className={classes.drop__btn}> כלי הגשה </button>           
        <div className={classes.drop__down__content}>
                <a>צלחות</a>
                <a>כוסות</a>
                <a>סכום</a>
                <a>קערות בר</a>
                <a>קערות הגשה</a>
                <a>סלטרום</a>
                <a>שפינגום</a>
                <a>סירום</a>
                <a>מגשי פינוי</a>
                </div>
                    </div>
    </div>
    <div className={classes.container} >
        
        <div className={classes.drop__down}>
        <button className={classes.drop__btn}> ריהוט </button>           
         <div className={classes.drop__down__content}>
                <a>שולחנות</a>
                <a>כסאות</a>
                <a>מזנונים</a>
                </div>
                    </div>
    </div>


    <div className={classes.container} >
        <div className={classes.drop__down}>
        <button className={classes.drop__btn}> ציוד אלטרנטיבי </button>           
         <div className={classes.drop__down__content}>
                <a>פרוסונים</a>
                <a>אוהלים</a>
                <a>כריות</a>
                <a>מחצלות</a>
                <a>אדומים</a>
                <a>פנפום</a>
                </div>
                    </div>
    </div>
    <div className={classes.container} >
        <div className={classes.drop__down}>
        <button className={classes.drop__btn}> ציוד נלווה </button>           
         <div className={classes.drop__down__content}>
                <a>שמשיות</a>
                <a>מיזוג</a>
                <a>פרגודים</a>
                <a>אוהלים</a>
                <a>מפות ומפיות</a>
                <a>כלי חימום וקירור</a>
                </div>
                    </div>
    </div>
    </div>
    )

    export default (navigationItems)