import React, { Component } from 'react';
import Header from './Header';
import Carousel from './Carousel';
import Cards from './Cards';


export class Inicio extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                <Header/>
                <hr/>
       <Carousel/>
       
     <Cards/>
            </div>
        )
    }
}

export default Inicio
