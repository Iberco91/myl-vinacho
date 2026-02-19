import React, { useState } from 'react';
import datosCartas from './BBDDMyL.json';


export default function InformacionCartas() {
    const [busqueda, setBusqueda] = useState("");

    const [cartaSeleccionada, setCartaSeleccionada] = useState(null);

    // Diccionario de rutas locales
    const imagenesLocales = {
        "Aghast el Dragon": "/Imagencartasfaltantes/Aghasteldragon.png",
        "Epicureo el Sabio": "/Imagencartasfaltantes/Epicureoelsabio.jpg",
        "Llewelyn Voz de Plata": "/Imagencartasfaltantes/Llewelynvozdeplata.png",
        "Mulvan el Dragon": "/Imagencartasfaltantes/Mulvaneldragon.webp",
        "Org Maestro de Dragones": "/Imagencartasfaltantes/Orgmaestrodedragones.jpg",
        "Poseidon Rey del Mar": "/Imagencartasfaltantes/Poseidonreydelmar.webp",
        "Willowrong el Dragon": "/Imagencartasfaltantes/Willowrongeldragon.webp"
    };
    
    // Filtramos por Nombre_carta (Columna A del Excel original)
    const cartasFiltradas = datosCartas.filter(carta => {
        // .replace(/\s+/g, ' ') es la magia: 
        // Busca uno o más espacios en blanco (\s+) y los cambia por uno solo (' ')
        const nombreCartaLimpio = carta.Nombre_carta
            .toLowerCase()
            .replace(/\s+/g, ' ') 
            .trim();

        const textoBuscadoLimpio = busqueda
            .toLowerCase()
            .replace(/\s+/g, ' ');

        return nombreCartaLimpio.includes(textoBuscadoLimpio);
    });

    return (
        <div className="cartas-page">
            <div className="cartas-header">
                <h2>Biblioteca de Cartas MyL</h2>
                
                {/* ENVOLVEMOS EL INPUT Y EL BOTÓN AQUÍ */}
                <div className="input-wrapper-informacioncartas">
                    <input 
                        type="text" 
                        placeholder="Buscar por nombre de carta..." 
                        className="buscador-cartas"
                        value={busqueda} // <--- CAMBIO 1: Esto sincroniza el texto con el estado
                        onChange={(e) => setBusqueda(e.target.value)}
                    />
                    
                    {/* Solo mostramos la X si hay texto */}
                    {busqueda && (
                        <button 
                            className="boton-limpiar-informacioncartas" 
                            onClick={() => setBusqueda("")}
                            title="Limpiar búsqueda"
                        >
                            &times;
                        </button>
                    )}
                </div>

                <p className="contador">Mostrando {cartasFiltradas.length} cartas</p>
            </div>

           <div className="cartas-grid">
                {cartasFiltradas.map((carta, index) => (
                    /* PASO 1: El click ahora envuelve a toda la tarjeta */
                    <div 
                        key={index} 
                        className="carta-card" 
                        onClick={() => setCartaSeleccionada(carta)} 
                        style={{ cursor: 'pointer' }} 
                    >
                        
                        <div className="carta-imagen-container">
                            <img 
                                src={
                                    imagenesLocales[carta.Nombre_carta] 
                                    ? imagenesLocales[carta.Nombre_carta]
                                    : (carta.Imagen_carta 
                                        ? carta.Imagen_carta.replace(/\s+/g, ' ').trim().replace(/ /g, '%20')
                                        : "/ImagenesMyLvsc/header_myl_logo.png")
                                }
                                alt={carta.Nombre_carta} 
                                loading="lazy" 
                                className="img-carta"
                                onError={(e) => { 
                                    e.target.onerror = null; 
                                    e.target.src = "/ImagenesMyLvsc/header_myl_logo.png"; 
                                }}
                            />
                        </div>

                        <div className="carta-detalles">
                            <h3>{carta.Nombre_carta}</h3>
                            <div className="info-item">
                                <span className="label">Edición:</span>
                                <span className="valor">{carta.Edicion_carta}</span>
                            </div>
                            <div className="info-item">
                                <span className="label">Tipo:</span>
                                <span className="valor">{carta.Tipo_carta}</span>
                            </div>
                            <div className="info-item">
                                <span className="label">Rareza:</span>
                                <span className="valor">{carta.Rareza_carta}</span>
                            </div>
                        </div>

                    </div> /* Cierre de carta-card */
                ))}
            </div>

            {/* --- BLOQUE DEL MODAL (AÑADE ESTO AQUÍ) --- */}
            {cartaSeleccionada && (
                <div className="modal-overlay" onClick={() => setCartaSeleccionada(null)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <button className="modal-close" onClick={() => setCartaSeleccionada(null)}>&times;</button>
                        
                        <img 
                            src={
                                imagenesLocales[cartaSeleccionada.Nombre_carta] 
                                ? imagenesLocales[cartaSeleccionada.Nombre_carta]
                                : (cartaSeleccionada.Imagen_carta 
                                    ? cartaSeleccionada.Imagen_carta.replace(/\s+/g, ' ').trim().replace(/ /g, '%20') 
                                    : "/ImagenesMyLvsc/header_myl_logo.png")
                            } 
                            alt={cartaSeleccionada.Nombre_carta} 
                        />
                        
                        <div className="modal-info">
                            <h3>{cartaSeleccionada.Nombre_carta}</h3>
                            <p>{cartaSeleccionada.Edicion_carta} - {cartaSeleccionada.Rareza_carta}</p>
                        </div>
                    </div>
                </div>
            )}
            {/* --- FIN DEL MODAL --- */}

        </div> // Cierre final de cartas-page
  );
}