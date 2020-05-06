import React, { Component } from 'react';

import BigCarousel from '../../Components/bigCarousel/bigCarousel';
import SmallCarousel from '../../Components/smallCarousel/smallCarousel';
import About from '../../Components/about/About';


class Home extends Component {
   
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
      }

    render(){

        var layoutStyle={          
            backgroundColor: '#5d6769',
            width: '100vw',
            height: '15vh' 
        }
        
        return(
            <div>
                <div style={layoutStyle}></div>
                <BigCarousel />
                <About />
                <SmallCarousel/>
            </div>
        );
    }
}

export default Home;