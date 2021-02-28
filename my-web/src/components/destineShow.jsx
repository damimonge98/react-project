import React from "react";
import "./destineShow.css";

export default function destineShow (props) {

	var miniImage = null;
	var info = null;

	switch (props.name) {
		case "Misiones":
			miniImage = "https://www.pagina16.com.ar/wp-content/uploads/2017/08/8cedf1_df155895c2fd4abe833b55c9910f8c19.jpg"
			info = "La provincia argentina de Misiones está repleta de fascinantes atracciones, desde la colorida vida silvestre hasta ruinas de siglos de antigüedad y una de las verdaderas maravillas naturales del mundo. Misiones se encuentra en el noreste de Argentina, y comparte la frontera con Brasil y Paraguay. Admira los impresionantes paisajes naturales de Misiones, formados por densos bosques y junglas intercalados con lagos, ríos y cascadas. La atracción principal de Misiones son las majestuosas Cataratas del Iguazú, ubicadas en la selva tropical del Parque Nacional Iguazú. Maravíllate con las 275 cascadas de este desfiladero con forma de herradura, ubicado en la frontera entre Argentina y Brasil. "	
			break;
		case "Patagonia":
			miniImage = "https://cc1a484a-a-62cb3a1a-s-sites.googlegroups.com/site/marlucautoedicion/enatur/collage.jpg?attachauth=ANoY7cpDn2SvlmSl-Y4fopoobL8HCkU6gr7fhacAkT9Y8_pG0aiQUY-G_gZ2xH3vBJC-3u2R6k_5bY-CiD3QAbMFv059oDp2yR8RHMa3cX91JYqrpqaHrH5FMCbNR081ZUvz2Vb-ioS3AxNr1HtSD5m-Ks1M48c9CpB_cCM3FjsgLUkIV2AZQWa4jeOifeZssS0kanzBftfNintF-lU1mKbHRBgGSV5c0VTJk2_h7bWrZfRq5mL21qM%3D&attredirects=1"
			break;
		case "Noroeste Argentino":
			miniImage = "https://noticiasperico.com.ar/wp-content/uploads/2020/10/1-21.jpg"
			break;
		case "Buenos Aires":
			miniImage = "https://brayergirl.typepad.com/.a/6a00d83452613869e201156f472326970b-pi"
			break;
		case "Mendoza":
			miniImage =  "https://s3.us-west-2.amazonaws.com/papcordoba.com/wp-content/uploads/2017/01/09124611/turismo.jpg"
			break;
		case "Brasil":
			miniImage = "https://upload.wikimedia.org/wikipedia/commons/7/79/Rio_Collage.png"
			break;
		case "Cuyo":
			miniImage = "https://blogs.deia.eus/de-leioa-al-mundo/files/2019/10/04.-Talampaya.-Arco-Iris.jpg" 
			break;
		case "Cordoba":
			miniImage = "https://cdn.cienradios.com/wp-content/uploads/sites/3/2018/07/C%C3%93RDOBA-400x231.jpg"
			break;
		}

	const styleDestineShow  = {
		backgroundImage : "url("+ miniImage +")",
		height: "100%",
		width: "30%",
		marginBottom: "100%",
	}

	return (
	<div className = "DestineShowStyle"> 
		<div style = {styleDestineShow}>
			<button onClick = {props.onClick} className = "button"> X </button>
			<h2 className = "info">{props.name}</h2>
			<p className = "descriptionInfoDestine">{info}</p>
		</div>
		
			
	</div>)


}