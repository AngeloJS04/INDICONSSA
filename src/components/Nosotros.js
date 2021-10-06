import React from 'react';
import Header from './Header';
import img9 from '../9.jpeg';
import '../components/nosotros.css'

function Nosotros() {
    return (
        <div>
            <Header/>
            <hr/>
            <div className="container">
            <h2 className="text-center mb-2">Nosotros</h2><hr className="bg-info"/>
            <div className="row mb-5">
                
                <div className="col-md-4 col-12">
                <img className="img-nosotros" src={img9}  alt="img"/>
                </div>
                <div className="col-md-8 col-12 mt-5">
                    <p className="font-weight-light">Tenemos el compromiso de resolver las necesidades de los clientes, proporcionando soluciones de ingeniería y abastecimiento de materias primas.
                        Somos una empresa especializada en la industria de eletricidad, plomeria, bienes raices, levantamiento topografico, tasacion inmobiliaria, etc.</p>
                </div> 
            </div>
            <hr/>
            <div  className="row">
                <div className="col-md-4 col-12">
                    <h4 className="text-info text-center">Vision</h4>
                    <p>Llegar a cada rincon a nivel nacional nuestros servicios profecionales y tecnicos y competir con las mejores propuestas.</p>
                </div>
                <div className="col-md-4 col-12">
                    <h4 className="text-info text-center">Mision</h4>
                <p>Dar al cliente la solucion esperada en cada servicio brindado de tal manera que las contrucciones sean los detalles y conformadas a los procesos calculados.</p>
                </div>
                <div className="col-md-4 col-12">
                <h4 className="text-info text-center">Valores</h4>
                <p>Contamos con los criterios humanos basado en la motivacion de crecer con el fortalecimiento de crear el bien y hacerlo con amor, respeto y cumplimiento.</p>
                </div>
            </div>
            </div>
            
        </div>
    )
}

export default Nosotros
