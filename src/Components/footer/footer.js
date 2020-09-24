import React from "react";

import classes from "./footer.module.css";
import { GrServices } from "react-icons/gr";
import { AiOutlineClear } from "react-icons/ai";
import { FaHandsHelping, FaTruckMoving } from "react-icons/fa";

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
  </footer>
);

export default footer;
