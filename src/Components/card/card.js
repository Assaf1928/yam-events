import React, { useState } from 'react';
import classes from './card.module.css'
import imgex from '../../imgs/examples/4.jpg'
import Modal from '../UI/modal/modal'
import Auxiliary from '../../hoc/Auxiliary/Auxiliary'
import Carousel from 'react-bootstrap/Carousel'

const Card = (props) => {
    const [show, setShow] = useState(false)

    const showModal = () => {
        setShow(true)
    };

    const  hideModal = () => {
        setShow(false)
      };
      return (
        
          <Auxiliary>
       <div className={classes.item}>
       <Modal show={show} handleClose={() => hideModal()}>
           <div className={classes.carousel__container}>
       <Carousel>
  <Carousel.Item>
    <img className={classes.carousel__img}
      src={imgex} alt="test"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img className={classes.carousel__img}
      src={imgex}      alt="Third slide"   />
  </Carousel.Item>
  <Carousel.Item>
    <img className={classes.carousel__img}
      src={imgex}      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>
</div> 
        </Modal>
           <img src={imgex /*props.img */} className={classes.card__img} alt="test" onClick={showModal}></img>
           <div className={classes.item__text}>סכו"ם מעוצב</div>
     </div>
     </Auxiliary>
      )
}

export default Card;