import React, {useState} from "react";
import "./contact.css";
import SecondHeader from "./secondHeader";
import Footer from "./footer";

export default function Contact () {

	const [data, setData] = useState ({
		nombre: "",
		apellido: "",
		asunto: "",
		email: "",
		
	})

	console.log(data)
	const handlerChange = function (e) {
	setData ({...data,
	[e.target.name] : e.target.value})
	}	 
	

	return (
		<div className = "containerContactDiv">
			<SecondHeader name ="» Contacto"/>
			<div className = "DivProps"> 

				<div className = "consultDiv">
					<h1 className = "title"> Realizá tu consulta</h1>
					
					<form className = "formulario"> 
					<input className = "form" type = "text" name = "nombre" value = {data.nombre} onChange = {handlerChange} placeholder= "Nombre..."/>
					<input className = "form" type = "text" name = "apellido" value = {data.apellido} onChange = {handlerChange} placeholder= "Apellido..."/>
					<input className = "form" type = "text" name = "asunto" value = {data.asunto} onChange = {handlerChange}placeholder= "Tipo de consulta..."/>
					<input className = "form" type = "text" name = "email" value = {data.email} onChange = {handlerChange}  placeholder= "E-mail.."/>
					<input className = "consulta" type = "text" name = "consulta" value = {data.consulta} onChange = {handlerChange} />
					<input className = "formSend" type = "submit" value = "ENVIAR" />
					</form>					

				</div>

				<div className = "imageContactDiv"></div>

			</div>
		<Footer/>
			
		</div>)
}