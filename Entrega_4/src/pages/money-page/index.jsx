import { Link } from "react-router-dom";
import "../../App.css";
import "./style.css";

function MoneyPage() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container-options">
          <p className="title-charge">
            Recarga comum selecionada, <br />
            pagamento em dinheiro
          </p>
          <p>Selecione o valor da recarga:</p>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Link
              to={"/resume"}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <button className="mon-button">
                <span className="mon-title">R$ 2,00</span>
              </button>
            </Link>
            <Link
              to={"/resume"}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <button className="mon-button">
                <span className="mon-title">R$ 5,00</span>
              </button>
            </Link>
            <Link
              to={"/resume"}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <button className="mon-button">
                <span className="mon-title">R$ 10,00</span>
              </button>
            </Link>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            <Link
              to={"/resume"}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <button className="mon-button">
                <span className="mon-title">R$ 20,00</span>
              </button>
            </Link>
            <Link
              to={"/resume"}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <button className="mon-button">
                <span className="mon-title">R$ 50,00</span>
              </button>
            </Link>
            <Link
              to={"/resume"}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <button className="mon-button">
                <span className="mon-title">R$ 100,00</span>
              </button>
            </Link>
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
          <Link
            to={"/paymenttype"}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <button className="button-cancel">
              <span
                style={{ flex: "1", textAlign: "center" }}
                className="cancel-title"
              >
                Voltar
              </span>
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
}

export default MoneyPage;
