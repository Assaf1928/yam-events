import React from 'react';
import classes from './navigationItems.module.css';
import NavigationItem from './navigationItem/navigationItem';
const navigationItems = ( props ) => (
    <ul className={classes.navigation__items}>
        <NavigationItem link="/" exact>בית</NavigationItem>
        <NavigationItem link="/category">קטגוריה</NavigationItem>
        <NavigationItem link="/card">כרטיסיה</NavigationItem>

    </ul>
    )

    export default (navigationItems)