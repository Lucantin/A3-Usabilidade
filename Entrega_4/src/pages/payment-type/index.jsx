import { Link } from 'react-router-dom';
import '../../App.css';
import './style.css';

function PaymentType() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="container-options">
                    <p className='title-charge'>Recarga comum selecionada</p>
                    <p>Selecione a forma de pagamento:</p>
                    <div className="button-container">
                        <Link to={'/money'} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <button className="button-type-payment"><p className='button-title'> <img src={require("../../assets/dinilus.png")} alt="pic" /></p></button>
                        </Link>
                        <button className="button-type-payment"><p className='button-title'> <img src={require("../../assets/cardilus.png")} alt="pic" /></p></button>
                    </div>
                </div>
                <div className='container-cancel'>
                    <Link to={'/'} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <button className='button-cancel'><span style={{ flex: '1', textAlign: 'center' }} className='cancel-title'>Cancelar</span></button>
                    </Link>
                    <Link to={'/typecharge'} style={{ textDecoration: 'none', color: 'inherit' }}>
                        <button className='button-cancel'><span style={{ flex: '1', textAlign: 'center' }} className='cancel-title'>Voltar</span></button>
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default PaymentType;