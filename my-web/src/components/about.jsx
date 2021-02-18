import React from "react";
import "./about.css";
import Footer from "./footer";

export default function About () {
	return (<div>
				<div className = "section">
					<h1 className = "h1Section">SOBRE NOSOTROS </h1>
				</div>
				<div className = "divAbout">
					<div className = "divCompromiseContainer">
						<h2 className = "title"> EL COMPROMISO NOS DISTINGUE </h2>
						<p className = "textAbout"> 
		
						Nuestra empresa desarrolla sus actividades en el mercado turístico
						nacional e internacional <b>desde 2005</b>, y desde entonces hemos asumido el compromiso de ofrecer a nuestros
						clientes servicios confiables y de alta calidad. Comercializamos servicios turísticos en todo el país y
						en países vecinos, elaborando nuestros propios paquetes, promociones e incluso operando viajes de otras 
						empresas. 
						<br/> 
						Además, 15 años en el mercado nos permiten disfrutar de una excelente relación con prestatarios de servicios. Gracias a esto,
						podemos ofrecer precios muy economicos en lo referente a alojamiento, transportes, excursiones y demás 
						servicios complementarios.
						</p>
					</div>

					<div className = "divMisionAndVision">
						<h2 className = "title"> MISION Y VISIÓN </h2>
						<p className = "textAbout"> 
						<b>Misión</b>
						<br/>
						Somos organizadores de viajes de placer y de negocios, a través del asesoramiento y la gestión de programas turísticos de excelencia en todo el mundo.
						Nuestro fin principal consiste en orientar y asistir a nuestros clientes en la planificación y realización de sus viajes.
						<br/>
						<b>Visión</b>
						<br/>
						Ser una de las empresas de viajes más reconocidas por prestar un servicio de alta calidad, que proporciona al usuario bienestar con gran satisfacción, trabajando con gran dinamismo, creatividad y capacidad de reacción ante un mercado en constante evolución.
						</p>
					</div>
				

				</div>

				<div className = "divObjectives">
					<h2 className = "title"> PRINCIPALES OBJETIVOS </h2>
					<p className = "textAbout"> 
					Brindar un alto nivel de servicios adecuados para personas que buscan experiencias relajantes, cómodas y memorables en la industria hotelera y turística.
					Evaluar los problemas culturales, económicos y sociales actuales que afectan la industria del turismo y los viajes.
					Ofrecer los servicios de viaje a precios muy razonables.
					Ser una empresa conocida por su honestidad y transparencia al brindarle las mejores soluciones de viaje para su negocio.
					</p>
					<img src = "https://previews.123rf.com/images/cppzoe/cppzoe1710/cppzoe171000018/87607260-amigos-felices-viajes-concepto-de-expedici%C3%B3n.jpg" className = "ImgAbout" />
				</div>

			
				<Footer/>
            
			</div>)
}