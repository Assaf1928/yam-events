import React from "react";

import classes from "./footer.module.css";
import { GrServices } from "react-icons/gr";
import { AiOutlineClear } from "react-icons/ai";
import { FaHandsHelping, FaTruckMoving } from "react-icons/fa";
import Links from './links/links'
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillMail,
  AiFillPhone,
} from "react-icons/ai";

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
      {/* <div>
        <GrServices />
      </div>
      <div>
        <AiOutlineClear />
      </div>
      <div>
        <FaHandsHelping />
      </div>
      <div>
        <FaTruckMoving />
      </div> */}
    </div>
    <div className={classes.bottom}>
      <div className={classes.flex_item}>
      <Links/>
      </div>
      <div className={classes.flex_item}>
      <div className={classes.vl}></div>
      </div>
    <div className={classes.flex_item}>
      asdasdsa
      
    </div>
    </div>
  </footer>
);

export default footer;
