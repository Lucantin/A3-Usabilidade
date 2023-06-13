import { Link } from "react-router-dom";
import "../../App.css";
import "./style.css";

function TypeCharge() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container-options">
          <p className="title-charge">Selecione o tipo de recarga:</p>
          <div className="button-class">
            <button className="button-charge">
              <p className="button-title">Vale Transporte</p>
            </button>
            <Link
              to={"/paymenttype"}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <button className="button-charge">
                <p className="button-title">Comum</p>
              </button>
            </Link>
            <button className="button-charge">
              <p className="button-title">Escolar</p>
            </button>
          </div>
        </div>
        <div className="container-cancel">
          <Link to={"/"} style={{ textDecoration: "none", color: "inherit" }}>
            <button className="button-cancel">
              <span style={{ display: "flex", alignItems: "center" }}>
                <img src={require("../../assets/iconcancel.png")} alt="pic" />
                <span
                  style={{ flex: "1", textAlign: "center" }}
                  className="cancel-title"
                >
                  Cancelar
                </span>
              </span>
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default TypeCharge;
