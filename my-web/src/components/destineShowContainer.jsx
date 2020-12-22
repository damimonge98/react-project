import React from "react";
import "./destineShowContainer.css"
import DestineShow from "./destineShow.jsx";

export default function DestineShowContainer (props) {


	return (<div id = "DestineShowStyleContainer">
			<DestineShow onClick = {props.onClick}/>
			</div>)
			}
