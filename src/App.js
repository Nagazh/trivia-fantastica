import React,{useState} from 'react';
import HacerPregunta from './componentes/Preguntas';
import './App.css';
import Contador from './componentes/Puntuacion';



const Trivia=[{
      pregunta:"Qué es lo que dice Gandalf cuando se enfrenta a un Balrog (demonio gigante de fuego)",
      respuesta1:"No pasarás",
      respuesta2:"Ahí les voy",
      respuesta3:"Primero los ancianos",
      respuestaCorrecta:"No pasarás"
    },
    {
      pregunta:"Cual de estas acciones dañaría a un no-muerto (zombies, vampiros, espectros, entre otros)",
      respuesta1:"Sanarlo",
      respuesta2:"Alimentarlo",
      respuesta3:"Bailar",
      respuestaCorrecta:"No pasarás"
    },
    {
      pregunta:"Cual es el hechizo que Harry Potter usa para protegerse de los dementores (espectros oscuros)",
      respuesta1:"Avada-kedavra",
      respuesta2:"Shazam",
      respuesta3:"Expecto-patronum",
      respuestaCorrecta:"Expecto-patronum"
    },
    {
      pregunta:"Que es lo que encuentra Bilbo Bolson en la cueva de Gollum",
      respuesta1:"Una daga",
      respuesta2:"Un mate",
      respuesta3:"Un anillo",
      respuestaCorrecta:"Un anillo"
    },
    {
      pregunta:"Donde hay orden siempre hay ...",
      respuesta1:"Caos",
      respuesta2:"Pizza",
      respuesta3:"Una locomotora",
      respuestaCorrecta:"Caos"
    },
  ];

function App() {

  const[contador,setContador]=useState(0);

  const validador = () =>{
               
          alert('Respuesta correcta 1 punto');
          setContador(contador+1);
             
  }

  return (
    
    <div className="App">

        <h1>Trivia de fantasía</h1>
        <h2>Presta atención,estas preguntas están relacionadas con mundos fantásticos 
            como Harry Potter, El señor de los anillos y Warhammer</h2>
        
        { //Con esto recorri los elementos de array de la trivia
          Trivia.map(function(trivia)
            { 
              return <HacerPregunta pregunta={trivia.pregunta} opcion1={trivia.respuesta1} opcion2={trivia.respuesta2} opcion3={trivia.respuesta3} eventoClic={validador}
          />}
        )}

        <Contador 
          contador={contador}
        />

    </div>
  );
}

export default App;
