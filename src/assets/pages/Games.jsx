import logo from '../img/logo.png'
import musica from '../sounds/pou.mp3';
import { useNavigate } from 'react-router-dom';
import FormJuegos from '../components/FormJuegos';
import { Button } from 'react-bootstrap';

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
            
            <img src={logo} width="100%" />
            <Button onClick={manejarClick}>Escuchar Musica</Button>
            <h1>Cargar Juegos</h1>
            <FormJuegos />
            
        </>
    )
};

export default Games;