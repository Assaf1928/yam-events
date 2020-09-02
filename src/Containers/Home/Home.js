import React, { Component } from 'react';

import BigCarousel from '../../Components/bigCarousel/bigCarousel';
import Header from '../../Components/header/header';
import Welcome from '../../Components/welcome/welcome';
import About from '../../Components/about/About';
import SmallCarousel from '../../Components/smallCarousel/smallCarousel';
import classes from './Home.module.css';


class Home extends Component {

    state = {
        isTop: true,
    } 

    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
      }


      componentDidMount(){
        // window.addEventListener('scroll',() => {
        //     console.log(window.scrollY);
        //     console.log(window.innerHeight/100*8);
        //     const ToolbarIsTop = window.scrollY > ((window.innerHeight/100)*8) ;
        //     if(this.state.isTop !== ToolbarIsTop)
        //     this.setState({ isTop: ToolbarIsTop });
        // });
    }

    render(){
        return(
            <div>
                {/* <BigCarousel isTop={this.state.isTop} /> */}
                <Header isTop={this.state.isTop}/>
                <Welcome/>
                <About  />
                <SmallCarousel pause={(event) => this.a(event)} />
            </div>
        );
    }
}

export default Home;