import React, { useState } from 'react';
import equiposData from './MazosJugadores.json'; 

export default function BuscadorMazos() {
    const [busqueda, setBusqueda] = useState("");

    const equiposFiltrados = equiposData.filter((equipo) =>
        equipo.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (
            <div className="contenedor-buscador-mazos">
                <div className="caja-busqueda">
                    <div className="input-wrapper"> {/* <-- Nuevo contenedor ancla */}
                        <input
                            type="text"
                            className="input-busqueda-mazos"
                            placeholder="Busca tu mazo (ej: Kaiba)..."
                            value={busqueda}
                            onChange={(e) => setBusqueda(e.target.value)}
                        />
                        {busqueda && (
                            <button 
                                className="boton-limpiar-mazos" // Cambia el nombre para no chocar
                                onClick={() => setBusqueda("")}
                            >
                                &times;
                            </button>
                        )}
                    </div>
                </div>

                {busqueda !== "" && equiposFiltrados.length === 0 && (
                    <div className="sin-resultados">
                        <p>No se encontraron mazos con el nombre "{busqueda}"</p>
                    </div>
                )}

                <section className="imag-equipos">
                    {equiposFiltrados.length > 0 && (
                        equiposFiltrados.map((equipo) => (
                            <div key={equipo.id} className="divs-imagenes">
                                <h3>{equipo.nombre}</h3>
                                <img className="imag" src={equipo.imagen} alt={equipo.nombre} />
                            </div>
                        ))
                    )}
                </section>
            </div>
    );
}


   