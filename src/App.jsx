import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
// Aquí importaremos tus páginas más adelante

function App() {
  return (
    // Router envuelve todo para que los links funcionen
    <Router>
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


      </div>

     <main>
        <Routes>
          <Route path="/" element={
            <>
              <></>
              <section className="imag-equipos">
                <div className="divs-imagenes">
                  <h3>A Penales</h3>
                  <img className="imag" src="/ImagenesMyLvsc/apenales.jpeg" alt="A Penales" />
                </div>
                <div className="divs-imagenes">
                  <h3>Enanas</h3>
                  <img className="imag" src="/ImagenesMyLvsc/enanas.jpeg" alt="Enanas" />
                </div>
                <div className="divs-imagenes">
                  <h3>Parinacota</h3>
                  <img className="imag" src="/ImagenesMyLvsc/parinacota.jpeg" alt="Parinacota" />
                </div>
                <div className="divs-imagenes">
                  <h3>Los Saitamas</h3>
                  <img className="imag" src="/ImagenesMyLvsc/lossaitamas.jpg" alt="Los Saitamas" />
                </div>
                <div className="divs-imagenes">
                  <h3>Runas</h3>
                  <img className="imag" src="/ImagenesMyLvsc/runas.png" alt="Runas" />
                </div>
                <div className="divs-imagenes">
                  <h3>Es Magique</h3>
                  <img className="imag" src="/ImagenesMyLvsc/esmagique.jpeg" alt="Es Magique" />
                </div>
                <div className="divs-imagenes">
                  <h3>El Gato</h3>
                  <img className="imag" src="/ImagenesMyLvsc/elgato.jpeg" alt="El Gato" />
                </div>
                <div className="divs-imagenes">
                  <h3>Drogos</h3>
                  <img className="imag" src="/ImagenesMyLvsc/drogos.jpeg" alt="Drogos" />
                </div>
                <div className="divs-imagenes">
                  <h3>Kaiba</h3>
                  <img className="imag" src="/ImagenesMyLvsc/kaiba.jpeg" alt="Kaiba" />
                </div>
                <div className="divs-imagenes">
                  <h3>Ultimate Mostoles</h3>
                  <img className="imag" src="/ImagenesMyLvsc/mostoles.jpeg" alt="Ultimate Mostoles" />
                </div>
                <div className="divs-imagenes">
                  <h3>Hero Cave</h3>
                  <img className="imag" src="/ImagenesMyLvsc/herocave.jpeg" alt="Hero Cave" />
                </div>
                <div className="divs-imagenes">
                  <h3>El Capataz</h3>
                  <img className="imag" src="/ImagenesMyLvsc/elcapataz.jpeg" alt="El Capataz" />
                </div>
                <div className="divs-imagenes">
                  <h3>Colacuerno Hungaro</h3>
                  <img className="imag" src="/ImagenesMyLvsc/colacuerno.jpeg" alt="Colacuerno Hungaro" />
                </div>
                <div className="divs-imagenes">
                  <h3>Hay Fe</h3>
                  <img className="imag" src="/ImagenesMyLvsc/hayfe.jpeg" alt="Hay Fe" />
                </div>
                <div className="divs-imagenes">
                  <h3>More Ganas</h3>
                  <img className="imag" src="/ImagenesMyLvsc/moreganas.jpeg" alt="More Ganas" />
                </div>
                <div className="divs-imagenes">
                  <h3>Bahitiful</h3>
                  <img className="imag" src="/ImagenesMyLvsc/bahitiful.jpeg" alt="Bahitiful" />
                </div>
                <div className="divs-imagenes">
                  <h3>El Gran Olim Pico</h3>
                  <img className="imag" src="/ImagenesMyLvsc/elgranolimpico.jpeg" alt="El Gran Olim Pico" />
                </div>
                <div className="divs-imagenes">
                  <h3>Constantino y 48 mas</h3>
                  <img className="imag" src="/ImagenesMyLvsc/constantinoy48mas.jpeg" alt="Constantino y 48 mas" />
                </div>
                <div className="divs-imagenes">
                  <h3>TACTY Witcher</h3>
                  <img className="imag" src="/ImagenesMyLvsc/tacty.jpeg" alt="TACTY Witcher" />
                </div>
                <div className="divs-imagenes">
                  <h3>BTLD</h3>
                  <img className="imag" src="/ImagenesMyLvsc/bltd.jpeg" alt="BTLD" />
                </div>
                <div className="divs-imagenes">
                  <h3>Pulpo Paul</h3>
                  <img className="imag" src="/ImagenesMyLvsc/pulpopol.jpeg" alt="Pulpo Paul" />
                </div>
                <div className="divs-imagenes">
                  <h3>El Papanatas</h3>
                  <img className="imag" src="/ImagenesMyLvsc/elpapanatas.jpeg" alt="El Papanatas" />
                </div>
                <div className="divs-imagenes">
                  <h3>Pega Martin Pega</h3>
                  <img className="imag" src="/ImagenesMyLvsc/pegamartinpega.jpeg" alt="Pega Martin Pega" />
                </div>
                <div className="divs-imagenes">
                  <h3>Ayuno Intermitente</h3>
                  <img className="imag" src="/ImagenesMyLvsc/ayunointermitente.jpeg" alt="Ayuno Intermitente" />
                </div>
                <div className="divs-imagenes">
                  <h3>Taurina</h3>
                  <img className="imag" src="/ImagenesMyLvsc/taurina.jpeg" alt="Taurina" />
                </div>
                <div className="divs-imagenes">
                  <h3>Fair Play FC</h3>
                  <img className="imag" src="/ImagenesMyLvsc/fairplay.jpeg" alt="Fair Play FC" />
                </div>
                <div className="divs-imagenes">
                  <h3>Paco Ladru</h3>
                  <img className="imag" src="/ImagenesMyLvsc/pacoladru.jpeg" alt="Paco Ladru" />
                </div>
                <div className="divs-imagenes">
                  <h3>AAAAAAAH!</h3>
                  <img className="imag" src="/ImagenesMyLvsc/aaah.jpeg" alt="AAAAAAAH!" />
                </div>
                <div className="divs-imagenes">
                  <h3>Ke mira bobo</h3>
                  <img className="imag" src="/ImagenesMyLvsc/kemirabobo.jpeg" alt="Ke mira bobo" />
                </div>
                <div className="divs-imagenes">
                  <h3>El Gran Chapazo</h3>
                  <img className="imag" src="/ImagenesMyLvsc/elgranchapazo.jpeg" alt="El Gran Chapazo" />
                </div>
                <div className="divs-imagenes">
                  <h3>Padre Pio</h3>
                  <img className="imag" src="/ImagenesMyLvsc/padrepio.jpeg" alt="Padre Pio" />
                </div>
                <div className="divs-imagenes">
                  <h3>mEternos</h3>
                  <img className="imag" src="/ImagenesMyLvsc/meternos.jpeg" alt="mEternos" />
                </div>
                <div className="divs-imagenes">
                  <h3>Unagi</h3>
                  <img className="imag" src="/ImagenesMyLvsc/unagi.jpeg" alt="Unagi" />
                </div>
                <div className="divs-imagenes">
                  <h3>William Campbell</h3>
                  <img className="imag" src="/ImagenesMyLvsc/williamcampbell.jpeg" alt="William Campbell" />
                </div>
                <div className="divs-imagenes">
                  <h3>Las Cruzadas</h3>
                  <img className="imag" src="/ImagenesMyLvsc/lascruzadas.jpeg" alt="Las Cruzadas" />
                </div>
                <div className="divs-imagenes">
                  <h3>Manos Altas</h3>
                  <img className="imag" src="/ImagenesMyLvsc/manosaltas.jpeg" alt="Manos Altas" />
                </div>
                <div className="divs-imagenes">
                  <h3>Vladimir</h3>
                  <img className="imag" src="/ImagenesMyLvsc/vladimir.jpeg" alt="Vladimir" />
                </div>
              </section>
            </>
          } />

          
          <Route path="/champions" element={<></>} />
          <Route path="/licho" element={<></>} />
          <Route path="/carlicho" element={<></>} />
          <Route path="/informacion-cartas" element={<></>} />
          <Route path="/aclaraciones" element={<></>} />
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