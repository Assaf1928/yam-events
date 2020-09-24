import React from "react";

import classes from "./footer.module.css";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillMail,
  AiFillPhone,
} from "react-icons/ai";

const footer = () => (
  <footer className={classes.footer__container}>
    <div className={classes.icons__row}>
      <div className={classes.row__item}>
        <AiFillFacebook />
      </div>
      <div className={classes.row__item}>
        <AiFillInstagram />
      </div>
      <div className={classes.row__item}>
        <AiFillMail />
      </div>
      <div className={classes.row__item}>
        <AiFillPhone />
      </div>
    </div>
  <div className={classes.links_container}>
    <div>
      
  <ul aria-label="כלי הגשה">
    <li>צלחות</li>
    <li>כוסות</li>
    <li>סכום</li>
    <li>קערות בר</li>
    <li>קערות הגשה</li>
    <li>סלטרום</li>
    <li>שפינגום</li>
    <li>סירום</li>
    <li>מגשי פינוי</li>


  </ul>
    </div>

    <div>
    <ul aria-label="ציוד אלטרנטיבי">
    <li>פוטונים</li>
    <li>אוהלים</li>
    <li>מחצלות</li>
    <li>אדומים</li>
    <li>פנפום</li>
  </ul>
    </div>

    <div>
    <ul aria-label="ציוד נלווה">
    <li>שמשיות</li>
    <li>מיזוג</li>
    <li>פרגודים</li>
    <li>אוהלים</li>
    <li>מפות ומפיות</li>
    <li>כלי חימום וקירור</li>

  </ul>
    </div>

    <div>
    <ul aria-label="ריהוט">
    <li>שולחנות</li>
    <li>כסאות</li>
    <li>מזנונים</li>
  </ul>
    </div>

    </div>
  </footer>
);

export default footer;
