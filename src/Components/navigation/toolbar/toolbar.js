import React from "react";
import classes from "./toolbar.module.css";
//import Logo from '../../Logo/Logo';
import NavigationItems from "../navigationItems/navigationitems";
import DrawerToggle from "../sideDrawer/drawerToggle/drawerToggle";

import LogoImg from "../../../image/logo/logo.png";
//import Header from '../../Header/Header'   <div>
const toolbar = (props) => (
  // <header
  //   className={props.isTop !== true ? classes.toolbarTop : classes.toolbar}
  // >
  <header className={classes.toolbarTop}>
    
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <nav className={classes.desktop__only}>
      <NavigationItems />
    </nav>
     <div className={classes.logo}>
      <img src={LogoImg}/>
    </div> 
  </header>
);

export default toolbar;
