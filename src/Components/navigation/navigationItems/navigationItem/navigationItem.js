import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './navigationItem.module.css';
const navigationItem = ( props ) => (
    <li className={classes.navigation__Item}>
        <NavLink 
            to={props.link}
            exact={props.exact}
            activeClassName={classes.active}>{props.children}</NavLink>
    </li>
);

export default navigationItem;