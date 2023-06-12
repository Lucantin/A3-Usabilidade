import { Link } from 'react-router-dom';
import '../../App.css';
import './style.css';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';

function About() {
    return (
        <div className='App'>
            <header className="App-header">
                <p className='title'>Baixe o Aplicativo TOP <br />
                    e dê adeus às filas!</p>
                <div className="container">
                    <div className="left-column">
                        <div>
                            <p className='info-text'>Com ele você compra o Bilhete Digital <br />
                                QR Code, solicita o cartão TOP <br />
                                Transporte ou Mastercard, tem acesso <br />
                                a conta digital, consulta saldo e <br />
                                compra créditos.
                                <br />
                                <br />
                                Tenha em suas mãos o histórico de <br />
                                uso dos seus produtos TOP e muito <br />
                                mais.
                            </p>
                            <Link to={'/'} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <button className='button-return'>
                                    <span style={{ display: 'flex', alignItems: 'center' }}>
                                        <HomeOutlinedIcon />
                                        <span style={{ flex: '1', textAlign: 'center' }}>Voltar à tela inicial</span>
                                    </span>
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="right-column">
                        <img src={require("../../assets/app-autopass.png")} alt="pic" />
                    </div>
                </div>
            </header>
        </div>
    )
}

export default About;