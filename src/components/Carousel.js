import React, {Component} from 'react';
import img1 from '../1.jpeg';
import img2 from '../2.jpeg';

class Carousel extends Component {
    render(){
        return(
          <div className="container">
              <div className="row">
                  <div className="col-12 mb-5">
                      <div className="carousel slide carousel-fade" data-ride="carousel" id="slider">
                          <ol className="carousel-indicators">
                              <li data-target="#slider" data-slide-to="0" className="active"></li>
                              <li data-target="#slider" data-slide-to="1"></li>
                          </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active" >
                                <img src={img1} className="d-block w-100" alt="img"/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5 className="display-4">Estructura Metalica</h5>
                                    <p>loremdksjdskjsdskjdkjdk</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={img2} className="d-block w-100" alt="img"/>
                                <div className="carousel-caption d-none d-md-block">
                                    <h5 className="display-4">Techado de Aluzcin en Galpon</h5>
                                    <p>loremdksjdskjsdskjdkjdk</p>
                                </div>
                            </div>
                            <a href="#slider" className="carousel-control-prev" data-slide="prev" role="button">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only" aria-hidden="true">Anterior</span>
                            </a>
                            <a href="#slider" className="carousel-control-next" data-slide="next" role="button">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only" aria-hidden="true">Siguiente</span>
                            </a>
                        </div>
                      </div>
                  </div>
              </div>
          </div>
        )
    }
}

export default Carousel;