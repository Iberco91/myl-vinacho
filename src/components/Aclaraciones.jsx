import React from 'react';
import { useState } from 'react';

//SEGUIR EL HISTORIAL DE CHAMPIONS DESDE 10/01/2026 HACIA ATRAS
export default function Aclaraciones () {
    // 1. Estado para manejar qué pregunta está abierta
    const [abierta, setAbierta] = useState(null);
    // 2. Tus datos (Aquí puedes ir agregando más preguntas y respuestas)
    const listaDudas = [
        {
        id: 1,
        pregunta: "¿Sir Galehaut puede escoger un Aliado en linea de ataque para defenderlo?",
        respuesta: "No, solamente puede ser escogido un Aliado en línea de defensa"
        },
        {
        id: 2,
        pregunta: "¿En que momento se puede usar el efecto 'prevenir'?",
        respuesta: "Prevención se puede usar en cualquier momento del juego"
        },
        {    
        id: 3,
        pregunta: "¿Desterrando al Aliado 'Baltazar', se puede cancelar la habilidad de Hera?",
        respuesta: "Si"
        },
        {
        id: 4,
        pregunta: "¿Hera puede prevenir la habilidad usada por 'Bola de Fuego' o 'Guardia Gozosa'?",
        respuesta: "Si, pero si se usa por ejemplo una Bola de fuego y luego una Guardia Gozosa, no se previene el efecto de la segunda carta, ya que es una vez por turno."
        },
        {
        id: 5,
        pregunta: "¿Si realizo un ataque y el rival 'cancela' el ataque, los Aliados vuelven a la línea de defensa?",
        respuesta: 
        <>
        De acuerdo a la <strong>Información entregada por el DAR</strong>, los aliados se mantienen en la línea de ataque.
        </>
        }
    ];

    const toggleDuda = (id) => {
        setAbierta(abierta === id ? null : id);
    };


    return (
        <main>
            {/* SECCIÓN ESTÁTICA */}
            <section className="introduccion-seccion">
                <div className="contenedor-texto">
                    <h2>Aclaraciones de Reglas y dudas varias</h2>
                    <p>
                        En esta sección se aclaran dudas e inquietudes sobre ciertas situaciones que se pueden dar 
                        en las mititos. Se presenta primero la pregunta o duda que surge en una situación del juego
                        entre dos o mas cartas, y al hacerle click se abre un desplegable con la respuesta en concreto.
                        Dentro esta toda la información del DAR también y todas las dudas que han salido en el grupo de la 
                        Champions. Si existen mas dudas háganmelas llegar para agregar toda la información necesaria acá.
                    </p>
                    <p>¡Espero les sirva de ayuda!</p>
                </div>
            </section>

            {/* SECCIÓN INTERACTIVA (El acordeón) */}
            <section className="acordeon-seccion">
                <div className="contenedor-acordeon">
                    {listaDudas.map((item) => (
                        <div key={item.id} className="item-acordeon">
                            <button 
                                className={`boton-pregunta ${abierta === item.id ? 'activo' : ''}`}
                                onClick={() => toggleDuda(item.id)}
                            >
                                {item.pregunta}
                                <span className="icono">{abierta === item.id ? '−' : '+'}</span>
                            </button>
                            
                            {/* Si la pregunta está abierta, se muestra la respuesta */}
                            {abierta === item.id && (
                                <div className="caja-respuesta">
                                <p>{item.respuesta}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>
        </main>
  );
}