import React, { Component } from 'react';

import BigCarousel from '../../Components/bigCarousel/bigCarousel';
import About from '../../Components/about/About';
import SmallCarousel from '../../Components/smallCarousel/smallCarousel';
import axios from 'axios'

class Home extends Component {

    componentDidMount() {
        const url = new URL("http:/localhost:3000/category")
        axios.get(url)
        .then(res => 
            {
               this.setState({ bigCarouselImages: res.data})
               console.log(this.state.bigCarouselImages)
            }).catch(err => console.log(err))
        }
           

        state = {
            bigCarouselImages: []
        }

    render(){
        return(
            <div>
                <BigCarousel data={this.state.bigCarouselImages} />
                <About  />
                <SmallCarousel />
            </div>
        );
    }
}

export default Home;