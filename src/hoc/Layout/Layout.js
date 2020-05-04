import React, {Component} from 'react';
import Axuiliary from '../Auxiliary/Auxiliary'
import classes from './Layout.module.css'
import Footer from '../../Components/footer/footer'
class Layout extends Component {

    render () {
        return (
            <Axuiliary>
                     <main>{this.props.children}</main>
                    <Footer/>
            </Axuiliary>
        )
    }



}

export default Layout