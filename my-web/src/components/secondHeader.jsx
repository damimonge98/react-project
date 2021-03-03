import React from "react";
import "./secondHeader.css";

export default function SecondHeader (props) {

    var urlImage = "http://www.menteargentina.com/blog/wp-content/uploads/2015/10/Buenos.Aires_.original.10795.jpg"
    var positionImage = "40% 40%";
    switch (props.name) {
        case "» Inicio":
            break;
        case "» Contacto":
            urlImage = "https://www.diariourbano.com.ar/wp-content/uploads/2020/11/calafate-1536x878.jpg";
            positionImage = "10% 10%";
            break;
        case "» Sobre Nosotros":
            urlImage = "https://tripin.travel/wp-content/uploads/2020/06/turismo-mendoza-2-web.jpg"
            break;
        case "» Nuestros Destinos":
            urlImage = "https://s1.1zoom.me/b5050/376/423622-Kycb_1920x1080.jpg";
            positionImage = "20% 20%";
            break;        
    }
    const containerDivSecondHeader = {
            width: "100%",
            backgroundImage : "url("+ urlImage +")",
            backgroundSize : "cover",
            backgroundPosition : positionImage, 
            height : "88%",
            display : "flex"
    }

    return (
    <div className = "divHomeSection">
        <div className = "divSection" style = {containerDivSecondHeader}> 
        <div className = "sectionName"> <i className="fas fa-angle-double-right"></i>  {props.name} </div>
        </div>
        <div className = "bannerSectionDiv"></div>
        
    </div>)
}