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
                    src="https://s3-us-west-2.amazonaws.com/denomades/blog/wp-content/uploads/2020/06/03154303/shutterstock_1691334718.jpg"
                    alt="First slide"
                    />
                <Carousel.Caption>
                    <h3>BARILOCHE</h3>
                    <p>En Bariloche te esperan montañas, paseos, atardeceres frente al lago, brindis con cerveza artesanal, el chocolate y cien razones más para disfrutar tu próximo viaje.</p>
                </Carousel.Caption>
            </Carousel.Item>


            <Carousel.Item interval={2000}>
                    <img
                    className="d-block w-100"
                    className= "carouselImage"
                    src="https://i1.wp.com/criptotendencia.com/wp-content/uploads/2019/12/criptomoneda-en-misiones.jpg?fit=1312%2C872&ssl=1"
                    alt="Second slide"
                    />
                <Carousel.Caption>
                    <h3>MISIONES</h3>
                    <p>Enmarcado por la famosa tierra colorada de la provincia, por sus saltos de agua y por su selva impenetrable, Misiones sigue siendo uno de los destinos mas elegidos por miles de viajeros.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={2000}>
                    <img
                    className="d-block w-100"
                    className= "carouselImage"
                    src="https://upload.wikimedia.org/wikipedia/commons/7/77/Calle_de_Tilcara%2C_Jujuy%2C_Argentina.jpg"
                    alt="Third slide"
                    />
                <Carousel.Caption>
                    <h3>JUJUY</h3>
                    <p>Caminar por la tierra jujeña es retar al paso del tiempo. Junto a la Pachamama desaparecen las barreras y en pocos kilómetros se puede apreciar una multiplicidad de paisajes como cerros multicolores, selvas y hasta grandes desiertos de altura.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item interval={2000}>
                    <img
                    className="d-block w-100"
                    className= "carouselImage"
                    src="https://uberblogapi.10upcdn.com/1079x547/smart/filters:format(webp)/blogapi.uber.com/wp-content/uploads/2018/09/AF_Explora%CC%81-estos-X-lugares-para-pasar-el-di%CC%81a-en-Buenos-Aires-1024x512.jpg"
                    alt="Third slide"
                    />
                <Carousel.Caption>
                    <h3>BUENOS AIRES</h3>
                    <p>Diversa, extrema, acogedora, Buenos Aires es una excelente anfitriona, que recibe a personas de todo el mundo y las hace sentirse como en casa.</p>
                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
    </div>)
}