import React from 'react';
import '../components/cardx.css';
 
function Card({title, imageURL}) {
    
    return (
        <div className="card mt-5 mb-5 text-center ">
            <div className="over">
            <img className="imgcard card-img-top" src={imageURL}  alt="img"/>
            </div>
           <div className="card-body bg-dark text-white">
               
               <h4 className="card-title">{title}</h4>
               <p className="card-text text-white">En INDICONSSA nuestro principal objetivo es ofrecer al mercado el mejor servicio de Plomeria, eletricidad, decoracion de interiror, etructura metalica, tasacion inmobiliaria, etc.</p>
               
           </div>
        </div>
    )
}

export default Card
