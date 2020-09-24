import React, { Component } from "react";
import classes from "./Home.module.css";
import BigCarousel from "../../Components/bigCarousel/bigCarousel";
import Header from "../../Components/header/header";
import Welcome from "../../Components/welcome/welcome";
import About from "../../Components/about/About";
import SmallCarousel from "../../Components/smallCarousel/smallCarousel";
import axios from "axios";

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
  };

  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
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
        <SmallCarousel pause={(event) => this.a(event)} />
        <About />
      </div>
    );
  }
}

export default Home;
