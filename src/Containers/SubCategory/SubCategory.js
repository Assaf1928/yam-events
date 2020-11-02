import React, {Component} from 'react';
import Card from '../../Components/card/card';
import classes from './SubCategory.module.css'
import axios from 'axios'
import img1 from '../../imgs/examples/1.jpg'
class SubCategory extends Component {


    state = {
        data: [],
        path: ''
    }

        componentDidMount() {
            const urlParams = new URLSearchParams(window.location.search);
            const url = new URL('http:/localhost:3001/sub')

            axios.get('http://localhost:3001/sub', {
                params: {
                    id: urlParams.get('Id'),
                    subId: urlParams.get('subId')

                }
            })
            .then(res => 
                {
                    console.log(res.data.files)
                    this.setState({data: res.data.files, path: res.data.path})

                }).catch(err => console.log(err))
            }
    

            
    
render() {
    let cards =  'no data to show'
    if(this.state.data) {
    cards = this.state.data.map((img,index) => {
        let url =  this.state.path + img;
        let name = img.split('.').slice(0, -1).join('.')
        return (<Card key={index} img={url} name={name}/>)
    })
}
    return (
       
        <div className={classes.cards__container}>
        {cards}
        </div>
    )
}


}

export default SubCategory