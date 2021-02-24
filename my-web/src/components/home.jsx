import React from "react";
import "./home.css";
import Footer from "./footer";
import ImageCarousel from "./carousel";
import SecondHeader from "./secondHeader";


export default function Home () {
	return (
      <div className = "containerDiv">
        <SecondHeader name = "» Inicio" />
        <div className = "middleHome">
       Tu mejor inversión es ViajAR. </div>
          <div className = "divProps">        
      </div> 
      
      <div className = "middleHome">
        Encontrá tu destino.
      </div>

        <ImageCarousel/>
        
        <Footer/> 
      </div>)}