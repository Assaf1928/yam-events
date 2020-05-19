import React, {Component} from 'react';
import Axuiliary from '../Auxiliary/Auxiliary'
import classes from './Layout.module.css'
import Footer from '../../Components/footer/footer'
import Toolbar from '../../Components/navigation/toolbar/toolbar'
import SideDrawer from '../../Components/navigation/sideDrawer/sideDrawer'
class Layout extends Component {

    state = {
    showSideDrawer: false
    }
    sideDrawerClosedHandler = () => {
        this.setState( { showSideDrawer: false } );
    }

    sideDrawerToggleHandler = () => {
        this.setState( ( prevState ) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        } );
    }


    render () {
        return (
            <Axuiliary>
                  <Toolbar
                    drawerToggleClicked={this.sideDrawerToggleHandler} 
                    />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />
                <div className={classes.relative}>
                     <main>{this.props.children}</main>
                    <Footer/>
                    </div>
            </Axuiliary>
        )
    }



}

export default Layout