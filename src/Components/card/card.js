import React, { useState } from "react";
import classes from "./card.module.css";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";


const Card = (props) => {
  return (
    <Auxiliary>
      <div className={classes.item}>
        <div className={classes.card__img_container}>
          <div
            className={classes.card__img}
            alt={props.id}
            onClick={props.showModal}
            style={{ backgroundImage: "url(" + props.img + ")" }}
          ></div>
        </div>
        <div className={classes.item__text}>
          <p>{props.name}</p>
          <div className={classes.hr}></div>
        </div>
      </div>
    </Auxiliary>
  );
};

export default Card;
