import { Link } from 'react-router-dom';
import '../../App.css';
import './style.css';

function CardPage() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="container-options">
                    <p className='title'>Por gentileza, insira seu cartão TOP</p>
                    <div className="button-container">
                        <Link to={'/typecharge'} style={{ textDecoration: 'none', color: 'inherit' }}>
                            <button className='button-card'>
                                <img src={require("../../assets/ilustra.png")} alt="pic" />
                            </button>
                        </Link>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default CardPage;