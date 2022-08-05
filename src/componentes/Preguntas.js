//Aqui encontraras la plantilla para las preguntas de la trivia

import React from "react";


function HacerPregunta(props){
    return(
        <div className="preguntas">
        <h3>{props.pregunta}</h3>

        <button onClick={props.eventoClic}>{props.opcion1}</button>

        <button onClick={props.eventoClic}>{props.opcion2}</button>

        <button onClick={props.eventoClic}>{props.opcion3}</button>
        </div>

       
    );
}
export default HacerPregunta;