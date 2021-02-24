import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./carousel.css";
import {useHistory} from "react-router-dom";


export default function ImageCarousel () {

    const history = useHistory()

    function onReturn () {
		history.push("/destines")	
	}

    return (
    <div className = "carouselContainerDiv">
        <Carousel>

            <Carousel.Item interval={2000}>
                    <img 
                    onClick = {onReturn}
                    className="d-block w-100"
                    className= "carouselImage"
                    src="https://www.columbus-outdoor.com/blog/wp-content/uploads/2019/11/IMG_5252.jpg"
                    alt="First slide"
                    />
                <Carousel.Caption>
                    <h3 className = "titleCaptionCarousel" onClick = {onReturn}> Descubrí </h3>
                </Carousel.Caption>
            </Carousel.Item>


            <Carousel.Item interval={2000}>
                    <img
                    className="d-block w-100"
                    className= "carouselImage"
                    src="http://www.alicanteturismo.com.ar/wp-content/uploads/2016/05/esterosibera.jpg"
                    alt="Second slide"
                    onClick = {onReturn}
                    />
                <Carousel.Caption>
                    <h3 className = "titleCaptionCarousel" onClick = {onReturn}> Aventurate</h3>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={2000}>
                    <img
                    className="d-block w-100"
                    className= "carouselImage"
                    src="https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2017/09/04171015/Contenido-Turismo-sf-1.jpg"
                    alt="Third slide"
                    onClick = {onReturn}
                    />
                <Carousel.Caption>
                    <h3 className = "titleCaptionCarousel" onClick = {onReturn}> Sorprendete </h3>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={2000}>
                    <img
                    className="d-block w-100"
                    className= "carouselImage"
                    src="https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2017/09/04171024/Contenido-Turismo-sf-3.jpg"
                    alt="Third slide"
                    onClick = {onReturn}
                    />
                <Carousel.Caption>
                    <h3 className = "titleCaptionCarousel" onClick = {onReturn}>Viajá</h3>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    </div>)
}