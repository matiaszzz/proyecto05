import musica from '../sounds/pou.mp3';
import { useNavigate } from 'react-router-dom';
import FormJuegos from '../components/FormJuegos';
import { Button } from 'react-bootstrap';
import JuegoEstrellas from '../components/JuegoEstrellas';

function Games() {

    const navegacion = useNavigate();

    const ejecutarSonido = () => {
        const audio = new Audio(musica);
        audio.play()
    }
    const manejarClick = () => {
        ejecutarSonido()
        navegacion("/")
    };

    return (
        <>
            <Button onClick={manejarClick}>Escuchar Musica</Button>
            <h1>Cargar Juegos</h1>
            <FormJuegos />
            <JuegoEstrellas />
            
        </>
    )
};

export default Games;