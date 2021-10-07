import React from 'react';


export class Footer extends React.Component {
  render(){
    return(
    
    
    <footer className="text-center text-lg-start bg-light text-muted">
 
    <section
      className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
    >
   
      
  
      
      <div>
        <a href="/" className="me-4 text-reset">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="/" className="me-4 text-reset">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="/" className="me-4 text-reset">
          <i className="fab fa-google"></i>
        </a>
        <a href="/" className="me-4 text-reset">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="/" className="me-4 text-reset">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="/" className="me-4 text-reset">
          <i className="fab fa-github"></i>
        </a>
      </div>
      
    </section>
    
  
  
    <section className="">
      <div className="container text-center text-md-start mt-5">
       
        <div className="row mt-1">
        
          <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
           
            <h6 className="text-uppercase fw-bold mb-4">
              <i className="fas fa-gem me-3"></i>INDICONSSA
            </h6>
            
          </div>
          
  
          
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          
            <h6 className="text-uppercase fw-bold mb-4">
              Redes Sociales
            </h6>
            <p>
              <a href="#!" className="text-reset">Instagram</a>
            </p>
            <p>
              <a href="#!" className="text-reset">facebook</a>
            </p>
           
          </div>
          
  
          
          
        
  
         
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
           
            <h6 className="text-uppercase fw-bold mb-4">
              Contactos
            </h6>
            <p><i className="fas fa-home me-3"></i> C/ Orlando Martinez #66 Sector Bayona SD OESTE.</p>
            <p>
              <i className="fas fa-envelope me-3"></i>
              morphymartinez@gmail.com
            </p>
            <p><i className="fas fa-phone me-3"></i> 809-237-8067 / 829-941-5435</p>
        
      
          </div>
         
        </div>
      
      </div>
    </section>
  
  
    
    <div className="text-center p-1">
      © 2021 Copyright:
  
    </div>
  
  </footer>
    )
  }
}

export default Footer;