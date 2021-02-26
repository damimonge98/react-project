import React from "react";
import "./navbar.css";
import {NavLink} from "react-router-dom";
import {useHistory} from "react-router-dom";


export default function NavBar () {
	const history = useHistory()

	function onReturn () {
		history.push("/")	
	}
	return (
		<div className = "containerDivNavBar">
			<div className = "DivProp"> 
				<img onClick = {onReturn} src = "http://imgfz.com/i/wzDp4dx.jpeg" className = "images"/>					
				<NavLink to = "/" className = "NavLink"> HOME</NavLink>
 				<NavLink to = "/destines" className = "NavLink" >DESTINOS</NavLink>
 				<NavLink to = "/about" className = "NavLink">SOBRE NOSOTROS</NavLink>
 				<NavLink to = "/contact" className = "NavLink"> CONTACTO</NavLink>
			</div>
				<div className = "banner"/>
				<div className = "miniBanner"/>
		</div>)}