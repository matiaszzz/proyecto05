import logo from '../img/logo.png'
import { Link } from 'react-router-dom';
import musica from '../sounds/Remix.mp3';
import { useNavigate } from 'react-router-dom';
import FormJuegos from '../components/FormJuegos';

function Games() {

    const navegacion = useNavigate();

    const ejecutarSonido = () => {
        const audio = new Audio(musica);
        audio.play()
    }
    const manejarClickImagen = () => {
        ejecutarSonido()
        navegacion("/")
    };

    return (
        <>
            <h1> <Link to="/"> HOME </Link></h1>
            <img src={logo} width="100%" onClick={manejarClickImagen} />

            <h1>Cargar Juegos</h1>
            <FormJuegos />
            
        </>
    )
};

export default Games;