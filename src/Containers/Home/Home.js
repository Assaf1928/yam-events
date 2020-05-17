import React, { Component } from 'react';

import BigCarousel from '../../Components/bigCarousel/bigCarousel';
import About from '../../Components/about/About';
import SmallCarousel from '../../Components/smallCarousel/smallCarousel';
import classes from './Home.module.css';


class Home extends Component {

    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
      }

    render(){
<<<<<<< HEAD

        var layoutStyle={          
            backgroundColor: '#5d6769',
            width: '100vw',
            height: '15vh' 
        }
        
        return(
            <div>
                <div style={layoutStyle}></div>
=======
        return(
            <div>
                <div className={classes.layaut}>
                    <div className={classes.icon__div} >      
                    </div>
                    <div className={classes.logo__div}>
                        <h1>ים אירועים</h1>
                    </div>
                </div>
>>>>>>> origin/tzach
                <BigCarousel />
                <About />
                <SmallCarousel/>
            </div>
        );
    }
}

export default Home;