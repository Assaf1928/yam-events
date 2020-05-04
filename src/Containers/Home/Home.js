import React, { Component } from 'react';

import BigCarousel from '../../Components/bigCarousel/bigCarousel';
import SmallCarousel from '../../Components/smallCarousel/smallCarousel';
import About from '../../Components/about/About';


class Home extends Component {
   
    render(){

        var layoutStyle={
            backgroundColor: '#5d6769',
            width: '100vw',
            height: '10vh'
        }
        return(
            <div>
                <div style={layoutStyle}>layout</div>
                <BigCarousel />
                <About />
                <SmallCarousel/>
            </div>
        );
    }
}

export default Home;