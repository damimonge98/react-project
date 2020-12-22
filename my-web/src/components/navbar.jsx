import React from "react";
import "./navbar.css";
import {NavLink} from "react-router-dom";

export default function NavBar () {
	return (<div className = "DivProp"> 

					
 					<NavLink to = "/" className = "NavLink">Home</NavLink>
 					<NavLink to = "/destines" className = "NavLink" >Destinos (a partir de 2021) </NavLink>
 					<NavLink to = "/about" className = "NavLink">Sobre Nosotros</NavLink>
 					<NavLink to = "/contact" className = "NavLink"> Contacto</NavLink>
  					
  				
 
			</div>)}