import React from 'react';
import Header from './Header';
import '../components/contact.css';

export const Contact = () => {
    return (
        <div className="container">
            <Header/>
            <hr/>
            <h2 className="text-center mb-2">Contactanos</h2><hr className="bg-info"/>
        <section className="section">
           
            <form action="/contact" method="post" class="form_contact"id="form">
            <i class="far fa-inbox-in fa-5x herra"></i>
            <h5 class="text-center mt-3">Contactanos</h5>
            <div class="user_info">

                <input type="text" placeholder="Nombre" name="name" autofocus required id="name" />

                <input type="number" placeholder="Telefono / celular" required name="phone" step="any"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" id="phone" />

                <input type="email" placeholder="Correo eletronico" name="email" required id="email" />

                <textarea required placeholder="Detalles del servicio que solicita:" name="message"
                    id="mensaje" />

                <input type="submit" class="btn btn-info" data-toggle="modal" data-target="#ma-modal" value="Enviar" id="btnSend" />
            </div>
        </form>
        </section>
            
        </div>
    )
}
export default Contact;