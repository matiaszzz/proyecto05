import logo from '../img/logo.png'
import musica from '../sounds/pou.mp3';
import { useNavigate } from 'react-router-dom';
import FormJuegos from '../components/FormJuegos';

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
            <button onClick={manejarClick}>Escuchar Musica</button>
            <h1>Cargar Juegos</h1>
            <FormJuegos />
            
        </>
    )
};

export default Games;