import React, { useState } from 'react';
import classes from './card.module.css'
import imgex from '../../imgs/examples/imgexample.png'
import Modal from '../UI/modal/modal'
const Card = () => {
    const [show, setShow] = useState(false)

    const showModal = () => {
        setShow(true)
    };

    const  hideModal = () => {
        setShow(false)
      };
      
      return (
    <div className={classes.cards__container}>
    <Modal  show={show} handleClose={() => hideModal()}>
        Hi
    </Modal>

       <div className={classes.item} onClick={showModal}>
           <img src={imgex}></img>
           <div className={classes.item__text}>סכו"ם מעוצב</div>
           </div>
       <div className={classes.item}> 
       <img src={imgex}></img>
       <div className={classes.item__text}>סכו"ם מעוצב</div>   
       </div>
       
        <div  className={classes.item}>
            <img src={imgex}></img>
        <div className={classes.item__text}>סכו"ם מעוצב</div>
    </div>
    <div  className={classes.item}>
            <img src={imgex}></img>
        <div className={classes.item__text}>סכו"ם מעוצב</div>
    </div>
    <div  className={classes.item}>
            <img src={imgex}></img>
        <div className={classes.item__text}>סכו"ם מעוצב</div>
    </div>
    <div  className={classes.item}>
            <img src={imgex}></img>
        <div className={classes.item__text}>סכו"ם מעוצב</div>
    </div>
    <div  className={classes.item}>
            <img src={imgex}></img>
        <div className={classes.item__text}>סכו"ם מעוצב</div>
    </div>      <div  className={classes.item}>
            <img src={imgex}></img>
        <div className={classes.item__text}>סכו"ם מעוצב</div>
    </div>
    </div>
      )
}

export default Card;