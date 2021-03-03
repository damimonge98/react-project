import React from "react";
import "./home.css";
import Footer from "./footer";
import ImageCarousel from "./carousel";
import SecondHeader from "./secondHeader";
import {useHistory} from "react-router-dom";

export default function Home () {
  
  const history = useHistory()

  function onReturn () {
  history.push("/destines")	
}

  return (
      <div className = "containerDiv">
        <SecondHeader name = "» Inicio" />
    
        <div className = "middleHome">
       Viajá por Argentina. </div>
          <div className = "divProps"> 
          </div> 

      <div className = "middleHome">
        Encontrá tu destino.
      </div>

        <ImageCarousel/>
        
        <Footer/> 
      </div>)}