import React, {Component} from 'react';
import Card from '../../Components/card/card';
import classes from './SubCategory.module.css'

class SubCategory extends Component {

render() {

    return (
        <div className={classes.cards__container}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>

        </div>
    )
}


}

export default SubCategory