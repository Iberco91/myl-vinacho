import React, { useState, useRef} from 'react';

const listaCanciones = [
  { id: 1, titulo: "Buenos Muchachos", url: "/MusicaMyL/Buenos Muchachos - Himnos.mp3" },
  { id: 2, titulo: "Calamarino Elegante", url: "/MusicaMyL/Calamarino Elegante - Himnos.flac" },
  { id: 3, titulo: "Caóticos", url: "/MusicaMyL/Caóticos - Himnos.flac" },
  { id: 4, titulo: "Champions", url: "/MusicaMyL/Champions - Himnos.mp3" },
  { id: 5, titulo: "Chancro Voraz", url: "/MusicaMyL/Chancro Voraz - Himnos.mp3" },
  { id: 6, titulo: "Colacuerno Húngaro", url: "/MusicaMyL/Colacuerno Húngaro - Himnos.flac" },
  { id: 7, titulo: "Copa Sudamericana", url: "/MusicaMyL/Copa Sudamericana - Himnos.mp3" },
  { id: 8, titulo: "Cucos", url: "/MusicaMyL/Cucos - Himnos.mp3" },
  { id: 9, titulo: "Dagestán", url: "/MusicaMyL/Dagestán - Himnos.mp3" },
  { id: 10, titulo: "Drogos", url: "/MusicaMyL/Drogos - Himnos.mp3" },
  { id: 11, titulo: "El Capataz", url: "/MusicaMyL/El Capataz - Himnos.mp3" },
  { id: 12, titulo: "El Chapazo", url: "/MusicaMyL/El Chapazo - Himnos.mp3" },
  { id: 13, titulo: "El Gato", url: "/MusicaMyL/El Gato - Himnos.mp3" },
  { id: 14, titulo: "Eldia", url: "/MusicaMyL/Eldia - Himnos.mp3" },
  { id: 15, titulo: "Enanas", url: "/MusicaMyL/Enanas - Himnos.mp3" },
  { id: 16, titulo: "Es Magique", url: "/MusicaMyL/Es Magique - Himnos.mp3" },
  { id: 17, titulo: "Fair Play FC", url: "/MusicaMyL/Fair Play FC - Himnos.mp3" },
  { id: 18, titulo: "Ferbus", url: "/MusicaMyL/Ferbus - Himnos.mp3" },
  { id: 19, titulo: "Ferbus 2", url: "/MusicaMyL/Ferbus 2.mp3" },
  { id: 20, titulo: "Floyd", url: "/MusicaMyL/Floyd - Himnos.flac" },
  { id: 21, titulo: "Genki Dama", url: "/MusicaMyL/Genki Dama - Himnos.mp3" },
  { id: 22, titulo: "Hay Fé", url: "/MusicaMyL/Hay Fé - Himnos.mp3" },
  { id: 23, titulo: "Hyrule", url: "/MusicaMyL/Hyrule - Himnos.mp3" },
  { id: 24, titulo: "Kaiba", url: "/MusicaMyL/Kaiba - Himnos.mp3" },
  { id: 25, titulo: "Kane Becil", url: "/MusicaMyL/Kane Becil - Himnos.flac" },
  { id: 26, titulo: "Ke Mirá Bobo", url: "/MusicaMyL/Ke Mirá Bobo - Himnos.mp3" },
  { id: 27, titulo: "La Roja De Todos", url: "/MusicaMyL/La Roja De Todos - Himnos.mp3" },
  { id: 28, titulo: "Las Cruzadas", url: "/MusicaMyL/Las Cruzadas - Himnos.flac" },
  { id: 29, titulo: "Liga A", url: "/MusicaMyL/Liga A - Himnos.mp3" },
  { id: 30, titulo: "Liga B", url: "/MusicaMyL/Liga B - Himnos.mp3" },
  { id: 31, titulo: "Liga Narles", url: "/MusicaMyL/Liga Narles - Himnos.mp3" },
  { id: 32, titulo: "Los Saitamas", url: "/MusicaMyL/Los Saitamas - Himnos.mp3" },
  { id: 33, titulo: "Manos Altas", url: "/MusicaMyL/Manos Altas - Himnos.flac" },
  { id: 34, titulo: "m'Eternos", url: "/MusicaMyL/m'Eternos - Himnos.mp3" },
  { id: 35, titulo: "More Ganas", url: "/MusicaMyL/More Ganas - Himnos.mp3" },
  { id: 36, titulo: "Nilo Bravo", url: "/MusicaMyL/Nilo Bravo - Himnos.flac" },
  { id: 37, titulo: "Nube", url: "/MusicaMyL/Nube - Himnos.mp3" },
  { id: 38, titulo: "Oddish", url: "/MusicaMyL/Oddish - Himnos.mp3" },
  { id: 39, titulo: "Padre Pío", url: "/MusicaMyL/Padre Pío - Himnos.flac" },
  { id: 40, titulo: "Parinacota", url: "/MusicaMyL/Parinacota - Himnos.mp3" },
  { id: 41, titulo: "Parque Temático", url: "/MusicaMyL/Parque Temático - Himnos.flac" },
  { id: 42, titulo: "Pega Martín Pega", url: "/MusicaMyL/Pega Martín Pega - Himnos.mp3" },
  { id: 43, titulo: "Pentagrama", url: "/MusicaMyL/Pentagrama - Himnos.mp3" },
  { id: 44, titulo: "Pentagrama 2nd Titantron", url: "/MusicaMyL/Pentagrama 2nd Titantron.mp3" },
  { id: 45, titulo: "Powerslave", url: "/MusicaMyL/Powerslave - Himnos.mp3" },
  { id: 46, titulo: "Rascapoto", url: "/MusicaMyL/Rascapoto - Himnos.mp3" },
  { id: 47, titulo: "Romántico Viajero", url: "/MusicaMyL/Romántico Viajero - Himnos.mp3" },
  { id: 48, titulo: "Rubios de Mierda", url: "/MusicaMyL/Rubios de Mierda - Himnos.mp3" },
  { id: 49, titulo: "Runas", url: "/MusicaMyL/Runas - Himnos.mp3" },
  { id: 50, titulo: "Runas 2", url: "/MusicaMyL/Runas 2.mp3" },
  { id: 51, titulo: "Sapolio", url: "/MusicaMyL/Sapolio - Himnos.mp3" },
  { id: 52, titulo: "Silver Arles", url: "/MusicaMyL/Silver Arles - Himnos.mp3" },
  { id: 53, titulo: "TACTY Witcher", url: "/MusicaMyL/TACTY Witcher - Himnos.mp3" },
  { id: 54, titulo: "Tuzán", url: "/MusicaMyL/Tuzán - Himnos.mp3" },
  { id: 55, titulo: "Ultimate Móstoles", url: "/MusicaMyL/Ultimate Móstoles - Himnos.mp3" },
  { id: 56, titulo: "Unagi", url: "/MusicaMyL/Unagi - Himnos.mp3" },
  { id: 57, titulo: "Vacido", url: "/MusicaMyL/Vacido - Himnos.mp3" },
  { id: 58, titulo: "Veloz", url: "/MusicaMyL/Veloz - Himnos.mp3" },
  { id: 59, titulo: "Vinacho - A Penales", url: "/MusicaMyL/Vinacho - A Penales.mp3" },
  { id: 60, titulo: "Vinacho - Buenos Muchachos", url: "/MusicaMyL/Vinacho - Buenos Muchachos.mp3" },
  { id: 61, titulo: "Vinacho - El Gato", url: "/MusicaMyL/Vinacho - El Gato.mp3" },
  { id: 62, titulo: "Vinacho - Es Magique", url: "/MusicaMyL/Vinacho - Es Magique.mp3" },
  { id: 63, titulo: "Vinacho - Ferbus", url: "/MusicaMyL/Vinacho - Ferbus.mp3" },
  { id: 64, titulo: "Vinacho - Los Saitamas", url: "/MusicaMyL/Vinacho - Los Saitamas.mp3" },
  { id: 65, titulo: "Vinacho - Nube", url: "/MusicaMyL/Vinacho - Nube.mp3" },
  { id: 66, titulo: "Vinacho - Oddish", url: "/MusicaMyL/Vinacho - Oddish.mp3" },
  { id: 67, titulo: "Vinacho - Rubios de Mierda", url: "/MusicaMyL/Vinacho - Rubios de Mierda.mp3" },
  { id: 68, titulo: "Vinacho - Runas", url: "/MusicaMyL/Vinacho - Runas.mp3" },
  { id: 69, titulo: "Vinacho - Vacido", url: "/MusicaMyL/Vinacho - Vacido.mp3" },
  { id: 70, titulo: "Vinacho - Veloz", url: "/MusicaMyL/Vinacho - Veloz.mp3" },
  { id: 71, titulo: "Vladimir", url: "/MusicaMyL/Vladimir - Himnos.mp3" },
  { id: 72, titulo: "White Walkers", url: "/MusicaMyL/White Walkers - Himnos.mp3" },
  { id: 73, titulo: "William Campbell", url: "/MusicaMyL/William Campbell - Himnos.flac" },
  { id: 74, titulo: "Ya Wey", url: "/MusicaMyL/Ya Wey - Himnos.mp3" },
  { id: 75, titulo: "A Penales", url: "/MusicaMyL/A Penales - Himnos.mp3" },
  { id: 76, titulo: "Aaaaaaaaaah", url: "/MusicaMyL/Aaaaaaaaaah - Himnos.mp3" },
  { id: 77, titulo: "Arroz Con Huevo", url: "/MusicaMyL/Arroz Con Huevo - Himnos.mp3" },
  { id: 78, titulo: "Bahitiful", url: "/MusicaMyL/Bahitiful - Himnos.mp3" },
  { id: 79, titulo: "Brindo Brindo", url: "/MusicaMyL/Brindo Brindo - Himnos.flac" },
  { id: 80, titulo: "BTLD", url: "/MusicaMyL/BTLD - Himnos.mp3" }
];



export default function Reproductor () {
  const [indice, setIndice] = useState(0);
  const [reproduciendo, setReproduciendo] = useState(false);
  const audioRef = useRef(null); // Referencia al elemento de audio invisible

  // Función para elegir canción aleatoria
  const cancionAleatoria = () => {
    const nuevoIndice = Math.floor(Math.random() * listaCanciones.length);
    setIndice(nuevoIndice);
  };

  const togglePlay = () => {
    if (reproduciendo) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setReproduciendo(!reproduciendo);
  };

  const siguienteCancion = () => {
    cancionAleatoria();
    // Esperamos un momento a que cambie el src para dar play
    setTimeout(() => {
      audioRef.current.play();
      setReproduciendo(true);
    }, 100);
  };

  return (
    <div className="reproductor-fijo">
      <audio 
        ref={audioRef} 
        src={listaCanciones[indice].url} 
        onEnded={siguienteCancion} // Al terminar una, salta a otra
      />
      
      <div className="info-musica">
        <span className="nota-musical">♫</span>
        <p>{listaCanciones[indice].titulo}</p>
      </div>

      <div className="controles">
        <button onClick={togglePlay}>
          {reproduciendo ? '⏸' : '▶'}
        </button>
        <button onClick={siguienteCancion}>
          ⏭
        </button>
      </div>
    </div>
  );
};

