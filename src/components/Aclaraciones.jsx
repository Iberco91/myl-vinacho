import React from 'react';
import { useState } from 'react';

//SEGUIR CON EL FAQ, ULTIMA AGREGADA: 118/143
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
        respuesta: "No, la Daga de Bote no permite que se utilicen habilidades que impliquen destruir a un Aliado, ya que su función es justamente lo opuesto."
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
        pregunta: "¿La carta que destruya a Wyvern debe ser desterrada?¿Que pasa en este caso con Bola de Fuego y Fergus? (FAQ)",
        respuesta: `Cualquier carta que destruya a Wyvern será Desterrada. 

        Esta puede ser por ejemplo:
        • Bola de Fuego. Una vez resuelta.
        • Fergus al activar su efecto.
        • Aliado bloqueador en la fase de Asignación de daño.`
        },
        {
        id: 25,
        pregunta: "Colmillo negro y modificaciones de fuerza posteriores, ¿Cómo se resuelve al jugarla con Macha? (FAQ)",
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
        pregunta: "¿Qué pasa con Juramento Feerico buscando Armas y portando a Aliados que no pueden ser declarados atacantes (Ptah, Osiris, Ay)? (FAQ)",
        respuesta: [
                "En este caso, el Arma que esté siendo jugada con Juramento Feerico a un Aliado que no esté habilitado para atacar, (por ejemplo Ptah, Osiris, Ay), no podrán ",
                "ser declarados Atacantes.",
            ]
        },
        {
        id: 32,
        pregunta: "¿Cuánta fuerza tiene Balduino con Duque Godofredo en juego? (FAQ)",
        respuesta: [
                "Balduino pierde 1 a la Fuerza cada vez que ataque, esta reducción de Fuerza se aplica permanentemente a su Fuerza impresa en la carta, por lo cual este ",
                "puede recibir bonificadores de cartas como por Ejemplo: Duque Godofredo o Hacha de Batalla, los cuales no serán restados por su Habilidad."
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
        {
        id: 34,
        pregunta: "¿Si tengo a Orium y Monte Kilgharrah en juego, cuando se destruya Orium en la Fase Final ya que atacó, puedo barajarlo en el mazo por el efecto del Totem? (FAQ)",
        respuesta: [
                "Si, ya que el orden correcto para resolver la interacción es: Se destruye el Aliado, luego se dispara el efecto de Monte Kilgharrah por lo tanto podrás ",
                "barajar una carta de tu Cementerio en tu Mazo Castillo.",
            ]
        },
        {
        id: 35,
        pregunta: "Crear Fungoides + Hijas del Caldero, ¿Puedo desterrar las Hijas del Caldero para ganar un turno extra? (FAQ)",
        respuesta: [
                "Con Crear Fungoides podrás traer a Hijas del Caldero, pero serán destruidas al inicio de la Fase final, por lo tanto no podrás ganar un turno extra. ",
                "La habilidad de Hijas del Caldero se dispara previo a Finalizar el turno.",
            ]
        },
        {
        id: 36,
        pregunta: "¿Crear fungoides haciendo objetivo a Aliados indestructibles?¿Que pasa con Cruz Tempplaria y Crear Caballero Negro en esta situación? (FAQ)",
        respuesta: [
                "Esta sería una jugada completamente válida, ya que cuando se realizan búsquedas en el Mazo Castillo (Zona Privada), no se realizan comprobaciones de ",
                "requisitos o condiciones de juego para resolver el Talismán en cuestión 'Crear Fungoides'. Caso similar sería con Cruz Templaria, se podría buscar un ",
                "Aliado Indesterrable con su habilidad. Aplica también el mismo concepto para Crear Caballero Negro, trayendo un Aliado Indesterrable del Cementerio oponente.",
            ]
        },
        {
        id: 37,
        pregunta: "En respuesta a un ataque con Goblin Maligno, juegan Congelar, ¿Cómo se resuelve? (FAQ)",
        respuesta: [
                "En esta situación siempre hay que tener en consideración las prioridades en que se disparan o resuelven las habilidades o efectos. ",
                "Goblin Maligno dispara su efecto en respuesta a declarar ataque. Por lo tanto una vez resuelto el efecto de ganar fuerza, el oponente podría jugar ",
                "Congelar, pero no tendrá ningún efecto ya que Goblin Maligno ya fue bonificado por su habilidad disparada. Esto ocurre al ser el jugador activo que ",
                "tiene la prioridad en este caso, se bonifica antes de poder el oponente responder con el Talismán."
            ]
        },
        {
        id: 38,
        pregunta: "¿Puedo jugar Capa de Invisibilidad a Helios y/o Dendera? (FAQ)",
        respuesta: [
                "En ambos casos no se podría jugar Capa de Invisibilidad ya que dichas cartas poseen la habilidad en su texto 'No pueden ser afectados por Talismanes ",
                "oponentes', esto se responde por que al jugar Capa de Invisibilidad tanto Helios como Dendera ya estarían en juego por ende, su habilidad los protegerá ",
                "ante talismanes oponentes.",
            ]
        },
        {
        id: 39,
        pregunta: "¿Si tengo en mi cementerio a Goblin Maligno y luego lo copio con Nimue, ¿Este puede atacar ese mismo turno que entra en juego? (FAQ)",
        respuesta: [
                "No, ya que los Aliados tienen como requisito haber estado en juego bajo el control del jugador activo desde el principio de su última fase de agrupación. ",
                "Nimue, entra al juego en fase de Vigilia y al momento de copiar a Goblin Maligno, no está entrando en juego, por lo que no está habilitada para atacar de ",
                "inmediato.",
            ]
        },
        {
        id: 40,
        pregunta: "¿Puedo no robar por Sir Agravain cuando se cumplan sus condiciones cuando entra en juego? (FAQ)",
        respuesta: "En este caso en particular, tanto el robo como el descarte son obligatorios, siempre que se cumpla la condición de controlar otro Aliado de raza Caballero.",
        },
        {
        id: 41,
        pregunta: "¿Qué pasa si hago objetivo a un Aliado en Línea de defensa con Sebile? (FAQ)",
        respuesta: "El Aliado podrá ser declarado atacante (si pudiese), pero luego no podrá ser agrupado mientras Sebile esté en línea de defensa.",
        },
        {
        id: 42,
        pregunta: "¿Puedo con Carnwennan quitar la habilidad a una carta fuera del juego? (FAQ)",
        respuesta: [
                "Si por ejemplo mi oponente tiene un Asaltar la Caravana o una carta que se pueda jugar del Cementerio, en esa zona NO puedo desterrar Carnwennan para ",
                 "quitarle la habilidad. Carnwennan solo afecta a cartas que no sean Oro que estén en juego.",
            ]
        },
        {
        id: 43,
        pregunta: "Si el portador de Espada de Caballero hace daño, en su próximo turno su oponente, ¿Qué tipo de baraje no podrá resolver? (FAQ)",
        respuesta: [
                "El efecto de esta carta, solo protegerá de barajar cartas del Cementerio al Mazo Castillo. Errata: 'Si el portador hace daño al Mazo Castillo oponente, ",
                "tu oponente no podrá barajar cartas de su Cementerio en su Mazo Castillo en su próximo turno.' ",
            ]
        },
        {
        id: 44,
        pregunta: "Si luego de resolver el efecto de Sir Robin de Locksley, este sale del juego y el Aliado controlado sigue en juego en la fase final, ¿Debo devolverlo al control oponente? (FAQ)",
        respuesta: "Si, ya que el efecto está disparado hasta la Fase final, por lo tanto si sigue en juego deberá resolverse y volver al control oponente."  
        },
        {
        id: 45,
        pregunta: "Al jugar un Aliado con Siroco, ¿Dónde se juega, y hasta cuando? (FAQ)",
        respuesta: [
                "Quien juegue el Talismán Siroco, se considerará el controlador del Aliado, hasta que salga del juego. Tener en consideración que si el Aliado jugado con ",
                "Siroco sale del juego por cualquier efecto, este se va a la Zona correspondiente, pero del dueño de el Aliado jugado.",
            ]
        },
        {
        id: 46,
        pregunta: "¿Puedo descartar un oro como Corona de Arturo para dar el bono de fuerza por Excalibur? (FAQ)",
        respuesta: [
                "No, ya que se debe descartar una carta que tenga Coste. La habilidad podría ser ejecutada descartando cartas de Talismán, Arma, Aliado y/o Totem. ",
                "Recordatorio: Los Oros no poseen coste.",
            ]
        },
        {
        id: 47,
        pregunta: "¿Hobgoblin cambió su nombre, es válido para el bono de Fuerza de Goblin Maligno? (FAQ)",
        respuesta: [
                "Si, ya que oficialmente la carta contiene en su nombre 'Goblin'. En su versión anterior estaba mal escrito y desde el producto Reposición Relatos ",
                "Espada Sagrada, se considera carta nueva además de recibir una mejora en su habilidad.",
            ]
        },
        {
        id: 48,
        pregunta: "¿Si juego Espada Larga portandola a un Aliado oponente, este puede responder con un Siete contra Tebas? (FAQ)",
        respuesta: [
                "El oponente no podrá responder con Siete contra Tebas para cancelar la habilidad disparada de Espada Larga, ya que al ser jugada ya no se considerará ",
                "carta oponente. Por lo tanto el efecto de Siete contra Tebas no es válido, ya que solo cancela habilidades Activadas o Disparadas oponentes.",
            ]
        },
        {
        id: 49,
        pregunta: "¿Cómo se resuelve Escudo de Atenea?¿Como funciona con Eolo y Rayos? (FAQ)",
        respuesta: [
                "La habilidad de Escudo de Atenea es una Redirección, por ende cuando utilices su habilidad, su portador no se vería afectado. Siempre hay que tener en ",
                "cuenta que el nuevo objetivo debe ser válido para poder llevar a cabo la Redirección. Por regla general los efectos globales no pueden ser Redirigidos, ",
                "Ejemplos: Eolo y Rayos.",
            ]
        },
        {
        id: 50,
        pregunta: "¿Debo mostrar la carta por Idmon el Adivino? (FAQ)",
        respuesta: [
                "La habilidad impresa de Idmon el adivino en las versiones actuales no especifica que la carta debe ser mostrada. Para efectos futuros y nuevas impresiones ",
                "Idmon el Adivino deberá MOSTRAR la carta del tope, por lo tanto se entiende que Idmon el Adivino recibe esta ERRATA. ",
            ]
        },
        {
        id: 51,
        pregunta: "¿Puedo jugar Antropófagos en Aliados Indestructibles? (FAQ)",
        respuesta: [
                "Por regla general en Primer Bloque, existen los requisitos para que las cartas puedan ser jugadas, en este caso el requisito fundamental de Antropófagos es ",
                "poder hacer objetivo a un Aliado y además que dicho aliado pueda ser Destruido en la Fase Final, es por esto que NO sería una jugada válida.",
            ]
        },
        {
        id: 52,
        pregunta: "¿Leonidas puede robar en todos los turnos? (FAQ)",
        respuesta: [
                "No, ya que solo robas una carta extra en tu Fase Final. En este caso en particular, siempre que se cumpla la condición (Controlar 2 o más Héroes), deberás ",
                "Robar 1 carta en tu Fase Final. El efecto de Robar se dispara sólo en Tu Fase Final.",
            ]
        },
        {
        id: 53,
        pregunta: "¿Cómo se resuelve Arde Troya y como funciona con Felipe II? (FAQ)",
        respuesta: [
                "La Habilidad de Arde Troya posee una Errata para mejor entendimiento y es la siguiente: 'Anula o cancela una carta que afecte a los Oros en juego. Si la ",
                "carta es cancelada, destrúyela. Si juegas Arde Troya en el turno oponente, éste pasa directamente a la Fase Final'. Ejemplo: Si el oponente en su Turno ",
                "juega Felipe II, inmediatamente después de eso podrás jugar Arde troya para cancelar su habilidad de entrada y luego destruirla. En este caso se dispara la ",
                "habilidad de salida de Felipe II (Destruir un Oro), luego el oponente deberá pasar a su Fase Final directamente.",
            ]
        },
        {
        id: 54,
        pregunta: "Caja de Pandora, ¿Debe estar en reserva para disparar su habilidad? (FAQ)",
        respuesta: [
                "En este caso particular, para su mejor entendimiento la redacción de Caja de Pandora es: 'Si Caja de Pandora está en tu Reserva de Oros, puedes desterrarla ",
                "y pagar 1 Oro para anular un Talismán oponente de coste 2 o menos'. Por lo tanto se entiende que Caja de Pandora debe estar en Reserva y desterrarla para ",
                "anular el Talismán oponente.",
            ]
        },
        {
        id: 55,
        pregunta: "Si me atacan con 3 Aliados, ¿Cuánto daño hace Hestia al mazo Castillo oponente? (FAQ)",
        respuesta: [
                "Hay que tener en cuenta que en la Asignación de Daño se calculará la suma de todos los Aliados que logren hacer daño al Mazo castillo oponente y se tomará ",
                "ese resultado como Daño de manera consolidada. Es por esto que Hestia, solo podría realizar 3 de Daño.",
            ]
        },
        {
        id: 56,
        pregunta: "¿Puedo pagar Ave de Hera a ella misma para transformarla y atacar? (FAQ)",
        respuesta: [
                "Sí, ya que la habilidad se lo permite, esta no pide condición de Zona (Reserva-Oro Pagado) y no la hace excluyente. No obstante, siempre tener en ",
                "consideración la Zona desde donde fue convertido Ave de Hera, ya que en la Fase Final debería volver a esa misma Zona. Tener en cuenta que cuando Ave de Hera ",
                "se Convierte en Aliado pierde el tipo de carta Oro, pudiendo ser destruida en este caso con cartas como Bola de Fuego.",
            ]
        },
        {
        id: 57,
        pregunta: "La habilidad de Arco de Apolo, ¿Es una vez por turno o solo en tu turno? (FAQ)",
        respuesta: [
                "Esta carta en particular tiene un error de impresión, y su habilidad es “Una vez por turno”, por lo tanto podrá ser activada en tu turno como también en ",
                "Guerra de Talismanes del turno oponente.",
            ]
        },
        {
        id: 58,
        pregunta: "La carta Veneno Sagrado, ¿Afecta a Helios? (FAQ)",
        respuesta: [
                "Hay cartas como Veneno sagrado, que afectan directamente al jugador objetivo y no a los Aliados en sí. El efecto de Veneno Sagrado haría que destruyas un ",
                "Aliado que controles, y tu oponente 2 Aliados, y como es el mismo jugador el que destruye a sus aliados, Helios podría ser destruido.",
            ]
        },
        {
        id: 59,
        pregunta: "¿Puedo jugar Forma de Toro si hay una Corona de Arturo en juego, y ese jugador controla 2 o más Aliados? (FAQ)",
        respuesta: [
                "Por regla general en Primer Bloque, existen los requisitos para que las cartas puedan ser jugadas, en este caso uno de los requisitos de Forma de Toro es ",
                "poder en la Fase Final, destruir un oro que controles, es por esto que no sería una jugada válida.",
            ]
        },
        {
        id: 60,
        pregunta: "¿Si se jugó Red de Aracne, ¿Puedo activar la habilidad de Nimue? o ¿Cuánto daño hace Bas-Pef? (FAQ)",
        respuesta: [
                "En el caso de Nimue no podría activar su habilidad ya que por efecto de Red de Aracne, no puedes elegir un Aliado y copiar su habilidad. Por el contrario en ",
                "el caso de Bas-Pef si podría hacer daño directo, ya que “contar” Aliados o cartas específicas de un Cementerio, no significa que esté jugando con dicha Zona. ",
                "Solo se está haciendo un chequeo.",
            ]
        },
        {
        id: 61,
        pregunta: "¿Puedo jugar un Antropófagos a un Ra o Rey Arturo Pendragón y en Fase Final prevenir que salga del juego? (FAQ)",
        respuesta: [
                "Si, ya que ninguno de los Aliados son indestructibles que sería la condición para no poder hacerlos objetivo. En ambos casos tienen la capacidad de Prevenir ",
                "que sean destruidos, es por esto que cuando ese evento ocurra (Destruirlos en la Fase Final), ambos Aliados quedarían en control del jugador que jugo la ",
                "carta Antropofagos.",
            ]
        },
        {
        id: 62,
        pregunta: "Si me atacan con un aliado con Gladius y bloqueo con uno de menor fuerza, ¿Puedo usar al Aliado que bloqueó para que sea destruido por la Gladius? (FAQ)",
        respuesta: [
                "No, de acuerdo con el DAR 'Julio 2021' en su apartado 5.3.4 'Asignación de Daño', 'acciones de esta etapa', en los puntos principales se especifica que ",
                "en primera instancia el jugador defensor recibe el daño resultante del cálculo de fuerzas entre el(los) aliado(s) oponente(s) declarado(s) atacante(s) y ",
                "su(s) aliado(s) bloqueador(es), para luego pasar a la etapa de la destrucción (en caso de que los aliados puedan ser destruidos) por diferencia de fuerzas.",
            ]
        },
        {
        id: 63,
        pregunta: "Si una carta afectada por Forma Estelar sale del juego y vuelve a entrar posteriormente, ¿Recupera su habilidad? (FAQ)",
        respuesta: [
                "Si, una vez resuelta la habilidad de Forma Estelar, se considera que la carta pierde su caja de texto de habilidad solo mientras esté en juego. Recordar, ",
                "que siempre conservará sus atributos de carta (ejemplo, si es un Aliado, seguirá teniendo su Coste y Fuerza impresos, si es un Tótem o Arma conservará su ",
                "coste). Si la carta sale del juego y vuelve a entrar, esta vuelve con su habilidad.",
            ]
        },
        {
        id: 64,
        pregunta: "Si tengo dos copias de Ares en juego y en Guerra de Talismanes activo de uno de ellos, luego mi Oponente cancela la habilidad de este, ¿Puedo pagar el coste de activación de mi segundo Ares para cancelar un ataque o bloqueo? (FAQ)",
        respuesta: [
                "Si, ya que se activa en Guerra de Talismanes. Recordar que siempre se debe respetar los turnos de dicha fase, por lo que, si la habilidad del primer Ares es ",
                "cancelada, se le cede el turno de acción al oponente.",
            ]
        },
        {
        id: 65,
        pregunta: "¿Como se resuelve El Don de Clío con 1, 2, 3 o 4 cartas en el Mazo Castillo? (FAQ)",
        respuesta: `Ya que mirarás en medida de lo posible siempre quedará primero una carta en tu mano, luego una al tope y el resto al cementerio.

        • Si tienes 1 carta en el mazo, pierdes la partida ya que primero pondrás una carta en tu mano y no quedarán cartas en el mazo.
        • Si tienes 2 cartas en el mazo y juegas el don de clio, una irá a tu mano otra al tope y nada al cementerio.
        • Si tienes 3 o 4 cartas o más pondrás una en tu mano, una al tope y el resto irá al cementerio.`
        },
        {
        id: 66,
        pregunta: "¿Como se resuelve Polemos? (FAQ)",
        respuesta: `Polemos permite robar 2 cartas al jugador que muestre la carta de mayor coste, en consecuencia de esto, se resuelve.

        • Jugador A muestra carta coste 2 - Jugador B muestra un oro: Roba el jugador A.
        • Jugador A muestra carta coste 2 - Jugador B muestra carta coste 2 : Ningún jugador roba, puesto que ninguno tuvo superioridad en coste.
        • Jugador A muestra carta de oro - Jugador B muestra carta de oro: Ningún jugador roba, puesto que un oro no tiene coste.
        • Jugador A, muestra carta coste 2 - Jugador B muestra carta coste 1: Roba el jugador A, puesto que mostró una carta de mayor coste.
        • Jugador A muestra un Oro - Jugador B muestra una carta coste 0: Ningún jugador roba las 2 cartas por Polemos.
        
        Si ambos jugadores tienen 1 carta en su mazo castillo: Ambos deben mostrar la primera carta, puesto que la habilidad de Polemos se 
        activa al ser declarado atacante y el mostrar la carta solo es exhibir no generando un daño al Mazo Castillo.`
        },
        {
        id: 67,
        pregunta: "Si nombro con Temístocles “Goblin”, que cartas pierden la habilidad? ¿Cómo se aplica esta regla para Nehebaku? (FAQ)",
        respuesta: [
                "Al jugar Temístocles y resolver su habilidad, se debe nombrar una carta, la cual no afecta la regla de Concordancia de nombres. Ejemplos: Si nombro 'Goblin', ",
                "se considerará que será el Aliado Coste 2 Fuerza 2. Pero no Goblin Maligno, Goblinstone, etc. Si nombro 'Druida' no hay carta que solo se llame Druida, por lo ",
                "tanto no es una jugada válida y debe corregirse. En términos generales, para nombrar una carta debe ser algo que se puede identificar, incluso el jugador no ",
                "pudiese conocer el nombre exacto de la carta. Por ejemplo, es válido nombrar e identificar una carta por su coste, fuerza, habilidad y alguna característica ",
                "que a se refiere. En caso de requerir ayuda o no llegar a un acuerdo en el entendimiento de la carta nombrada, se puede apoyar en el criterio del Juez para ",
                "entender cuál carta fue nombrada. Esta aclaración se extiende para otros tipos de cartas que nombren, como por ejemplo Nehebaku. ",
            ]
        },
        {
        id: 68,
        pregunta: "Kenneth I, ¿Puede desterrarse para nombrar Talismanes? (FAQ)",
        respuesta: [
                "En su errata oficial, Kenneth I explícitamente indica que el requisito para su activación es que la carta objetivo debe estar en juego, y los Talismanes ",
                "'NO ENTRAN EN JUEGO'. ",
            ]
        },
        {
        id: 69,
        pregunta: "¿Cuál es la forma correcta para jugar a Tutatis? (FAQ)",
        respuesta: `Para poder jugar Tutatis se deben siempre cumplir la condiciones requeridas para jugarlo, en este caso sería controlar al menos 2 Aliados, sin ser considerado el mismo:

        • Ejemplo 1: Jugarlo desde la Mano
        • Ejemplo 2: Nombrarlo con Sir Bedivere
        • Ejemplo 3: Jugarlo por efecto de una Llama Fría
        • Ejemplo 4: Jugarlo por efecto de un Tumulario
        `
        },
        {
        id: 70,
        pregunta: "¿Cuántos Boobrie puedo jugar en respuesta a una declaración de ataque? (FAQ)",
        respuesta: [
                "Solo uno, ya que por regla general, la activación de múltiples habilidades en respuesta a un evento, se aplica solo para cartas en juego. Siempre que juegues ",
                "Boobrie en respuesta a un ataque oponente, éste debe ser declarado bloqueador. ",
            ]
        },
        {
        id: 71,
        pregunta: "Letanía, ¿Qué Oros puedo prevenir que sean afectados? (FAQ)",
        respuesta: [
                "La habilidad de Letanía es una prevención, esto quiere decir que se puede activar su habilidad inmediatamente después de que uno de tus Oros sea afectado por una ",
                "habilidad oponente (Incluyendo Letanía). Ejemplo: Si juegan Joyero a una Letanía o cualquiera de tus otros oros, puede activar su habilidad para prevenir que ",
                "cualquier de ellos sea afectado por Joyero, por lo que evitas que tu oponente gane el control de uno de tus Oros y Letanía es subida a tu Mano.",
            ]
        },
        {
        id: 72,
        pregunta: "¿Cómo se resuelve Averix el Sabio? (FAQ)",
        respuesta: [
                "La Habilidad de Averix el Sabio posee una Errata para mejor entendimiento y es la siguiente: Mientras Averix el Sabio esté en juego, tu oponente no puede activar ",
                "habilidades que duren hasta el Final del Turno o hasta la Fase Final. Esto quiere decir que, tu oponente no puede activar ninguna habilidad que dure hasta el Final ",
                "del Turno o hasta la Fase Final, independientemente de que su duración no esté de forma explícita en la carta. Averix el Sabio no afecta a los Talismanes.",
            ]
        },
        {
        id: 73,
        pregunta: "Niña de la Suerte y habilidades disparadas. Ejemplo con Gruagash para mejor entendimiento (FAQ)",
        respuesta: [
                "Para un mejor entendimiento, las cartas mostradas con Niña de la Suerte deben cumplir con todos los requisitos que tengan, como costes adicionales y/o condiciones ",
                "específicas en que se puedan jugar. Si ambas cartas cumplen lo necesario para entrar en juego y tuviesen habilidades disparadas, independiente de que habilidad ",
                "sea, ambas disparan su habilidad, pero siempre partiendo por el jugador que jugó Niña de la Suerte. Ejemplo: Pedro, juega Gruagash, Marcela juega Sir Tristan, en ",
                "este caso independiente de la habilidad de Gruagash ambos disparan su habilidad y luego Sir Tristan será barajado en su Mazo Castillo.",
            ]
        },
        {
        id: 74,
        pregunta: "¿Cuántas Horda Fomore puedo poner desde el Cementerio en mi mano por turno? (FAQ)",
        respuesta: [
                "Errata: 'Si Horda Fomore está en tu Cementerio puedes desterrar un Aliado de raza Sombra de tu Cementerio para poner a Horda Fomoré en tu Mano. Sólo puedes activar una ",
                "Horda Fomore por turno.' Por lo tanto sólo puedes subir una Horda Fomore por turno a tu mano.",
            ]
        },
        {
        id: 75,
        pregunta: "Con Brian Boru, ¿Puedo hacer objetivo a un Aliado en línea de Defensa que no pueda ser declarado atacante? (FAQ)",
        respuesta: [
                "Si, ya que Brian Boru solo lo está moviendo de Zona de juego. En ningún momento lo declara atacante. Por lo tanto un Aliado que solo puede bloquear, puede ser movido a la ",
                 "Línea de Ataque.",
            ]
        },
        {
        id: 76,
        pregunta: "¿Cuántas cartas puede barajar Caturix? (FAQ)",
        respuesta: `Su efecto dice que puede barajar HASTA cuatro cartas. Y se pueden combinar entre Oros y Aliados de raza Desafiante.
        Por lo tanto puedes barajar:

        • 4 oros + 0 Aliados
        • 3 oros + 1 Aliado
        • 2 oros + 2 Aliados
        • 1 Oro + 3 Aliados
        • 0 oros + 4 Aliados
        • 3 oros
        • 3 Aliados
        • 2 oros
        • 2 Aliados
        • etc.

        La cantidad de cartas barajadas jamás puede ser mayor a 4, pero su habilidad al tener un HASTA redactado pueden ser menos.
        `
        },
        {
        id: 77,
        pregunta: "¿Qué pasa si ambos jugadores tienen 2 cartas en el Mazo Castillo y juego Arbol de Sangre? (FAQ)",
        respuesta: [
                "En caso de que se de que ambos jugadores tienen 2 cartas en el Mazo Castillo, será un empate. Arbol de Sangre. Para este efecto, los jugadores deben Botar 2 ",
                "cartas al mismo tiempo, de una en una. Si al Botar cartas una en una, uno de los jugadores queda sin cartas en su Mazo Castillo, perderá el duelo. Se puede dar ",
                 "el caso de que ambos jugadores tengan 2 o menos cartas en su Mazo Castillo y si es la misma cantidad, el duelo termina en empate.",
            ]
        },
        {
        id: 78,
        pregunta: "Si Corff es declarado atacante, ¿Podrá darse fuerza a sí mismo? (FAQ)",
        respuesta: [
                "No, ya que solo podrá bonificar a Aliados que lo acompañen en el ataque (hasta 2). Pero si declaro ataque con 2 Corff entre ellos podrán darse fuerza sin ",
                "problema. En resumen, si ataca en solitario, su fuerza es 1.",
            ]
        },
        {
        id: 79,
        pregunta: "¿Puedo redirigir el efecto de Aplastar Fomor con Relámpago Arcano a otro Aliado en juego? (FAQ)",
        respuesta: [
                "No, ya que Aplastar Fomor es un efecto global y por lo tanto no se podría redirigir a otro Aliado en juego.",
            ]
        },
        {
        id: 80,
        pregunta: "Con Aed, si mi oponente controla sólo un Aliado, puedo subirlo a la Mano? (FAQ)",
        respuesta: [
                "No, ya que en este caso el efecto de Subir 2 Aliados a La Mano se debe resolver por completo, tal como se aclaró con el Aliado Vouivre.",
            ]
        },
        {
        id: 81,
        pregunta: "¿En qué Fase del juego se puede utilizar la habilidad Salmón del Saber? (FAQ)",
        respuesta: [
                "Conforme a lo expuesto por el DAR respecto a las Fases del juego y lo indicado en la habilidad propia de la carta, esta se dispara en la Fase de Batalla ",
                "Mitológica, una vez terminada la Guerra de Talismanes y comenzada la Sub Fase de Asignación de Daño. Cuando se calcula el total del daño resultante de la ",
                "diferencia entre los Aliados atacantes y Aliados bloqueadores, es cuando se dispara la habilidad de esta carta.",
            ]
        },
        {
        id: 82,
        pregunta: "¿Si un Aliado que porte una o más Armas es puesto en la parte superior del Mazo Castillo de su dueño con cartas como Zorro de Fuego, ¿En qué orden quedan las cartas? (FAQ)",
        respuesta: [
                "Para resolver la habilidad de Zorro de Fuego, el Aliado debe quedar siempre en la parte superior del Mazo Castillo, por lo tanto si porta una o más armas, las ",
                "cartas serán devueltas al Mazo en el orden inverso al que entraron en juego en el Mazo Castillo de su Dueño.",
            ]
        },
        {
        id: 83,
        pregunta: "¿Cuántos Oros tengo que pagar para jugar a Kurick el Picto? (FAQ)",
        respuesta: [
                "La habilidad de Kurick, el Picto es una condición para poder jugarlo esto quiere decir que: No puedes destruir los Oros que están siendo utilizados para pagar el ",
                "coste de Kurick, el Picto. En resumen, debes tener al menos 4 oros en juego para jugar Kurick, el Picto ",
            ]
        },
        {
        id: 84,
        pregunta: "¿Si tengo Macha o Serpiente Roja en juego, y activo la habilidad de Boobrie del Cementerio, ¿En la Fase Final es Destruido? (FAQ)",
        respuesta: [
                "Es una jugada válida, si Macha está en juego (propia u oponente), y en Respuesta a una declaración de ataque traes desde el Cementerio un Boobrie para bloquear, ", 
                "este no se destruiría al final del turno, por comparación de fuerza o por el efecto de su propia habilidad. Este efecto también aplica si hay una Serpiente Roja en ",
                "juego. Siendo el mismo resultado.",
            ]
        },
        {
        id: 85,
        pregunta: "¿Como se resuelve País sin Luz y Caldero de la Abundancia? (FAQ)",
        respuesta: [
                "Ambas son cartas en respuesta, pero siempre hay que tener en consideración el orden y momento para jugar o activar dichas cartas, esto quiere decir que: En el caso ",
                "que un Aliado fuese destruido, se debería jugar inmediatamente Caldero de la Abundancia para que fuera una jugada válida, no obstante el orden en este caso sería ",
                "resolver primero la carta que está en juego (País sin Luz) y luego Caldero de la Abundancia.", 
            ]
        },
        {
        id: 86,
        pregunta: "¿Puedo cancelar la habilidad de Tuatha de Danaan con Siete contra Tebas? (FAQ)",
        respuesta: [
                "Si, ya que puedes cancelar cualquier habilidad activada o disparada que se active desde el juego (No se puede cancelar habilidades continuas). En este caso el ",
                "orden correcto es pagar su coste de activación (Subirla a la mano), luego inmediatamente después de dicha acción se debe jugar Siete contra Tebas para cancelarla, ",
                "quedando Tuatha de Danaan en la mano y sin el efecto de robar dos cartas.",
            ]
        },
        {
        id: 87,
        pregunta: "¿En respuesta a un ataque oponente, juego Devorador de Almas con Levantar a los Muertos, ¿se activa la habilidad de Devorador de Almas? (FAQ)",
        respuesta: [
                "No, por que Levantar a los Muertos, especifica que el Aliado debe ser declarado bloqueador por lo que ya estaría en asignación de bloqueo y no de ataque. ",
                "Esto quiere decir que: Levantar a los Muertos se juega al comienzo de la Declaración de Ataque, y Devorador de Almas no se encuentra en juego en ese momento ",
                "para activar su habilidad.",
            ]
        },
        {
        id: 88,
        pregunta: "Si controlo Macda Tho, ¿Cuánta fuerza tendrán los Aliados Imbloqueables que me ataquen? (FAQ)",
        respuesta: [
                "La habilidad de Macda Tho se dispara cuando los Aliados no sean bloqueados, por lo tanto los Aliados imbloqueables tendrán Fuerza 1 hasta la Fase Final. Esta ",
                "habilidad de Macda Tho podría ser cancelada con un Siete contra Tebas ",
            ]
        },
        {
        id: 89,
        pregunta: "Si mi oponente juega Qadesh y controlo a Cuchulain y varios Aliados de raza Defensor, puedo destruir otro Defensor para salvarlo? (FAQ)",
        respuesta: "Si, ya que es una habilidad de Prevención, por lo tanto se antepone al efecto de Qadesh. ",
        },
        {
        id: 90,
        pregunta: "¿Si mi oponente juega Carmix o Eolo, puedo en respuesta desterrar Ojo Udyat? (FAQ)",
        respuesta: [
                "Si, ya que Ojo Udyat se dispara al momento de que se juegue la carta, antes que entre en juego. Se aclara que 'jugar' la carta es previo a que esté en juego, ",
                "por lo que, para este caso, es posible sin inconvenientes. Lo mismo pasaría en caso de que el oponente juegue Eolo, puedo generar la misma interacción con Ojo ",
                "Udyat y traer el Tótem Casa de Hestia para proteger mis Oros de la habilidad de Eolo.",
            ]
        },
        {
        id: 91,
        pregunta: "La habilidad de Lugaid, ¿Se considera disparada o continua? (FAQ)",
        respuesta: [
                "Nos referimos a la segunda habilidad que chequea si Cuchulain está en juego. Podrá atacar el turno que es puesto en juego si Cuchulain está o estará en el mismo ",
                "turno que se jugó Lugaid y además ambos serán imbloqueables si Cuchulain y Lugaid se mantienen en juego. En este caso Lugaid posee una Habilidad Continua y su ",
                "condicionante es que este Cuchulain en juego. ",
            ]
        },
        {
        id: 92,
        pregunta: "¿Por qué Chike de la Sombra no puede ser jugado en Guerra de Talismanes, pero si Druida Maldito? (FAQ)",
        respuesta: [
                "A diferencia de Chike de la Sombra, Druida Maldito si puede ser jugada en Guerra de Talismanes, ya que es explícita en su habilidad. Chike de la Sombra solo puede ",
                "ser jugado en Fase de Vigilia, que es donde se pueden jugar Aliados.",
            ]
        },
        {
        id: 93,
        pregunta: "¿Puedo hacer daño de combate con Sehetepibre y destruirlo para hacer más daño por su habilidad? (FAQ)",
        respuesta: [
                "Sehetepibre puede ser declarado atacante, pero no podría realizar ambos daños en el mazo oponente, si se mantiene en juego en la Batalla Mitológica, en la Fase de ",
                "Asignación de daño (su fuerza o la diferencia de esta si fue bloqueado), pasará como daño al Mazo oponente o puedes destruirlo para que genere daño equivalente a su ",
                "fuerza de manera directa.",

            ]
        },
        {
        id: 94,
        pregunta: "¿Debo pagar el coste del Tótem jugado con Ojo Udyat? (FAQ)",
        respuesta: [
                "Se aplica este efecto por la reedición de la carta en Leyendas Primer Bloque 3.0 Ejemplo: Jugador oponente juega una Bola de Fuego un aliado en juego (Afrodita), ",
                "inmediatamente después de dicha acción, puedo desterrar Ojo Udyat desde la Reserva de Oros y buscar un Tótem en el Mazo Castillo y Jugarlo pagando su coste. ",
            ]
        },
        {
        id: 95,
        pregunta: "¿Guiza puede transformarse para atacar? (FAQ)",
        respuesta: [
                "Por regla general de Autorreferencia, Guiza no puede ser afectada por su propia habilidad, es decir, no puede utilizar el efecto de considerarse un Aliado en sí ",
                "misma. Solo podría ser declarada atacante si por efecto de otra carta se convierte o considera un Aliado, como por ejemplo otra copia de Guiza en campo oponente.",
            ]
        },
        {
        id: 96,
        pregunta: "¿Qué pasa si le quito la habilidad a Aliados como Takelot o Temistocles? (FAQ)",
        respuesta: [
                "Si alguno de los Aliados en cuestión (Takelot y Temistocles), pierden su habilidad, las cartas nombradas por ellos volverían a recuperar su habilidad, a su vez si ",
                "Takelot o Temístocles recuperan su habilidad nuevamente las cartas nombradas por ellos volverían a perder la habilidad.",
            ]
        },
        {
        id: 97,
        pregunta: "¿Cómo funciona Relámpago Arcano? (FAQ)",
        respuesta: `Relámpago Arcano es una redirección por ende se juega inmediatamente después que tu oponente juegue una carta o active una 
        habilidad que afecte a una de tus cartas en juego que no sea Oro, al redirigir el efecto, siempre será mandante la habilidad de la carta que jugó o activo tu oponente.

        Por lo tanto el objetivo a redirigir debe ser válido:

        • Ejemplo 1: Si tu oponente te juega una Bola de Fuego, inmediatamente juegas Relámpago Arcano redirigiendo la habilidad 'Destruye 
        una carta en juego que no sea Oro',  ya que es la habilidad Mandante de Bola de Fuego y podrías redirigir la habilidad a cualquier carta en juego que no sea Oro. 
        • Ejemplo 2: Si tu oponente juega Haquika (Cuando Haquika entra en juego, puedes elegir un Aliado oponente y ponerlo en tu Línea de 
        Defensa.), inmediatamente puede jugar Relámpago Arcano y redirigir dicha habilidad a otro de tus aliados, ya que la habilidad mandante de Haquika es que sea un Aliado oponente.
        • Ejemplo 3: Si tu oponente activa Kennet I (Puedes desterrar a Kenneth I para que una carta en juego y todas sus copias, pierdan su 
        habilidad hasta la Fase Final.), no puedes jugar Relámpago Arcano para redirigir dicho efecto, ya que la habilidad de Kenneth I se considera como global / universal. Mismo ejemplo para interacción con Thanatos.
        • Ejemplo 4: Si tu oponente activa Neferite I (En tu Fase de Vigilia, sólo una vez por turno, puedes desterrar tantas cartas de tu 
        Cementerio como coste tenga una carta en juego para desterrarla.), inmediatamente puedes jugar Relámpago Arcano y redirigir dicha 
        habilidad a otra carta en juego que no sea Oro. Pero no puedes hacer objetivo a Neferite I, ya que por regla de Autoreferencia (DAR 4.6.11) no puede desterrarse a sí mismo.
        `
        },
        {
        id: 98,
        pregunta: "Puedo jugar un Chike de la Sombra en la Guerra de Talismanes? (FAQ)",
        respuesta: [
                "No. Ya que si bien la habilidad de Chike de la Sombra nos permite ser jugado desde el Cementerio, no es posible jugarlo en la Guerra de Talismanes. Esto es, porque ",
                "debido a que su habilidad no tiene un gatillante respecto a alguna fase del juego en específico, puede sólo ser activada en la Fase de Vigilia del propietario.",
            ]
        },
        {
        id: 99,
        pregunta: "Si el Aliado portador es Destruido la habilidad de Gran Khopesh hará que mi oponente bote cartas de su Mazo Castillo? (FAQ)",
        respuesta: [
                "No, ya que por regla general, para que el efecto de dicha habilidad se resuelva, Gran Khopesh debería estar en juego y como fue destruido su portador no ",
                "tendría efecto en el campo. ",
            ]
        },
        {
        id: 100,
        pregunta: "Si tengo Beni Hassan y Kom Ombo en juego, ¿El daño de Menhit cuanto sería?¿Y para el caso de Colosos Hititas? (FAQ)",
        respuesta: [
                "La habilidad de Menhit, de pagar 2 oros para desterrar la primera, no se ve beneficiada por Kom Ombo ya que no es daño directo, ni tampoco se verá ",
                "limitada por Beni Hassan ya que al no considerarse daño directo, no hay problema en desterrar la primera. Pasa lo mismo con Colosos Hititas. ",
            ]
        },       
        {
        id: 101,
        pregunta: "Si pago 1 oro con Heka y durante el turno este Aliado sale del juego, ¿Robo en la Fase Final? (FAQ)",
        respuesta: [
                "Si, ya que el efecto ya fue pagado y debe resolverse aunque la fuente no esté en juego. Es un efecto que debe resolverse en la Fase Final. Cabe destacar ",
                "que si se paga 1 oro, el robo extra es obligatorio en la Fase Final.",
            ]
        },
        {
        id: 102,
        pregunta: "Si no tengo más Aliados en juego. ¿Puedo Destruir a Principe Djedi para hacer dos de daño? (FAQ)",
        respuesta: [
                "No, ya que por la regla de Auto-Referencia se indica que la Fuente del efecto nunca puede ser Objetivo del mismo efecto. ",
            ]
        },
        {
        id: 103,
        pregunta: "La habilidad de entrada, el robo de Djedefhor, ¿Es obligatorio? (FAQ)",
        respuesta: [
                "El robo es obligatorio, a menos que exista una restricción de robo en juego que no lo permita, como por ejemplo que un jugador controle una Islas Filas.",
            ]
        },
        {
        id: 104,
        pregunta: "Puedo atacar con un Aliado que acaba de entrar en juego teniendo en juego Corona Faraonica? (FAQ)",
        respuesta: [
                "En este caso, si no controlo Aliados Faraón y el Aliado entrante es el primero que pongo en juego, este no podrá ser afectado por Corona Faraónica.",
            ]
        },
        {
        id: 105,
        pregunta: "¿Puedo jugarle Capa de Invisibilidad a Seshat? (FAQ)",
        respuesta: [
                "A diferencia del caso anterior, Seshat puede ser afectada por Talismanes, pero cuando entra en juego busca un Arma y la pone en juego sin pagar su coste. ",
                "Por lo tanto mientras el Arma esté en juego Seshat no podrá salir de él. Debido a esto Capa de Invisibilidad no puede ser jugada, ya que al entrar Seshat, ",
                "el Arma al estar en juego impediría que Seshat sea barajada por Capa de Invisibilidad.",
            ]
        },
        {
        id: 106,
        pregunta: "¿Puedo destruir a Nemty para barajar una carta oponente? (FAQ)",
        respuesta: [
                "No es una jugada válida. Esto es debido a que no se puede hacer autorreferencia a la fuente de la habilidad. Nemty no puede destruirse a sí mismo para barajar ",
                "una carta oponente.",
            ]
        },
        {
        id: 107,
        pregunta: "¿Puedo intentar Cancelar la habilidad de Oseye 'Puede atacar el turno que entra en juego' con Siete contra Tebas? (FAQ)",
        respuesta: [
                "No, debido a que es una habilidad continua, que posibilita al Aliado que la posee para atacar cuando entra en juego. Cabe Señalar, que cuando un Aliado cambia ",
                "de controlador estando en juego y cuenta con esta habilidad, no se encontrará habilitado para atacar, puesto que ya se encontraba en juego.",
            ]
        },
        {
        id: 108,
        pregunta: "¿Puedo desterrar cartas de coste cero con Neferite I, como Kobold? (FAQ)",
        respuesta: [
                "Si, ya que cero es un coste, y Neferite I solo especifica que se debe desterrar tantas cartas como coste tenga una carta para desterrarla, El ejemplo más común, ",
                "sería poder desterrar un Kobold. Esto sucede declarando la activación de la habilidad de Neferite I, haciendo objetivo a Kobold.",
            ]
        },
        {
        id: 109,
        pregunta: "Interacción de Amon con Sir Persival o similares (FAQ)",
        respuesta: [
                "La habilidad de Amon se dispara cada vez que lo hagan objetivo, se deben pagar 2 oros adicionales. Esto quiere decir que: Cuando Sir Persival entra en juego, debe ",
                "pagar 2 oros adicionales para resolver su habilidad disparada contra Amon.",
            ]
        },
        {
        id: 110,
        pregunta: "Interacción de Amon con Talismanes (FAQ)",
        respuesta: [
                "La habilidad de Amón se dispara cada vez que lo hagan objetivo, se deben pagar 2 oros adicionales. Esto quiere decir que: Cuando Sir Persival entra en juego, debe ",
                "pagar 2 oros adicionales para resolver su habilidad disparada contra Amón.",
            ]
        },
        {
        id: 111,
        pregunta: "¿Cómo se resuelve Gruagash y Akenathon? (FAQ)",
        respuesta: [
                "Al entrar en juego Gruagash, dispara su habilidad completa, quitando la habilidad a todos los demás Aliados en juego y los baraja. Al estar Akenathon en juego, ",
                "previene que los demás Aliados sean afectados por habilidades oponentes, es por esto que solo se baraja Akenathon y los demás Aliados oponentes permanecen en juego.",
            ]
        },
        {
        id: 112,
        pregunta: "Si le porto Carro Celta a Dario el Grande, ¿Este es afectado por la habilidad del Arma? (FAQ)",
        respuesta: [
                "Las habilidades de todas estas cartas se disparan en la Fase Final, siendo el controlador de Dario el Grande quien decide cuál activar primero. Lo óptimo sería, subir ",
                "a su mano a Dario el Grande para que no sea afectado por la Habilidad del Arma portada. El Arma sigue al Aliado, en este caso iría a la Mano.",
            ]
        },
        {
        id: 113,
        pregunta: "Si mi oponente ganó el control de uno de mis Aliados con Haquika y yo juego Guardia Gozosa en Haquika, ¿El Aliado que fue objetivo de Haquika vuelve a mi control? (FAQ)",
        respuesta: [
                "No podría devolver al Aliado, ya que Haquika tiene una habilidad de entrada la cual es tomar el control de un Aliado oponente y también cuenta con una habilidad de salida, ",
                "la cual es: Devolver el Aliado a su controlador cuando esta sale del juego, por lo cual al jugar Guardia Gozosa en Haquika esta ya no tendría la habilidad cuando salga del ",
                " juego.",
            ]
        },
        {
        id: 114,
        pregunta: "Si declaro ataque con Ramses II y mi oponente declara bloqueo con Figol El Druida, ¿Puedo hacer que pase el daño como si este no fuera bloqueado? (FAQ)",
        respuesta: [
                "Sí, ya que Figol el Druida no cancela el ataque sólo hace que los Aliados atacantes vuelven a la Línea de Defensa, pero se disparan todas las Habilidades producto del bloqueo ",
                "y continúan todas las siguientes fases del juego, por lo cual el controlador de Ramses II puede disparar su Habilidad en respuesta al bloqueo.",
            ]
        },
        {
        id: 115,
        pregunta: "Si controlo un Esna, y juego un Aliado pero este es anulado, ¿Puedo robar? (FAQ)",
        respuesta: "Si, ya que Esna se dispara en el paso 4 de cuando se juega una carta. Primero se roba la carta y luego se anulará el Aliado.",
        },
        {
        id: 116,
        pregunta: "¿Desde que Zona de juego ganaré el control del Aliado con Neferura? (FAQ)",
        respuesta: [
            "En este caso particular la redacción de Neferura será la siguiente: 'Cuando entra en juego, puedes elegir un Aliado oponente de Coste 1 o menos y ponerlo ",
            "bajo tu control hasta que Neferura salga del juego'. El Aliado se entiende que debe estar controlado por tu oponente, por lo tanto debe estar en juego. ",
            ]
        },
        {
        id: 117,
        pregunta: "¿Puedo responder con Cárcel para el Mal cuando mi oponente juegue un Dragón de Magma o Desleal? (FAQ)",
        respuesta: [
            "Errata: 'Anula un Talismán que Destruya o Destierre uno de tus Aliados o Cancela una habilidad oponente, que Destruya o Destierre un Aliado que controles'. ", 
            "Con esto se entiende que en caso de jugar un Desleal, el Talismán será Anulado. Y cuando mi oponente juegue un Dragón de Magma, este entrará en juego, pero ",
            "su habilidad disparada de Destruir un Aliado, no se resolverá. Cárcel para el mal, no anula Talismanes con efectos globales. Pero si puede Anular Plaga, ya ",
            "que esta hace objetivo a dos de tus Aliados.",
            ]
        },
        {
        id: 118,
        pregunta: "¿En qué momento Ptolomeo III puede hacer daño? ¿Se cuenta a sí mismo? (FAQ)",
        respuesta: [
            "La habilidad de Ptolomeo III es una habilidad disparada que se resuelve cada vez que un Aliado Faraón que controles entre o salga del juego. Podemos considerar ",
            "esta habilidad como una habilidad disparada en respuesta. Para hacer daño, Ptolomeo II debe estar en juego, no hace daño por sí mismo cuando entra o cuando sale ",
            "del juego. Un removal masivo que afecte a tus Faraones como por ejemplo Qadesh, no disparará el daño al Mazo Castillo oponente.", 
            ]
        },
        {
        id: 119,
        pregunta: "¿Puedo nombrar la Raza Faraón con Cleopatra? (FAQ)",
        respuesta: [
            "No puede, debido a que al Nombrar 'Afectar' la raza Faraón, estaría afectando sus propias condiciones originales impresas, esto quiere decir que no podría afectarse ",
             "a sí misma por regla de Auto-Referencia. ",
            ]
        },
        {
        id: 120,
        pregunta: "¿Hasta qué momento la carta afectada por Resplandor de Heka pierde su habilidad? ¿Cómo funciona con Guardia Real, Bruja Anis y Leonidas? (FAQ)",
        respuesta: `• Caso 1: Guardia Real, para este caso en el momento que entre en juego, lo hará sin habilidad y permanecerá sin ella “Hasta el inicio de 
        la Fase Final” , es por ello que ya en la Fase Final como tal, Guardia real tendría habilidad y se resolveria que no atacó y es por ello que deberá ser destruido.
        • Caso 2: Bruja Anis y Leonidas, para ambos casos entrarían sin habilidad y permanecerán sin ella 'Hasta el inicio de la Fase Final', pero
        como su habilidad lo dice, en la Fase Final como tal, podría robar una carta.
        `
        },
        {
        id: 121,
        pregunta: "¿En qué momento puedo jugar Resplandor de Heka? (FAQ)",
        respuesta: [
            "El Timing correcto para jugarlo es en el de las Anulaciones como el siguiente ejemplo: Red de plata VS Resplandor de Heka. En este caso en particular ambas cartas ",
            "se pueden jugar en el mismo momento, teniendo el jugador que elegir con cual interactuar y por ende excluir a la otra. Luego de eso ya se podrian jugar cartas ",
            "como Capa de Invisibilidad o Siete contra Tebas.",
            ]
        },
        {
        id: 122,
        pregunta: "¿La carta nombrada con Nehebaku debe estar en juego?, y se refiere a todas las copias? (FAQ)",
        respuesta: 

            <> Para esta resolución en particular hay que tener en cuenta de la diferencia entre Nombrar y Elegir. <strong>Nombrar</strong>: Hace alusión a cualquier carta independiente si está 
            o no en juego y considera siempre todas las copias (A menos que una condición o efecto no lo permitiese). <strong>Elegir</strong>: Hace alusión a cartas en juego y por lo general
            es solo una carta, a menos que se especifique que serían todas las copias. En consecuencia, Nehebaku afecta a cualquier Aliado esté o no en juego y además afecta 
            a todas las copias del mismo. 
        </>
        },
        {
        id: 123,
        pregunta: "Con Asaltar la Caravana ¿Que pasa si hago objetivo a un Aliado que esté bloqueando? (FAQ)",
        respuesta: [
            "Ese Aliado deja de bloquear y en la Fase de asignación de daño, el daño del Aliado atacante pasará completo al Mazo Castillo oponente (Esto siempre que no ",
            "existan efectos que reduzcan el Daño que se reciba al Mazo). ",
            ]
        },
        {
        id: 124,
        pregunta: "Si destierro una carta de mi Cementerio, puedo NO robar una carta con Hacha Lunar?¿Qué pasa si tengo en juego Islas Filas? (FAQ)",
        respuesta: [
            "No, ya que el coste de activación ya fue pagado, debe resolverse a menos que sea cancelado o exista alguna restricción de juego como por ejemplo Islas Filas. ",
            "En caso de estar en juego Islas Filas, podría desterrarme pero no robar. ",
            ]
        },
        {
        id: 125,
        pregunta: "Si controlo a Apophis y mi oponente juega Columna de Trajano, ¿Los Aliados oponentes que ya están en juego recuperan su habilidad? (FAQ)",
        respuesta: [
            "No, Columna de Trajano tiene una habilidad que especifica el momento en el que comienza a regir. Su habilidad, alude a tiempo presente y futuro, por lo que se ",
            "protegerán los aliados que se jueguen de manera posterior a que el controlador tenga el tótem en juego y los requisitos para mantener activa la habilidad del ",
            "mismo.",
            ]
        },
        {
        id: 126,
        pregunta: "Al pagar Sarcofago Santuario, ¿Qué Aliados se ven afectadas por el bono de Fuerza? (FAQ)",
        respuesta: "Sólo las cartas que tengan como nombre 'Drácula'. Rigiéndose por la regla de Concordancia de nombres."
        },
        {
        id: 127,
        pregunta: "¿Cuales cartas puedo buscar con Renfield? (FAQ)",
        respuesta: "Solo se podrán buscar cartas con nombre “Drácula”, en el Cementerio o Mazo Castillo. Rigiéndose por la regla de Concordancia de nombres."
        },
        {
        id: 128,
        pregunta: "¿Puedo jugar Mordida de Dracula, si mi oponente no controla Aliados? (FAQ)",
        respuesta: [
            "Para jugar el Talismán se deben cumplir los requisitos, el coste adicional para jugarse la carta, también debe ser pagado. Por lo tanto tanto el Aliado del ",
            "controlador que juega el Talismán como el Aliado oponente deben poder ser destruidos. Si mi oponente no controla Aliados o sus Aliados no pueden ser destruidos, ",
            "Mordida de Dracula no puede ser jugada.",
            ]
        },
        {
        id: 129,
        pregunta: "Explicación de los términos PARA y CUANDO (FAQ)",
        respuesta: `PARA: Condición o requisito para poner una carta en juego, estos requisitos siempre se deben cumplir. Ejemplo:
        • Para que Kurick, el Picto entre en juego, debes destruir 2 Oros.
        • Para jugar a Montuhopet II, debes devolver a tu Mano uno de tus Aliados de raza Faraón.
        CUANDO: Concepto con el que las habilidades disparadas más se caracterizan, no son condiciones de juego y siempre ocurren una vez 
        que la carta sea puesta en juego. Ejemplo:
        • Cuando Dragón de Magma entra en juego, destruye un Aliado Oponente.
        • Cuando Sir Persival entra en juego, baraja un Aliado oponente.
        `
        },
        {
        id: 130,
        pregunta: "Explicación de los términos Transformar, Considerar, Convertir (FAQ)",
        respuesta: `Considerar: es el resultado que produce algún efecto o habilidad de una carta sobre otra, añadiendo un nuevo tipo de carta a la ya afectada.
        • Ejemplo: Mercaderes, cuando mercaderes bloquea nunca deja de ser Oro y en ese momento se “Considera Aliado y Oro”.
        Transformar y Convertir (En este caso ambos conceptos para efectos del juego son idénticos): Es el resultado que produce algún efecto 
        o habilidad de una carta sobre otra, cambiando su tipo de carta a la ya afectada.
        • Ejemplo: Ave de Hera, cuando se activa su habilidad, este deja de ser Oro para “Convertirse en Aliado”, hasta que termine ese efecto dejará de ser Oro.
        `
        },
        {
        id: 131,
        pregunta: "Explicación del concepto Prevención (FAQ)",
        respuesta: [
            "Prevención es la acción de evitar que una habilidad, efecto o en su defecto por comparación de fuerza (Solo para Aliados) una carta salga del juego. Algunos ",
            "Ejemplos: Prevención no es una habilidad en respuesta, por ende no se vería afectada por cartas como Micenas. La Prevención se puede ejecutar después de la ",
            "comparación de fuerza entre 2 Aliados.",
            ]
        },
        {
        id: 132,
        pregunta: "¿Cuál habilidad es la que cuenta, si tengo una carta reeditada más de una vez con el mismo nombre? (FAQ)",
        respuesta: [
            "Por regla general en Mitos y Leyendas, siempre será válida como oficial la última impresión de una carta en particular, a menos que se especifique lo contrario ",
             "o que tenga alguna falla de impresión evidente. Existen cartas como Exilio que tiene una nueva versión en la que se ajustó su Coste (Pasó de ser Coste 6 a Coste ",
             "4) y ahora es Carta Única.",
            ]
        },
        {
        id: 133,
        pregunta: "Concordancia de nombres (FAQ)",
        respuesta: `Se puede dar lo que son las concordancias de nombre, para cumplir esta regla se debe coincidir la raíz del nombre de la carta, sin 
        importar el resto del nombre de la carta.
        El efecto de Goblin Stone, dice que puedes buscar una “Carta Goblin” con esta concordancia de nombre, se hace referencia a que 
        puedas buscar cualquier carta en tu Mazo Castillo que contenga la palabra “Goblin...” en su nombre. Algunos ejemplos:
        • Goblin Stone
        • Goblin Maligno
        • Goblin
        • Hogoblin
        • Tótem Goblin
        • Goblins Navideños
        • Ataque de Goblins
        `
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
                        entre dos o mas cartas, y al hacerle click se abre un desplegable con la respuesta.
                        Dentro esta toda la información del DAR, FAQ y también y todas las dudas que han salido en el grupo de la 
                        Champions o jugando el mismo torneo. 
                    </p>
                    <p>Si existen mas dudas háganmelas llegar para agregarlas en esta sección. ¡Espero les sirva de ayuda!</p>
                    <p><strong>Importante: Para la conicidencia de nombres buscar sin acentos los nombres de las cartas.</strong> </p>
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