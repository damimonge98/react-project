import React from "react";
import "./home.css";
import {NavLink} from "react-router-dom";

export default function Home () {
	return (<div className = "DivProps">
  					<h2 className = "titleHome"> Bienvenidos a la web oficial de ViajAR.  </h2>
            <p className = "text"> 

  					En ViajAR creemos que la mejor inversión que podés hacer en tu vida es viajar por el mundo. 
            Por eso te ofrecemos una plataforma online para que puedas crear, planificar y comprar tu viaje <b>de manera segura, ágil y transparente.</b>

            Aquí encontraras 
  					toda la informacion que necesites para que puedas planificar esos viajes
  					que te están esperando.
            Te ofrecemos distintos paquetes turisticos en varias fechas de salida
            por todo el país y países limitrofes. 
             </p>

 
             <h3 className = "Red">PODES APROVECHAR ahora y realizar tu reserva de vacaciones 2021 y con PREVIAJE tenés el 50% de reintegro.</h3>

            <img src = "https://volemos.nyc3.digitaloceanspaces.com/blog/wp-content/uploads/2015/07/documentacion-para-viajar-a-Argentina1.jpg" className = "img"/>


        
 
			</div>)}