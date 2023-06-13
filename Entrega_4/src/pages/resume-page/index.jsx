import { Link } from "react-router-dom";
import "../../App.css";
import "./style.css";

function ResumePage() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container-options">
          <p className="title-charge">Resumo da compra</p>
          <table className="table-info">
            <tr>
              <td className="info">
                <b>Saldo Atual</b>
              </td>
              <td className="info">R$ xx,xx</td>
            </tr>
            <tr>
              <td className="info">
                <b>Tipo de recarga</b>
              </td>
              <td className="info">Comum</td>
            </tr>
            <tr>
              <td className="info">
                <b>Forma de pagamento</b>
              </td>
              <td className="info">Dinheiro</td>
            </tr>
            <tr>
              <td className="info">
                <b>Valor da recarga</b>
              </td>
              <td className="info">R$ xx,xx</td>
            </tr>
            <tr>
              <td className="info">
                <b>Saldo após a recarga</b>
              </td>
              <td className="info">R$ xx,xx</td>
            </tr>
          </table>
          <Link
            to={"/insertmoney"}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <button className="button-confirm">
              <span style={{ display: "flex", alignItems: "center" }}>
                <img src={require("../../assets/iconcheck.png")} alt="pic" />
                <span
                  style={{ flex: "1", textAlign: "center" }}
                  className="cancel-title"
                >
                  Confirmar
                </span>
              </span>
            </button>
          </Link>
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
            to={"/money"}
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

export default ResumePage;
