import React, { Component } from 'react';

import BigCarousel from '../../Components/bigCarousel/bigCarousel';
import About from '../../Components/about/About';
import SmallCarousel from '../../Components/smallCarousel/smallCarousel';
import classes from './Home.module.css';


class Home extends Component {

<<<<<<< HEAD
    
    // a = (event) => {
    //     console.log(event)
    //  console.log(event.target.innerHTML == "&#x23f8;" )
    // }
=======
>>>>>>> master
   
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
      }

    render(){
<<<<<<< HEAD
        console.log("esrfgesrfg");
=======
>>>>>>> master
        return(
            <div>
                <BigCarousel />
                <About  />
                <SmallCarousel pause={(event) => this.a(event)} />
            </div>
        );
    }
}

export default Home;