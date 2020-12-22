import React from "react";
import "./contact.css";

export default function Contact () {
	return (
		<div className = "DivProps"> 
			<h1 className = "title"> CONTACTO </h1>
			<p className = "textContact"> <b>Telefono:</b> +54(342)5456126  <br/>
				<b>Facebook:</b> ViajAR <br/>
				<b>Instagram:</b> @viajAr.turismo
			</p>
			
			<p className = "textContact"> 
			También podes dejarnos tus datos y te contactamos
			<form>
			<input type = "text" value = "" placeholder= "Nombre..."/>
			<input type = "text" value = "" placeholder= "Apellido..."/>
			<input type = "text" value = "" placeholder= "Tipo de consulta..."/>
			<input type = "text" value = "" placeholder= "E-mail.."/>
			<input type = "submit" value = "ENVIAR" />
			</form>
			</p>



  
		</div>)
}