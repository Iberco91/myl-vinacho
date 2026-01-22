import React from 'react';
import { useState } from 'react';

//SEGUIR EL HISTORIAL DE CHAMPIONS DESDE 24/04/2025 HACIA ATRAS
export default function Aclaraciones () {
    // 1. Estado para manejar qué pregunta está abierta
    const [abierta, setAbierta] = useState(null);
    // 2: Estado para el texto del buscador
    const [busqueda, setBusqueda] = useState("");
    // 3. Tus datos (Aquí puedes ir agregando más preguntas y respuestas)
    const listaDudas = [
        {
        id: 1,
        pregunta: "¿Sir Galehaut puede escoger un Aliado en linea de ataque para defenderlo?",
        respuesta: "No, solamente puede ser escogido un Aliado en línea de defensa."
        },
        {
        id: 2,
        pregunta: "¿En que momento se puede usar el efecto 'prevenir'?",
        respuesta: "Prevención se puede usar en cualquier momento del juego."
        },
        {    
        id: 3,
        pregunta: "¿Desterrando al Aliado 'Baltazar', se puede cancelar la habilidad de Hera?",
        respuesta: "Si."
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
        },
        {
        id: 6,
        pregunta: "¿La habilidad de Fergus Mor Maceric, El Gran Wyrm y Titania como funcionan?",
        respuesta: 
        <>
        De acuerdo a la <strong>Información entregada por el DAR</strong>, la habilidad de estas 3 cartas es una habilidad continua, 
        por lo tanto estos no requieren estar en juego de manera previa a jugar más Aliados para beneficiarlos.
        </>
        },
        {
        id: 7,
        pregunta: "Respecto a la carta Hestia, ¿La habilidad se activa cuando en un ataque yo dejo pasar el daño, o se activa ante cualquier daño que pase bloqueando o no bloqueando?",
        respuesta: "La habilidad de Hestia se activa al momento de pasarle daño de combate al Mazo del propietario de Hestia."
        },
        {
        id: 8,
        pregunta: "Respecto a la carta Campesino, ¿Si le coloco una daga de bote, puedo usar su habilidad (de Campesino)?",
        respuesta: "No, ya que la Daga de Bote no permite que se utilicen habilidades que impliquen destruir a un Aliado, ya que su función es justamente lo opuesto."
        },
    ];

    // LÓGICA DE FILTRADO: 
    // Creamos una lista nueva que solo contiene lo que coincide con la búsqueda
    const dudasFiltradas = listaDudas.filter((item) =>
    item.pregunta.toLowerCase().includes(busqueda.toLowerCase())
    );


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

            {/* NUEVA SECCIÓN: Buscador */}
            <section className="seccion-buscador">
                <div className="contenedor-buscador">
                    <div className="input-wrapper">
                        <input 
                            type="text" 
                            placeholder="Buscar duda por palabra clave..." 
                            value={busqueda}
                            onChange={(e) => setBusqueda(e.target.value)} // Actualiza el estado al escribir
                            className="input-busqueda"
                        />
                        {/* Solo mostramos la X si hay algo escrito en 'busqueda' */}
                        {busqueda && (
                            <button 
                                className="boton-limpiar" 
                                onClick={() => setBusqueda("")}
                                title="Limpiar búsqueda"
                            >
                                &times; {/* Esto es el símbolo de multiplicación que parece una X */}
                            </button>
                        )}
                    </div>

                {/* Opcional: Mostrar cuántos resultados hay */}
                    {busqueda && (
                        <p className="resultados-texto">
                        Resultados encontrados: {dudasFiltradas.length}
                        </p>
                )}
                </div>
            </section>

            {/* SECCIÓN INTERACTIVA (El acordeón) */}
            <section className="acordeon-seccion">
                <div className="contenedor-acordeon">
                    {dudasFiltradas.length > 0 ? (
                        dudasFiltradas.map((item) => (
                            <div key={item.id} className="item-acordeon">
                                <button 
                                className="boton-pregunta" 
                                onClick={() => setAbierta(abierta === item.id ? null : item.id)}
                                >
                                {item.pregunta}
                                <span>{abierta === item.id ? '−' : '+'}</span>
                                </button>
                                {abierta === item.id && (
                            <div className="caja-respuesta">
                                <p>{item.respuesta}</p>
                            </div>
                            )}
                            </div>
                        ))
                        ) : (
                        <p className="sin-resultados">No se encontraron dudas con "{busqueda}"</p>
                    )}
                </div>
            </section>
        </main>
  );
}