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
  </footer>
);

export default footer;
