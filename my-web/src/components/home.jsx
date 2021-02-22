import React from "react";
import "./home.css";
import Footer from "./footer";
import ImageCarousel from "./carousel";
import SecondHeader from "./secondHeader";

export default function Home () {
	return (
      <div className = "containerDiv">
        <SecondHeader name = "Home" />
        <ImageCarousel/>
        <div className = "divProps">
                  <div className = "divContainerTitleandText">
                    <h2 className = "titleHome"> Bienvenidos a <b>ViajAR</b>. </h2>
                    <p className = "text"> 

                        <p className = "insideText"> Creemos que la mejor inversión que podés hacer en tu vida es viajar.</p>
                        <br/> 
                        Por eso te ofrecemos una plataforma online para que puedas crear, planificar y comprar tu viaje <b>de manera segura, ágil y transparente.</b>
                        <br/>
                        Aquí encontraras 
                        toda la informacion que necesites para que puedas planificar esos viajes
                        que te están esperando.
                        Te ofrecemos distintos paquetes turisticos en varias fechas de salida
                        por todo el país y países limitrofes. 

                       
                    </p>

                    
                  </div>

                
      </div> 
        <Footer/> 
      </div>)}