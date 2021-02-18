import React from "react";
import "./home.css";
import Footer from "./footer";
import ImageCarousel from "./carousel";

export default function Home () {
	return (
      <div className = "containerDiv">
        <div className = "divProps">
                  <div className = "divContainerTitleandText">
                    <h2 className = "titleHome"> Bienvenidos a la web de ViajAR </h2>
                    <p className = "text"> 

                        En ViajAR creemos que la mejor inversión que podés hacer en tu vida es viajar por el mundo. 
                        Por eso te ofrecemos una plataforma online para que puedas crear, planificar y comprar tu viaje <b>de manera segura, ágil y transparente.</b>

                        Aquí encontraras 
                        toda la informacion que necesites para que puedas planificar esos viajes
                        que te están esperando.
                        Te ofrecemos distintos paquetes turisticos en varias fechas de salida
                        por todo el país y países limitrofes. 

                       
                    </p>

                    
                  </div>

                
      </div> 
      <ImageCarousel/>
        <Footer/> 
      </div>)}