import React, {useState, Fragment} from "react";
import "./navbar.css";
import {NavLink} from "react-router-dom";
import {useHistory} from "react-router-dom";


export default function NavBar () {
	const history = useHistory()
	const [menu, setMenu] = useState(false);
	function onReturn () {
		history.push("/")	
	}

	function setMenuHandler () {
		setMenu (!menu)
	}

	return (
		<div className = "containerDivNavBar">
			<div className = "DivProp"> 
				<div className = "navicon" onClick = {setMenuHandler}> ☰ </div>
				<img onClick = {onReturn} src = "http://imgfz.com/i/wzDp4dx.jpeg" className = "images"/>					
				<NavLink to = "/" className = "NavLink"> HOME</NavLink>
 				<NavLink to = "/destines" className = "NavLink" >DESTINOS</NavLink>
 				<NavLink to = "/about" className = "NavLink">SOBRE NOSOTROS</NavLink>
 				<NavLink to = "/contact" className = "NavLink"> CONTACTO</NavLink>
				
			</div>
				{menu === true ?
				<Fragment>
					<div className = "responsiveMenuContainer">
						<ul className = "responsiveMenu">
							<li><a href = "/" className = "elementsMenu"><b>»</b> Home</a></li>
							<li><a href ="/destines" className = "elementsMenu"><b>»</b> Destinos</a></li>
							<li><a href ="/about" className = "elementsMenu"><b>»</b> Sobre Nosotros</a></li>
							<li><a href ="/contact" className = "elementsMenu"><b>»</b> Contacto</a></li>
						</ul>
					</div>
				</Fragment>	
				:
				null
			}
				<div className = "banner"/>
				<div className = "miniBanner"/>
		</div>)}