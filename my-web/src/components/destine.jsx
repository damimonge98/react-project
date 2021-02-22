import React from "react";
import "./destine.css"
import DestineShowContainer from "./destineShowContainer.jsx";
import SecondHeader from "./secondHeader";
export default function Destine (props) {

	const [state,setState] = React.useState(true);

	const onButtonClick = () => {
		setState (!state)
	}


	if (state === true) {
			return (<div className = "DestineProp" onClick = {onButtonClick} >
			
			<h3 className = "Nombre">{props.name}</h3>
			<img src = {props.img} alt = "No se encontro imagen" className = "Images"/>
			<div className = "InfoProp">{props.info}</div>
			 </div>)


			} else {
				return (<div className = "DestinePropWithoutHover">
			<h3 className = "Nombre">{props.name}</h3>
			<img src = {props.img} alt = "No se encontro imagen" className = "Images"/>
			<div className = "InfoProp">{props.info}</div>
			<DestineShowContainer onClick = {onButtonClick}> 
			</DestineShowContainer>
			 </div>)
			}

			}
