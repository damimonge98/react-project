import React, {useState} from "react";
import "./contact.css";
import SecondHeader from "./secondHeader";
import Footer from "./footer";

export default function Contact () {

	const [data, setData] = useState ({
		nombre: "",
		apellido: "",
		consulta: "",
		email: ""
	})

	console.log(data)
	const handlerChange = function (e) {
	setData ({...data,
	[e.target.name] : e.target.value})
	}	 
	

	return (
		<div>
			<SecondHeader name ="Contacto"/>
			<div className = "DivProps"> 
				<p className = "textContact"> <b>Telefono:</b> +54(342)5456126  <br/>
					<b>Facebook:</b> ViajAR <br/>
					<b>Instagram:</b> @viajAr.turismo
				</p>
				
				<p className = "textContact"> 
				También podes dejarnos tus datos y te contactamos
				<form>
				<input type = "text" name = "nombre" value = {data.nombre} onChange = {handlerChange} placeholder= "Nombre..."/>
				<input type = "text" name = "apellido" value = {data.apellido} onChange = {handlerChange} placeholder= "Apellido..."/>
				<input type = "text" name = "consulta" value = {data.consulta} onChange = {handlerChange}placeholder= "Tipo de consulta..."/>
				<input type = "text" name = "email" value = {data.email} onChange = {handlerChange}  placeholder= "E-mail.."/>
				<input type = "submit" value = "ENVIAR" />
				</form>
				</p>
			</div>
		<Footer/>
			
		</div>)
}