import { Link } from 'react-router-dom';
import '../../App.css';
import './style.css';

function OptionsPage() {
    return (
        <div className='App'>
            <header className="App-header">
                <div className="container-options">
                    <p className='title'>Insira seu cartão ou<br />
                        selecione o produto</p>
                    <div className="button-container">
                        <Link to={'/card'} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <button className="button"> <img src={require("../../assets/cartao-top1.png")} alt="pic" /><p className='button-title'>Cartão TOP</p></button>
                        </Link>
                        <button className="button" style={{ marginRight: '25px', marginLeft: '25px' }}> <img src={require("../../assets/bilhete-qr1.png")} alt="pic" /><p className='button-title'>Bilhete QR Code</p></button>
                        <button className="button"> <img src={require("../../assets/bilhete-unico1.png")} alt="pic" /><p className='button-title'>Bilhete Único</p></button>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default OptionsPage;