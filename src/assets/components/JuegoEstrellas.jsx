import { useState, useEffect } from 'react';

function JuegoEstrellas() {
  const [posicion, setPosicion] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(true); 
  const [puntos, setPuntos] = useState(0);

  const generarPosicionRandom = () => {
    const x = Math.floor(Math.random() * 800);
    const y = Math.floor(Math.random() * 200);
    setPosicion({ x, y });
  };
  
   useEffect(() => {
    const interval = setInterval(() => {
      setVisible(prev => !prev)
      generarPosicionRandom();
    }, 1500); 

    return () => clearInterval(interval);
  }, []);

  const manejarClickEstrella = () => {
       setPuntos (prev => prev +1)
  }

  return (
    <>
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <h2>Estrellas atrapadas: {puntos}</h2>
      {visible && (
        <div
        onClick={manejarClickEstrella}
          style={{
            position: 'absolute',
            left: `${posicion.x}px`,
            top: `${posicion.y}px`,
            fontSize: '40px',
            transition: '0.3s ease',
          }}
        >
          ⭐
        </div>
      )}
    </div>
    </>
  );
}

export default JuegoEstrellas;
