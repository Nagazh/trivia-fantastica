import React from "react";

function Contador(props){
    return(
        <>
            <h2>Tu puntuacion es de</h2>
            <h3>{props.contador}</h3>
        </>
    );
}
export default Contador