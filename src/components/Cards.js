import React from 'react';
import Card from './Card';
import '../components/cardx.css';
import image3 from '../3.jpeg';
import image4 from '../4.jpeg';
import image5 from '../5.jpeg';
import image6 from '../6.jpeg';
import image7 from '../7.jpeg';
import image8 from '../8.jpg';
const cards = [
    {
        id:1,
        title:'Impermeabilizacion de Techo',
        image: image3,
        text: ""
    },
    {
        id:2,
        title:'Aplicacion de lona Asfaltica',
        image: image4,
        text: ""
    },
    {
        id:3,
        title:'Servicios de Plomeria',
        image: image5,
        text: ""
    },
    {
        id:4,
        title:'Reparacion y pintura en general',
        image: image6,
        text: ""
    },
    {
        id:5,
        title:'Remodelacion de Plaza',
        image: image7,
        text: ""
    },
    {
        id:6,
        title:'Mensura catastral',
        image: image8,
        text: ""
    }
    
];

function Cards() {
    console.log(cards)
    return (
       <div className="container h-100">
           <hr className="bg-info"/>
           <div className="text-center display-4">NUESTROS SERVICIOS</div>
           <p className="text-secondary text-center">En INDICONSSA nuestro principal objetivo es ofrecer al mercado el mejor servicio de Plomeria, eletricidad, decoracion de interiror, etructura metalica, tasacion inmobiliaria, etc.</p>
           <hr className="bg-info"/>
           <div className="row">
               
               {
                   cards.map(card =>(
                       
                    <div className="col-md-4 col-12" key={card.id}>
                    <Card title={card.title} imageURL={card.image}/>
                </div>

                   ))
               }
               
           </div>
       </div>
    )
}

export default Cards