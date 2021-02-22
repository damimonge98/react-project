import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./carousel.css";


export default function ImageCarousel () {
    return (
    <div className = "carouselContainerDiv">
        <Carousel>

            <Carousel.Item interval={2000}>
                    <img 
                    className="d-block w-100"
                    className= "carouselImage"
                    src="https://www.columbus-outdoor.com/blog/wp-content/uploads/2019/11/IMG_5252.jpg"
                    alt="First slide"
                    />
                <Carousel.Caption>
                    <h3>BARILOCHE</h3>
                    <p className = "captionText"> En el sur de Argentina te esperan montañas, paseos, atardeceres frente al lago, brindis con cerveza artesanal, el chocolate y cien razones más para disfrutar tu próximo viaje.</p>
                </Carousel.Caption>
            </Carousel.Item>


            <Carousel.Item interval={2000}>
                    <img
                    className="d-block w-100"
                    className= "carouselImage"
                    src="http://www.alicanteturismo.com.ar/wp-content/uploads/2016/05/esterosibera.jpg"
                    alt="Second slide"
                    />
                <Carousel.Caption>
                    <h3>LITORAL SOÑADO</h3>
                    <p>Enmarcado por la famosa tierra colorada, por sus saltos de agua, impenetrables selvas y extensos ríos; el litoral sigue siendo uno de los destinos mas elegidos por miles de viajeros.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={2000}>
                    <img
                    className="d-block w-100"
                    className= "carouselImage"
                    src="https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2017/09/04171015/Contenido-Turismo-sf-1.jpg"
                    alt="Third slide"
                    />
                <Carousel.Caption>
                    <h3>ENCANTO JUJEÑO</h3>
                    <p>Caminar por la tierra jujeña es retar al paso del tiempo. Junto a la Pachamama desaparecen las barreras y en pocos kilómetros se puede apreciar una multiplicidad de paisajes como cerros multicolores, selvas y hasta grandes desiertos de altura.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={2000}>
                    <img
                    className="d-block w-100"
                    className= "carouselImage"
                    src="https://s3.amazonaws.com/arc-wordpress-client-uploads/infobae-wp/wp-content/uploads/2017/09/04171024/Contenido-Turismo-sf-3.jpg"
                    alt="Third slide"
                    />
                <Carousel.Caption>
                    <h3>CHUBUT</h3>
                    <p>Famosa por su biodiversidad, que le valió el reconocimiento de Patrimonio Mundial; querida por la belleza y la inmensidad de su paisaje que se adentra en las aguas azules, Chubut enamora a cualquiera que lo visita.</p>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    </div>)
}