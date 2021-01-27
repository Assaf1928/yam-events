import React, { Component, useRef } from "react";
import Card from "../../Components/card/card";
import classes from "./SubCategory.module.css";
import axios from "axios";
import img1 from "../../image/subCategory/servingDishes/servingBowls/קערה ידית.jpeg";import CarouselItems from "../../Components/carouselItems/carouselItems";

import Modal from "../../Components/UI/modal/modal";
import Carousel from "react-bootstrap/Carousel";
class SubCategory extends Component {
  state = {
    data: [],
    path: "",
    title: "",
    ifShowModal: false,
    activeIndex: 0,
  };

  componentDidMount() {
    const urlParams = new URLSearchParams(window.location.search);

    axios
      .get("http://localhost:3001/sub", {
        params: {
          id: urlParams.get("Id"),
          subId: urlParams.get("subId"),
        },
      })
      .then((res) => {
        console.log(res.data);
        this.setState({
          data: res.data.files,
          path: res.data.path,
          title: res.data.title,
        });
      })
      .catch((err) => console.log(err));
  }

  showModal = (e, id) => {
    this.setState({
      ifShowModal: true,
      activeIndex: id,
    });
  };

  hideModal = () => {
    this.setState({ ifShowModal: false });
  };

  setActiveIndexHandler = (activeIndex) => {
    this.setState({ activeIndex: activeIndex });
  };

  render() {
    let cards = "לא קיימות תמונות להמחשה !";
    if (this.state.data.length !== 0) {
      cards = this.state.data.map((img, index) => {
        //let url = this.state.path + img;
        let url = img1;
        let name = img.split(".").slice(0, -1).join(".");
        return (
          <Card
            key={index}
            setActiveIndex={this.setActiveIndexHandler}
            id={index}
            img={url}
            showModal={(event) => this.showModal(event, index)}
            name={name}
          />
        );
      });
    }

    return (
      <div className={classes.cards__container}>
        <h1>{this.state.title}</h1>
        <Modal show={this.state.ifShowModal} handleClose={this.hideModal}>
          <div className={classes.carousel__container}>
            <CarouselItems
              setActiveIndex={this.setActiveIndexHandler}
              activeIndex={this.state.activeIndex}
              dataItems={this.state.data}
            />
          </div>
        </Modal>
        {cards}
      </div>
    );
  }
}

export default SubCategory;
