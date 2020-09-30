import React from "react";

import generalDesign from "../css/generalDesign.module.css";
import classes from "./photosFromEvents.module.css";
import classNames from "classnames";
import img1 from "../../image/photosFromEvents/1.jpg";
import img2 from "../../image/photosFromEvents/2.jpg";
import img3 from "../../image/photosFromEvents/3.jpg";
import img4 from "../../image/photosFromEvents/4.jpg";
import img5 from "../../image/photosFromEvents/5.jpg";
import img6 from "../../image/photosFromEvents/6.jpg";
import img7 from "../../image/photosFromEvents/7.jpg";
import img8 from "../../image/photosFromEvents/8.jpg";


const photosFromEvents = (props) => {
  return (
    <div className={classes.photosFromEvents_container}>
        <h1>האירועים שלנו</h1>
      <img src={img2}></img>
      <img src={img3}></img>
      <img src={img1}></img>
      <img src={img5}></img>
      <img src={img6}></img>
      <img src={img7}></img>
      <img src={img4}></img>
      {/* <img src={img8}></img>
      <img src={img1}></img> */}
    </div>
  );
};

export default photosFromEvents;
