import React from "react";
import Destine from "./destine.jsx"
import Footer from "./footer";
import "./destineContainer.css";

const objInformacion = [{
                        name: "MISIONES",
                        infoLugar: <p> MISIONES + CATARATAS </p>,
                        imgLugar: "https://upload.wikimedia.org/wikipedia/commons/9/97/Foz_de_Igua%C3%A7u_27_Panorama_Nov_2005.jpg"},
                        
                        {
                        name: "PATAGONIA ARGENTINA",
                        infoLugar: <p> RIO NEGRO, CHUBUT Y SANTA CRUZ </p>,
                        imgLugar: "https://viajes.nationalgeographic.com.es/medio/2014/11/20/sb_watching_the_glacier_1000x666.jpg"},
                        
                        {
                        name : "NOROESTE ARGENTINO",
                        infoLugar: <p> TUCUMAN, SALTA Y JUJUY </p>,
                        imgLugar: "https://agenciafe.com/data/img_cont/img_imagenes/157587.jpg"},
                        
                        {
                        name : "BUENOS AIRES",
                        infoLugar: <p> CIUDAD DE BUENOS AIRES </p>,
                        imgLugar: "http://argentinapoloday.com.ar/blog/wp-content/uploads/2016/05/a.jpg"},

                        {
                        name : "MENDOZA",
                        infoLugar: <p> MENDOZA + CHILE </p>,
                        imgLugar: "https://inmendoza.com/wp-content/uploads/2019/04/Valle-de-Las-Carreras.jpg"},

                        {
                        name : "BRASIL",
                        infoLugar: <p> PLAYAS DE BRASIL </p>,
                        imgLugar: "https://px.cdn.lanueva.com/012020/1578073733564/floripa%201.jpg"},

                        {
                        name : "REGION DE CUYO",
                        infoLugar: <p> LA RIOJA, SAN JUAN Y CATAMARCA </p>,
                        imgLugar: "https://www.telam.com.ar/advf/imagenes/2017/04/58e3de386da41_324x182.jpg"},

                        {
                        name : "CORDOBA",
                        infoLugar: <p> VALLES CORDOBESES </p>,
                        imgLugar: "https://media.mejoresdestinos.com.ar/2019/03/cordoba-portada.jpg"}]



export default function DestineContainer () {
    
	return objInformacion.map(elemento => <Destine name = {elemento.name} info = {elemento.infLugar} img = {elemento.imgLugar}/>)
}