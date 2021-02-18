import React from "react";
import "./destineShow.css";

export default function destineShow (props) {
	
	return (<div className = "DestineShowStyle"> 
	<button onClick = {props.onClick} className = "button"> X </button>
	<p className = "info">Info no disponible por el momento</p>
	</div>)


}