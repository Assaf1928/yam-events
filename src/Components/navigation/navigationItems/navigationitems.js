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
<<<<<<< HEAD
          <a href="category?Id=3&subId=5">צלחות</a>
          <a href="category?Id=3&subId=3">כוסות</a>
          <a href="category?Id=3&subId=4">סכום</a>
          <a href="category?Id=3&subId=1">קערות בר</a>
          <a href="category?Id=3&subId=8">קערות הגשה</a>
          <a href="category?Id=3&subId=">סלטרום</a>
          <a href="category?Id=3&subId=">שפינגום</a>
          <a href="category?Id=3&subId=">סירום</a>
          <a href="category?Id=3&subId=2">מגשי פינוי</a>
=======
          <a href="#">צלחות</a>
          <a href="#">כוסות</a>
          <a href="#">סכו"ם</a>
          <a href="#">קערות בר</a>
          <a href="#">קערות הגשה</a>
          <a href="#">סלטרים</a>
          <a href="#">שפינגים</a>
          <a href="#">סירים</a>
          <a href="#">כלים נלווים</a>
>>>>>>> 82553ac989c9470912743a709c53414a3c56bd98
        </div>
      </div>
    </div>
    <div className={classes.container}>
      <div className={classes.drop__down}>
        <button className={classes.drop__btn}> ריהוט </button>
        <div className={classes.drop__down__content}>
          <a href="category?Id=2&subId=3">שולחנות</a>
          <a href="category?Id=2&subId=2">כסאות</a>
          <a href="category?Id=2&subId=1">מזנונים</a>
        </div>
      </div>
    </div>

    <div className={classes.container}>
      <div className={classes.drop__down}>
        <button className={classes.drop__btn}> ציוד אלטרנטיבי </button>
        <div className={classes.drop__down__content}>
<<<<<<< HEAD
          <a href="category?Id=1&subId=4">פוטונים</a>
          <a href="category?Id=1&subId=">אוהלים</a>
          <a href="category?Id=1&subId=5">כריות</a>
          <a href="category?Id=1&subId=3">מחצלות</a>
          <a href="category?Id=1&subId=">הדומים</a>
          <a href="category?Id=1&subId=">פנפום</a>
=======
          <a href="#">פוטונים</a>
          <a href="#">כריות</a>
          <a href="#">מחצלות</a>
          <a href="#">הדומים</a>
          <a href="#">פופים</a>
>>>>>>> 82553ac989c9470912743a709c53414a3c56bd98
        </div>
      </div>
    </div>
    <div className={classes.container}>
      <div className={classes.drop__down}>
        <button className={classes.drop__btn}> ציוד נלווה </button>
        <div className={classes.drop__down__content}>
<<<<<<< HEAD
          <a href="category?Id=4&subId=">שמשיות</a>
          <a href="category?Id=4&subId=1">מיזוג</a>
          <a href="category?Id=4&subId=">פרגודים</a>
          <a href="category?Id=4&subId=">אוהלים</a>
          <a href="category?Id=4&subId=4">מפות ומפיות</a>
          <a href="category?Id=4&subId=3">כלי חימום וקירור</a>
=======
          <a href="#">אוהלים</a>
          <a href="#">מיזוג</a>
          <a href="#">שמשיות</a>
          <a href="#">מפות</a>
          <a href="#">מפיות</a>
          <a href="#">כלי חימום וקירור מזון</a>
          <a href="#">פרגודים</a>
>>>>>>> 82553ac989c9470912743a709c53414a3c56bd98
        </div>
      </div>
    </div>
  </div>
);

export default navigationItems;
