import React, { Component } from 'react';

import BigCarousel from '../../Components/bigCarousel/bigCarousel';
import About from '../../Components/about/About';
import SmallCarousel from '../../Components/smallCarousel/smallCarousel';
import classes from './Home.module.css';


class Home extends Component {

    state = {
        isTop: true
    } 

    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
      }


      componentDidMount(){

        console.log(document.documentElement.clientHeight);
        window.addEventListener('scroll',() => {
            const ToolbarIsTop = window.scrollY > 0 ;
             console.log((window.screen.height/100)*15);
            console.log(ToolbarIsTop);
            if(this.state.isTop !== ToolbarIsTop)
            this.setState({ isTop: ToolbarIsTop });
        });
    }

    render(){
        return(
            <div>
                <BigCarousel isTop={this.state.isTop} />
                <About  />
                <SmallCarousel pause={(event) => this.a(event)} />
            </div>
        );
    }
}

export default Home;