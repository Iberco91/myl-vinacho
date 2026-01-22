import React from 'react';
import { useState } from 'react';

//SEGUIR CON EL FAQ, ULTIMA AGREGADA: 7/143
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
        respuesta: "No, debido a la regla de la autorreferencia."
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
        De acuerdo a la <strong>Información entregada por el DAR</strong>, los aliados vuelven a la linea de defensa si el ataque fue cancelado.
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
        {
        id: 9,
        pregunta: "¿Se paga el coste del Aliado buscado con Cruz Templaria? (FAQ)",
        respuesta: [
            "Si, ya que dicha carta tiene una Errata y fue impresa nuevamente con el texto: ",
            "En tu Fase de Vigilia, puedes Desterrar a Cruz Templaria para buscar un Aliado en tu Mazo Castillo y jugarlo pagando su coste. ",
            "En la Fase Final, ese Aliado debe ser Desterrado. Carta Única."
            ]
        },
        {
        id: 10,
        pregunta: "¿En qué momento puedo generar Oros con Ogham, Herrero y Dragones? (FAQ)",
        respuesta: [
            "En estos tres casos, la habilidad de Dragones, Ogham y Herrero es activada, por lo tanto se debe Mover el oro a la Zona de oro pagado, para generar los Oros.",
            " Por lo tanto, si por ejemplo tienes un Ojo Udyat en juego, tu oponente juega una carta, y buscas una Necrópolis Popular, deberás pagar 2 Oros, ",
            "y Ogham solo contará como 1 oro. "
            ]
        },
        {
        id: 11,
        pregunta: "Respecto a la carta Saladino, ¿Si yo genero los dos Oros en Fase de Vigilia, los puedo usar en Guerra de talismanes?",
        respuesta: "Todo lo que no especifique hasta cuando es la generación de Oros, es hasta la Fase Final."
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