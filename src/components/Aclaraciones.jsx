import React from 'react';
import { useState } from 'react';

//SEGUIR CON EL FAQ, ULTIMA AGREGADA: 30/143
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
        {
        id: 12,
        pregunta: "¿Como se resuelve Traficante de esclavos? (FAQ)",
        respuesta: [
                "Se agregó una errata a la carta, por lo tanto la resolucion de la carta es: En cuanto tu oponente reagrupe sus oros, puedes jugar este Talismán, para destruir ",
                 "uno de tus Aliados y mover todos los Oros oponentes desde la reserva a su zona de Oro pagado. Luego tu oponente, podrá jugar su respectivo Oro desde la ",
                 "mano y seguir adelante con el turno.",
            ]
        },
        {
        id: 13,
        pregunta: "¿Qué pasa con la carta con habilidad “Solo puedes controlar una copia de esta carta cuando es jugada por habilidad de Afrodita, Idmon el Adivino o Sir Bedivere? (FAQ)",
        respuesta: [
                "Para los efectos de Afrodita, Idmon el Adivino y Sir Bedivere la carta no podrá ser jugada, ya que existe una carta ",
                 "con la habilidad 'Sólo puedes controlar una copia de esta carta'. Por lo tanto quedará en su Zona de Origen, con la excepción de existir un efecto de reemplazo ",
                 "como con Afrodita (barajando el Aliado) e Idmon el Adivino (enviando la carta al Cementerio).",

            ]
        },
        {
        id: 14,
        pregunta: "¿Cuantos Aliados debe barajar Vouivre al entrar en juego? (FAQ)",
        respuesta: [
            "Se agrego una errata: 'Cuando Vouivre entra en juego, si tu oponente controla dos o más Aliados, puedes barajar un Aliado que controles, para barajar dos Aliados oponentes. ",
             "En tu Fase de Vigilia una vez por turno puedes buscar un Aliado de raza Dragón en tu Mazo Castillo y ponerlo en tu mano. Carta Única'. Con esto se aclara que el efecto ",
              "de barajar siempre deben ser dos Aliados oponentes."
            ]
        },
        {
        id: 15,
        pregunta: "¿Debo mostrar la carta que barajo con Sir Erec al declararlo Atacante? (FAQ)",
        respuesta: [
                "En caso de resolver barajar 2 Aliados de raza Caballero, si se deben mostrar las cartas, para comprobar su raza y tipo de carta. ",
                "En caso de resolver barajar una sola carta, al no tener condición para barajar, no es necesario mostrarla. ",
            ]
        },
        {
        id: 17,
        pregunta: "¿Lanza divina puede hacer daño en guerra de talismanes del turno oponente? (FAQ)",
        respuesta: [
                "Así como muchas otras cartas que no digan “En tu Fase de Vigilia”. y si dicen Una vez por turno, la habilidad podrás activarla tanto en tu Fase de Vigilia, ",
                "o en Guerra de Talismanes.",
                " Esto nos da la posibilidad de que en el turno oponente, en Guerra de Talismanes, podré activar la habilidad de Lanza Divina para que tu oponente bote dos ",
                "cartas de su Mazo Castillo. ",
            ]
        },
        {
        id: 18,
        pregunta: "Si Orium no ataca el turno que entra en juego y ataca en otro turno. ¿Se destruye en Fase Final? (FAQ)",
        respuesta: "Orium posee dos habilidades independientes entre si. Por lo tanto, el turno que sea declarado atacante debe ser destruido en la Fase Final."
        },
        {
        id: 19,
        pregunta: "¿Tormenta de Dragón, si me anulan el Talismán, debo desterrar el Aliado? (FAQ)",
        respuesta: [
                "Tormenta de Dragón debe resolverse para Desterrar el Aliado. Lo que si, al momento de ser jugado se debe declarar los objetivos y deben ser válidos para jugar la carta. ",
                "Esto quiere decir que si el Talismán es anulado, no deberías desterrar un Aliado. ",
                "Una vez jugado y que se resuelva (no haya sido anulado), destierras el Aliado que hiciste objetivo y buscarás el Aliado de coste 1 oro más para jugarlo sin pagar su coste."
            ]
        },
        {
        id: 20,
        pregunta: "Con Merlín, ¿El Talismán jugado si es anulado se Destierra? (FAQ)",
        respuesta: "Si, ya que el Talismán está siendo jugado de todas formas, por lo tanto aunque se Anule deberá ir al Destierro."
        },
        {
        id: 21,
        pregunta: "¿Goblin cambió de habilidad. ¿Cuál habilidad debo considerar válida ahora? (FAQ)",
        respuesta: [
                "Desde el lanzamiento de la Reposición de Relatos de Espada Sagrada, Ars Mágica, Goblin pasa a tener una nueva habilidad. La cual está descrita en su nueva caja de habilidad.",
                " La habilidad previa queda descontinuada, y para efectos del juego debe usarse el nuevo en torneos oficiales."
            ]
        },
        {
        id: 22,
        pregunta: "Menw, ¿Puedo elegirlo a él para que gane 1 de Fuerza e Imbloqueable? (FAQ)",
        respuesta: [
                "La regla de Auto-Referencia indica que la Fuente del efecto nunca puede ser Objetivo del mismo efecto.",
                " Por lo tanto Menw no puede ser afectado por su mismo efecto."
            ]
        },
        {
        id: 23,
        pregunta: "Círculo Eterno, hace que las cartas sean únicas. ¿Entonces, se puede jugar otra copia? (FAQ)",
        respuesta: [
                "La redacción de El Círculo Eterno hace que las cartas ganen la habilidad de Carta Única.",
                " Como se sabe, esta es una habilidad de construcción de mazo, por lo tanto se podría jugar una copia sin problemas.",
                " Lo que sí se debe respetar, es que al momento de entrar en juego El Círculo Eterno, se debe dejar una copia de cada carta en juego (que pueda ser Destruida)."
            ]
        },
        {
        id: 24,
        pregunta: "¿La carta que destruya a Wyvern debe ser desterrada? (FAQ)",
        respuesta: `Cualquier carta que destruya a Wyvern será Desterrada. 

        Esta puede ser por ejemplo:
        • Bola de Fuego. Una vez resuelta.
        • Fergus al activar su efecto.
        • Aliado bloqueador en la fase de Asignación de daño.`
        },
        {
        id: 25,
        pregunta: "Colmillo negro y modificaciones de fuerza posteriores (FAQ)",
        respuesta: [
                "En este caso particular, hay que tener en cuenta que tipo de habilidad tiene Colmillo Negro, esta posee una Habilidad Continua y por definicion esta se ",
                "antepondra siempre a cualquier modificador de fuerza posterior a que dicha Arma sea portada en un Aliado en Juego.",
                " Consideración: Jugar un Colmillo Negro sobre una Macha, no tendrá ningún efecto, ya que Macha no permite los modificadores de fuerza."
            ]
        },
        {
        id: 26,
        pregunta: "Si tengo en juego la Corona de Arturo, ¿Mercaderes será destruido en la Fase Final? (FAQ)",
        respuesta: [
                "Si, ya que el efecto de considerarse Aliado de Mercaderes dura hasta el comienzo de la Fase Final, y en el momento que Mercaderes debe destruirse por su ",
                "propia habilidad, estos ya dejaron de ser Aliados, por lo cual en ese momento la habilidad de Corona de Arturo no protegería a Mercaderes ya que no hay ",
                "2 Aliados en juego. De otro modo, si en la Fase Final el jugador que controla Corona de Arturo llegase a tener dos o más Aliados en juego, Mercaderes ",
                "se mantendrá en juego.",
            ]
        },
        {
        id: 27,
        pregunta: "Si pago el coste de Activación de una carta que destruya una de mis cartas. ¿Puedo jugar Santo Grial y subirla a mi mano, y además resolver el efecto? (FAQ)",
        respuesta: [
                "Esta jugada no sería válida, ya que para resolver el efecto la carta debe ser Destruída. Un ejemplo es Activar Morgana, Destruir un Aliado. Se puede jugar el ",
                "Santo Grial para subir dicho Aliado a la mano, pero no se resolverá el efecto de Morgana para desterrar un Aliado en juego. Si destruyo a Kernuac el Cazador y ",
                " juego Santo Grial, el Kernuac se irá a la mano pero no podrán desterrarse las dos cartas del Mazo Castillo oponente.",
            ]
        },
        {
        id: 28,
        pregunta: "Si un Aliado porta un Arma y es Destruido, si juego Santo Grial haciendo objetivo el Aliado, ¿Puedo subirme el Arma a la mano también? (FAQ)",
        respuesta: "Si, ya que el Arma sigue al Aliado, por lo tanto ambas terminarán en tu Mano una vez resuelto el efecto de Santo Grial. ",
        },
        {
        id: 29,
        pregunta: "Si copio con Nimue a Bruja Anis, ¿Puedo robar en la Fase Final? (FAQ)",
        respuesta: "No, ya que el efecto de Nimue cesa al inicio de la Fase Final. Por lo tanto ya no será Bruja Anis cuando sea el momento de poder robar una carta.",
        },
        {
        id: 30,
        pregunta: "¿Se puede anular un Aliado con inmunidad a talismanes? (no puede ser afectado por talismanes)? (FAQ)",
        respuesta: "Si, esta es una jugada válida, ya que por regla general la inmunidad a Talismanes se aplica cuando el Aliado está en juego.",
        },
        {
        id: 31,
        pregunta: "¿Qué pasa con Juramento Feérico buscando Armas y portando a Aliados que no pueden ser declarados atacantes? (FAQ)",
        respuesta: [
                "En este caso, el Arma que esté siendo jugada con Juramento Feérico a un Aliado que no esté habilitado para atacar, (por ejemplo Ptha, Osiris, Ay), no podrán ",
                "ser declarados Atacantes.",
            ]
        },
        {
        id: 32,
        pregunta: "¿Cuánta fuerza tiene Balduino con Duque Godofredo en juego? (FAQ)",
        respuesta: [
                "Balduino pierde 1 a la Fuerza cada vez que ataque, esta reducción de Fuerza se aplica permanentemente a su Fuerza impresa en la carta, por lo cual este ",
                "puede recibir bonificadores de cartas como por Ejemplo: Duque Godofredo o Hacha de Batalla, los cuales no serán restados por su Habilidad.",

            ]
        },
        {
        id: 33,
        pregunta: "¿Qué pasa si copio con Nimue a un Greenknight y mi oponente le quita la habilidad con Carnwennan? (FAQ)",
        respuesta: [
                "La habilidad de Nimue hace que se convierta en una copia exacta de la carta hasta la Fase Final. Por lo tanto cualquier habilidad y/o efecto resuelto ",
                "sobre la carta, afectará como si fuese un Greenknight, por lo tanto si pierde su habilidad tendrá fuerza cero.",

            ]
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
                                <p className="texto-punteo">{item.respuesta}</p>
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