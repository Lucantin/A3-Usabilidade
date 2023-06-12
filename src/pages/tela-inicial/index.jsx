import { Link } from 'react-router-dom';
import '../../App.css';
import './style.css';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


function HomePage() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="container">
                    <div className="column-left">
                        <div>
                            <p className='title'>Olá, seja bem-vindo(a)!</p>
                            <p className='subtitle'>Clique no botão abaixo <br />
                                para usar a máquina</p>
                            <Link to={'/options'} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <button className="button-start">Iniciar</button>
                            </Link>
                        </div>
                    </div>
                    <div className="column-right">
                        <p className='subtitle2'>Baixe o Aplicativo TOP<br />
                            e dê adeus às filas </p>
                        <Link to={'/about'} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <button className='button-about'>
                                <span style={{ display: 'flex', alignItems: 'center' }}>
                                    <AddCircleOutlineIcon />
                                    <span style={{ flex: '1', textAlign: 'center' }}>Saiba Mais</span>
                                </span>
                            </button>
                        </Link>
                        <div className='image-container'>
                            <img src={require("../../assets/telaInicial.png")} alt="pic" />
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default HomePage;

