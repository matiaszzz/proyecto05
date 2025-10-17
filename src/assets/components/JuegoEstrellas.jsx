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
      setVisible(visible(!true))
      //setVisible(prev => !prev) 
      generarPosicionRandom();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const obtenerEstrella = () => {
    setPuntos(puntos+1)
    //setPuntos(prev => prev + 1)
    setVisible(false)
  }

  return (
    <>
      <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
        <h2>Estrellas atrapadas: {puntos}</h2>
        {visible && (
          <div
            onClick={obtenerEstrella}
            style={{
              position: 'absolute',
              left: `${posicion.x}px`,
              top: `${posicion.y}px`,
              fontSize: '25px',
              transition: '0.5s ease',
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
