import React from "react";
import { Link } from "react-router-dom";
import Contact from "./contact";
import "./footer.css";

export default function Footer () {
    return (
        <div className = "containerFooter">
            <div className = "miniBanner"/>
            <div className = "banner"/>
            <div className = "footerContentDiv">
                <p className = "footerContent"> <Link to="/"> <b>Terminos y condiciones</b></Link></p>
                <p className = "footerContent"> <Link to="/contact"> <b>Contactanos por promociones especiales</b></Link> </p>
                <p className = "footerContent"> <Link to= "/privacy"><b>Politicas de privacidad</b></Link></p>
                <p>© 2021 viajAR.</p>
            </div>
        </div>
    )
}