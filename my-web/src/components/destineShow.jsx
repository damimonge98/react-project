import React from "react";
import "./destineShow.css";

export default function destineShow (props) {

	var miniImage = null;
	var info = null;
	var backgroundSize = null;

	switch (props.name) {
		case "Misiones":
			miniImage = "https://www.pagina16.com.ar/wp-content/uploads/2017/08/8cedf1_df155895c2fd4abe833b55c9910f8c19.jpg"
			info = "La provincia argentina de Misiones está repleta de fascinantes atracciones, desde la colorida vida silvestre hasta ruinas de siglos de antigüedad y una de las verdaderas maravillas naturales del mundo. Misiones se encuentra en el noreste de Argentina, y comparte la frontera con Brasil y Paraguay. Admira los impresionantes paisajes naturales de Misiones, formados por densos bosques y junglas intercalados con lagos, ríos y cascadas. La atracción principal de Misiones son las majestuosas Cataratas del Iguazú, ubicadas en la selva tropical del Parque Nacional Iguazú. Maravíllate con las 275 cascadas de este desfiladero con forma de herradura, ubicado en la frontera entre Argentina y Brasil. "	
			break;
		case "Patagonia":
			miniImage = "https://cdn.pixabay.com/photo/2020/05/15/14/05/patagonia-5173688_960_720.jpg"
			info = "La mítica Patagonia atesora escenarios naturales increíbles.  Se ubica en el sur del territorio argentino y la conforman las provincias de La Pampa, Neuquén, Río Negro, La Pampa, Chubut, Santa Cruz y Tierra del Fuego, Antártida e Islas del Atlántico Sur. Entre sus bellezas paisajísticas y grandes atractivos se destacan cinco sitios del Patrimonio Mundial (UNESCO): el Parque Nacional Los Glaciares, La Cueva de las Manos, el Parque Nacional Los Alerces y Península Valdés. Por un lado, el cordón de la Cordillera de los Andes, se impone de norte a sur como uno de sus límites naturales y abre escenarios impactantes. Cumbres de volcanes con géiseres y aguas termales; montañas de donde descienden enormes glaciares, lagos y ríos.  Encantadores valles y aldeas de montaña rodeadas de bosques autóctonos milenarios, o extensos campos de estepa. Patagonia también sorprende con su biodiversidad y su fauna silvestre no menos increíble. Desde maras, ñandúes, guanacos y el ciervo colorado hasta el cóndor sobrevolando desde los andes a las sierras junto al mar.  También es hábitat de un rico mundo marino, donde numerosas especies forman colonias de lobos y elefantes marinos, pingüinos magallánicos, delfines, toninas, y otras que arriban por temporada donde se destaca la Ballena Franca Austral (Monumento Natural).Su gastronomía, te ofrece platos y sabores tan bien definidos que merecen una mención. Entre ellos, regionales a base del cordero patagónico, o carnes típicas de ciervo, chivo, truchas y otras delicias que pueden combinarse a la perfección con vinos de origen patagónico. Imperdibles son las picaditas de ahumados con cervezas artesanales y todos una tentación para los chocolates y dulces."
			break;
		case "Noroeste":
			miniImage = "https://st.depositphotos.com/1001798/4478/i/950/depositphotos_44786567-stock-photo-route-13-to-iruya-in.jpg"
			info = "Esta región de Argentina la integran seis provincias ubicadas en el noroeste del territorio: Jujuy, Salta, La Rioja, Catamarca, Santiago del Estero y Tucumán. Es ante todo, una geografía de notables contrastes, extraordinaria belleza paisajística y riqueza cultural. La aridez de la Puna; la exuberante selva de las Yungas; planicies santiagueñas casi a nivel del mar, y los más de 6.800 metros de la Cordillera de los Andes. Allí donde la tierra muestra sus capas geológicas en Talpampaya, poniendo al descubierto secreteos milenarios, y donde cada paisaje norteño enmarca antiguas ruinas, fortalezas del período incaico, capillas coloniales, catedrales y basílicas. Los colores de la Quebrada, los Valles Calchaquíes, el Tren a las Nubes, los salares, las termas, el folclore, los platos típicos y el vino Torrontés de altura, son tan sólo algunas de las diversas opciones que vas a poder disfrutar en el noroeste argentino. El legado de pueblos originarios y precolombinos; o sus importantes hallazgos arqueológicos y paleontológicos son atractivos de gran interés para conocer.  Los pueblos de la Quebrada de Humahuaca y de los Valles Calchaquíes, el Camino del Inca y el Camino Real, lugares históricos, ciudadelas y pucarás son algunas de las posibilidades para adentrarse a la cultura norteña. Los colores de los cerros se expresan en cada pieza original, ponchos y tejidos que podés encontrar en sus rutas de artesanos. El folklore se transmite de generación en generación, y podés escuchar zambas y chacareras en peñas y festivales. Los carnavales, las fiestas de la Pachamama, el Inti Raymi y los misachicos, te invitan a festejar con las comunidades locales en lo más íntimo de sus tradiciones."
			break;
		case "Buenos Aires":
			info = "Llegar a Buenos Aires, es abrir la puerta para conocer y enamorarte de una de las capitales más grandes y cosmopolitas de Sudamérica: la Ciudad Autónoma de Buenos Aires.  Con el Obelisco como uno de sus principales íconos, la ciudad tiene múltiples opciones y espacios para recorrer: modernas avenidas a bellos parques y espacios verdes; edificios y monumentos del patrimonio histórico nacional (Plaza de Mayo, La Casa Rosada, el Cabildo, el Congreso Nacional, el Teatro Colón, entre otros).Pero bien vale la pena adentrarse en el corazón porteño para sentir su más pasional tradición: el tango. San Telmo, La Boca y Caminito, son unos de esos sitios imperdibles. O bien recorrer aquellos que marcan tendencia: Palermo, Recoleta y Puerto Madero.  Como principal centro económico y social del país, la ciudad vive siempre activa. Concentra todo tipo de actividades (negocios, reuniones, convenciones) y congrega a multitudes como sede de grandes eventos culturales y deportivos. "
			miniImage = "https://careers.dazn.com/media/1254/buenos-aires-header.jpg?crop=0,0,0,0&cropmode=percentage&width=1400&height=1000&format=jpeg&quality=75"
			break;
		case "Mendoza":
			miniImage =  "https://media-cdn.tripadvisor.com/media/photo-s/0c/c7/cd/dd/paisajes-mendocinos.jpg"
			break;
		case "Brasil":
			miniImage = "https://www.freejpg.com.ar/image-900/3e/3e65/F100011676-pan_de_azuucar_rio_de_janeiro_brasil.jpg"
			break;
		case "Cuyo":
			miniImage = "https://i.pinimg.com/originals/6e/9a/6d/6e9a6df77992587998a87fce8427da28.jpg" 
			break;
		case "Cordoba":
			miniImage = "https://i.pinimg.com/originals/45/79/12/457912f84555653a00259e2c75709c46.jpg"
			info = "Desde el centro del país, Córdoba es una de las provincias más desarrolladas y con mayor población después de Buenos Aires.  En su Ciudad capital, vas a poder apreciar de una intensa vida comercial, de negocios, cultural y universitaria, que la convierten en punto de destacados encuentros, congresos y reuniones todo el año.  Entre ellos, el reciente VIII Congreso Internacional de la Lengua Española 2019. Su principal centro turístico es Villa Carlos Paz al pie del Lago San Roque, y es un punto ideal para hacer una escapada. La cercanía de ríos, sierras y el espíritu cordobés la describen como un lugar único. En épocas estivales, la oferta teatral es una de sus grandes propuestas así como disfrutar embalses y diques, aptos para la navegación y la práctica de los deportes acuáticos. Traslasierra y los Valles de Punilla y Calamuchita, entre otras regiones cordobesas, también son muy recomendables para vivir de cerca la naturaleza de sus arroyos y ríos en un clima de paz absoluta.El cabrito cordobés, los quesos y embutidos de Colonia Caroya son algunas de las leyendas gastronómicas y productos típicos como el alfajor cordobés. En el Valle de Calamuchita, las especialidades de la cocina centroeuropea se aprecian junto a las cervezas artesanales que se producen en Villa General Belgrano, pueblo donde se celebra la Fiesta Nacional de la Cerveza, conocido como el Oktoberfest argentino. También es conocida por inigualables museos al aire libre que se complementan con el importante legado cultural de sitios como estancias, iglesias y museos, muchos de los cuales integran la Manzana y Estancias Jesuíticas de Córdoba, declaradas Patrimonio Cultural Mundial por la UNESCO."
			break;
		}

	const styleDestineShow  = {
		backgroundImage : "url("+ miniImage +")",
		height: "100%",
		width: "30%",
		marginBottom: "100%",
		backgroundSize: "cover",
		backgroundPosition: "50% 50%"
	}

	return (
	<div className = "DestineShowStyle"> 
		<div style = {styleDestineShow}>
			<button onClick = {props.onClick} className = "button"> X </button>
			<h2 className = "info">{props.name}</h2>
			<div className = "divContainerInfo">
			<p className = "descriptionInfoDestine">{info}</p>
			</div>
		</div>
	
		
			
	</div>)


}