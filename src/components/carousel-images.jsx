import React, { Component } from 'react';
import PropTypes from "prop-types";
import Carousel from 'react-bootstrap/Carousel';

class CarouselImages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imagenes: this.props.imagenes
        }
    }

    render(){
        return (this.state.imagenes !== undefined ? <Carousel>
            {this.state.imagenes.map((imagen) => (
                <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={process.env.PUBLIC_URL+"/assets/noImage.png"}
                  alt="noImage"
                />
                <Carousel.Caption>
                    <h3>Sin imagen</h3>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
            </Carousel> : <Carousel className="carousel-nun_content-size"><Carousel.Item>
                <img
                  className="d-block w-100"
                  src={process.env.PUBLIC_URL+"/assets/noImage.png"}
                  alt="noImage"
                />
                <Carousel.Caption>
                    <h3>Sin imagen</h3>
                </Carousel.Caption>
              </Carousel.Item> 
              </Carousel>
            )
        
    }
}

CarouselImages.propTypes = {
    imagenes: PropTypes.object
}

export default CarouselImages;