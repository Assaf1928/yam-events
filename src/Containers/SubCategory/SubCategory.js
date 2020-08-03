import React, {Component} from 'react';
import Card from '../../Components/card/card';
import classes from './SubCategory.module.css'
import axios from 'axios'

class SubCategory extends Component {


    state = {
        data: [],
        path: ''
    }

        componentDidMount() {
            const urlParams = new URLSearchParams(window.location.search);
            const url = new URL("http:/localhost:3001/category")

            axios.get('/sub', {
                params: {
                    id: urlParams.get('id'),
                    subId: urlParams.get('subId')

                }
            })
            .then(res => 
                {
                    this.setState({data: res.data.files, path: res.data.path})

                }).catch(err => console.log(err))
            }
    

            
    
render() {
    let cards =  'no data to show'
    if(this.state.data)
    {
    cards = this.state.data.map(img => {
        console.log(this.state.path + img)
        let url =  this.state.path + img;
        console.log(url)
        return (<Card img={url}/>)
    })
}
    return (
        <div className={classes.cards__container}>
            {console.log(cards)}
        {cards}
        </div>
    )
}


}

export default SubCategory