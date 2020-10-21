import React, { Component } from "react";
import classes from "./Home.module.css";
import BigCarousel from "../../Components/bigCarousel/bigCarousel";
import Header from "../../Components/header/header";
import Welcome from "../../Components/welcome/welcome";
import ServiceDescription from "../../Components/serviceDescription/serviceDescription";
import PhotosFromEvents from "../../Components/photosFromEvents/photosFromEvents";
import About from "../../Components/about/About";
import SmallCarousel from "../../Components/smallCarousel/smallCarousel";
import axios from "axios";

import classNames from "classnames";

import { GrServices } from "react-icons/gr";
import { AiOutlineClear } from "react-icons/ai";
import { FaHandsHelping, FaLeaf, FaTruckMoving } from "react-icons/fa";

class Home extends Component {
  componentDidMount() {
    const url = new URL("http:/localhost:3001/category");
    axios
      .get(url)
      .then((res) => {
        this.setState({ bigCarouselImages: res.data });
        console.log(this.state.bigCarouselImages);
      })
      .catch((err) => console.log(err));
  }

  state = {
    bigCarouselImages: [],
    isTop: true,
    serviceDescriptionCardsArr: [
      {
        icon: <AiOutlineClear />,
        title: "ציוד מתוחזק ונקי",
        description: (
          <article dir="rtl">
            הציוד מתוחזק על הצד הטוב ביותר! <br /> לאחר כל אירוע הציוד עובר
            ניקוי ושיפוץ כדי שתהנו מציוד במצב חדש
          </article>
        ),
      },

      {
        icon: <FaTruckMoving />,
        title: "שינוע",
        description: <article dir="rtl">הובלה לכל חלקי הארץ</article>,
      },
      {
        icon: <FaHandsHelping />,
        title: "שירות אמין",
        description: (
          <article dir="rtl">23 שנה של שירות אמין, מסור ואדיב</article>
        ),
      },
      {
        icon: <GrServices />,
        title: "שירות למגוון האוכלוסייה",
        description: (
          <ul dir="rtl">
            <li>אוכלוסיה מהמגזר הפרטי</li>
            <li>קייטרינגים</li>
            <li>מפיקים</li>
          </ul>
        ),
      },
    ],
    visibleSlides: 5,
    ifPlayAnimationPhotosFromEvent: false,
    ifPlayAnimationAbout: false,
    ifPlayAnimationTo_top: false,
  };

  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  GetCountImg() {
    let visibleSlides = 5;
    const a = window.innerWidth / window.innerHeight;
    if (a < 0.4) {
      visibleSlides = 1;
    } else if (a < 0.7) {
      visibleSlides = 2;
    } else if (a < 1) {
      visibleSlides = 3;
    } else if (a < 1.3) {
      visibleSlides = 4;
    }
    return visibleSlides;
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.setState({ visibleSlides: this.GetCountImg() });
    window.addEventListener("resize", () => {
      this.setState({ visibleSlides: this.GetCountImg() });
    });

    window.addEventListener("scroll", () => {
      console.log("scrill");
      if (this.state.ifPlayAnimationPhotosFromEvent == false)
        if (window.innerHeight * 0.3 <= window.pageYOffset) {
          this.setState({ ifPlayAnimationPhotosFromEvent: true });
        }
      if (this.state.ifPlayAnimationAbout == false)
        if (window.innerHeight * 1.8 <= window.pageYOffset) {
          this.setState({ ifPlayAnimationAbout: true });
        }
    });
    // window.addEventListener('scroll',() => {
    //     console.log(window.scrollY);
    //     console.log(window.innerHeight/100*8);
    //     const ToolbarIsTop = window.scrollY > ((window.innerHeight/100)*8) ;
    //     if(this.state.isTop !== ToolbarIsTop)
    //     this.setState({ isTop: ToolbarIsTop });
    // });
  }

  render() {
    return (
      <div>
        {/* <BigCarousel isTop={this.state.isTop} /> */}
        {/* <Header isTop={this.state.isTop} /> */}
        <Welcome />
        <ServiceDescription
          serviceDescriptionCardsArr={this.state.serviceDescriptionCardsArr}
        />
        <PhotosFromEvents
          ifPlayAnimationPhotosFromEvent={
            this.state.ifPlayAnimationPhotosFromEvent
          }
        />
        <a
          href="#"
          className={classNames({
            [classes.to_top]: true,
            [classes.AnimationTo_top]: this.state.ifPlayAnimationTo_top,
          })}
        ></a>
        <SmallCarousel
          visibleSlides={this.state.visibleSlides}
          pause={(event) => this.a(event)}
        />
        <About ifPlayAnimationAbout={this.state.ifPlayAnimationAbout} />
      </div>
    );
  }
}

export default Home;
