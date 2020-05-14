import React, { useState } from 'react';
import classes from './card.module.css'
import imgex from '../../imgs/examples/4.jpg'
import Modal from '../UI/modal/modal';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary'
import Carousel from 'react-bootstrap/Carousel'
const Card = () => {
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
    <img
      className="d-block w-100"
      src={imgex}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={imgex}      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={imgex}      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
        </Modal>
           <img src={imgex}  onClick={showModal}></img>
           <div className={classes.item__text}>סכו"ם מעוצב</div>
     </div>
     </Auxiliary>
      )
}

export default Card;