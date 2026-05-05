import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Aclaraciones from './components/Aclaraciones';
import Reproductor from './components/Reproductor';
import ScrollToTop from './components/ScrollToTop';
import InformacionCartas from './components/InformacionCartas';
import BuscadorMazos from './components/BuscadorMazos';


function App() {
  return (
    // Router envuelve todo para que los links funcionen
    <Router>
      <ScrollToTop />
      <div className="contenedor-fijo">
        <header>
          <a href="https://blog.myl.cl/" target="_blank" rel="noopener noreferrer">
            <img className="imagenes-titulo" alt="Logo Mitos y Leyendas" src="/ImagenesMyLvsc/header_myl_logo.png"/>
          </a>
          <h1>Mititos by Vinacho</h1>
          <img className="imagenes-titulo" alt="Engranajes"  src="/ImagenesMyLvsc/header_engranajes.png"/>
        </header>
        
        <aside>
          <Navbar />
        </aside>
      </div>

        <section className="enlaces-utilidad">
          <h2>Enlaces de utilidad</h2>
          <div className="grid-enlaces">
                  <a href="https://blog.myl.cl/banlist-racial-edicion-primer-bloque/" target="_blank" rel="noopener noreferrer" className="tarjeta-enlace">
                      <span>Baneos: Edición</span></a>
                  <a href="https://blog.myl.cl/banlist-racial-libre-primer-bloque/" target="_blank" rel="noopener noreferrer" className="tarjeta-enlace">
                      <span>Baneos: Libre</span></a>
                  <a href="https://blog.myl.cl/banlist-formato-libre-primer-bloque/" target="_blank" rel="noopener noreferrer" className="tarjeta-enlace">
                      <span>Baneos: Full</span></a>
                  <a href="https://drive.google.com/file/d/1vRDfyMMHdfy_qQrLX4zfAE83XYcH-IBH/view" target="_blank" rel="noopener noreferrer" className="tarjeta-enlace">
                      <span>DAR (Reglas)</span></a>
                  <a href="https://drive.google.com/file/d/1l6W5Qnc_Xp93i52tOflLaz1E-wzF3NM2/view" target="_blank" rel="noopener noreferrer" className="tarjeta-enlace">
                      <span>FAQ Oficial</span></a>
                  <a href="https://mazos.cl/" target="_blank" rel="noopener noreferrer" className="tarjeta-enlace">
                      <span>Mazos.cl</span></a>
          </div>
        </section>
      

     <main>
        <Routes>
          <Route path="/" element={
            <>
              <BuscadorMazos />

              <Reproductor />
            </>
          } />

          
          <Route path="/champions" element={<></>} />
          <Route path="/licho" element={<></>} />
          <Route path="/carlicho" element={<></>} />
          <Route path="/informacion-cartas" element={<InformacionCartas/>} />
          <Route path="/aclaraciones" element={<Aclaraciones/>} />
          <Route path="/otros" element={<></>} />

        </Routes>
      </main>

      <footer>
        <div className="footer-content">
          <h4>Mititos by Vinacho</h4>
          <p>El portal oficial para los torneos de la Engracomunidad: 
          Champions, Licho y Carlicho.</p>
          <h4>Enlaces Rápidos</h4>
          <ul>
              <li><a href="https://blog.myl.cl/banlist-racial-edicion-primer-bloque/" 
              target="_blank" rel="noopener noreferrer">Baneo Mensual actualizado</a></li>
              <li><a href="/aclaraciones">Aclaraciones de Reglas</a></li>
              <li><a href="/champions">Fechas del torneo actual Champions</a></li>
          </ul>
          <h4>Créditos</h4>
          <p>&copy; 2026 Vinacho - Todos los derechos reservados.</p>
        </div>
      </footer>

    </Router>
  );
}

export default App;