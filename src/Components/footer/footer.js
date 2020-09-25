import React from "react";

import classes from "./footer.module.css";
import { GrServices } from "react-icons/gr";
import { AiOutlineClear } from "react-icons/ai";
import { FaHandsHelping, FaTruckMoving } from "react-icons/fa";
import Links from "./links/links";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillMail,
  AiFillPhone,
} from "react-icons/ai";
import classNames from "classnames";

const footer = () => (
  <footer className={classes.footer__container}>
    <div className={classes.icons__row}>
      <div>
        <AiFillFacebook />
      </div>
      <div>
        <AiFillInstagram />
      </div>
      <div>
        <AiFillMail />
      </div>
      <div>
        <AiFillPhone />
      </div>
    </div>
    <div className={classes.zigzag}></div>
    <div className={classes.bottom}>
      <div
        className={classNames({
          [classes.flex_item]: true,
          [classes.Links_container]: true,
        })}
      >
        <Links />
      </div>
      <div
        className={classNames({
          [classes.flex_item]: true,
          [classes.vl_container]: true,
        })}
      >
        <div className={classes.vl}></div>
      </div>
      <div className={classes.flex_item}>
        <div className={classes.credit}>
          <p>@כל הזכויות שמורות לים אירועים</p>
          <p>
            האתר נבנה על ידי : אסף שהרבני assaf1928@gmail.com , צח פוני
            tzachpony11@gmail.com{" "}
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default footer;
