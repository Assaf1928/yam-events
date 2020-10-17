import React from "react";
import classes from "./navigationItems.module.css";
import { NavLink } from "react-router-dom";

const navigationItems = (props) => (
  <div className={classes.navigation__items}>
    <div className={classes.container}>
      <NavLink to={"/"} activeClassName={classes.active}>
        דף ראשי
      </NavLink>
    </div>
    <div className={classes.container}>
        <a href="#about">אודות</a>
    </div>
    {/* <div className={classes.container}>
      <NavLink to={"/category"} activeClassName={classes.active}>
        קטגוריה
      </NavLink>
    </div> */}
    <div className={classes.container}>
      <div className={classes.drop__down}>
        <button className={classes.drop__btn}> כלי הגשה </button>
        <div className={classes.drop__down__content}>
          <a href="#">צלחות</a>
          <a href="#">כוסות</a>
          <a href="#">סכום</a>
          <a href="#">קערות בר</a>
          <a href="#">קערות הגשה</a>
          <a href="#">סלטרום</a>
          <a href="#">שפינגום</a>
          <a href="#">סירום</a>
          <a href="#">מגשי פינוי</a>
        </div>
      </div>
    </div>
    <div className={classes.container}>
      <div className={classes.drop__down}>
        <button className={classes.drop__btn}> ריהוט </button>
        <div className={classes.drop__down__content}>
          <a href="#">שולחנות</a>
          <a href="#">כסאות</a>
          <a href="#">מזנונים</a>
        </div>
      </div>
    </div>

    <div className={classes.container}>
      <div className={classes.drop__down}>
        <button className={classes.drop__btn}> ציוד אלטרנטיבי </button>
        <div className={classes.drop__down__content}>
          <a href="#">פוטונים</a>
          <a href="#">אוהלים</a>
          <a href="#">כריות</a>
          <a href="#">מחצלות</a>
          <a href="#">אדומים</a>
          <a href="#">פנפום</a>
        </div>
      </div>
    </div>
    <div className={classes.container}>
      <div className={classes.drop__down}>
        <button className={classes.drop__btn}> ציוד נלווה </button>
        <div className={classes.drop__down__content}>
          <a href="#">שמשיות</a>
          <a href="#">מיזוג</a>
          <a href="#">פרגודים</a>
          <a href="#">אוהלים</a>
          <a href="#">מפות ומפיות</a>
          <a href="#">כלי חימום וקירור</a>
        </div>
      </div>
    </div>
  </div>
);

export default navigationItems;
