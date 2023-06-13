import { Link } from "react-router-dom";
import "../../App.css";
import "./style.css";
import { useEffect, useState } from "react";

function InsertMoney() {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (modalOpen) {
      const timer = setTimeout(() => {
        window.location.replace("/");
      }, 1500);

      return () => {
        clearTimeout(timer);
      };
    }
  }, [modalOpen]);

  const handleConfirm = () => {
    setModalOpen(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="container-options">
          <p className="title-charge">Recarga de R$ xx,xx</p>
          <p>Insira cédulas até completar o valor total</p>
          <img src={require("../../assets/ilustracao1.png")} alt="pic" />
          <table className="table-info">
            <tr>
              <td className="info-insert">
                <b>Saldo Atual</b>
              </td>
              <td className="info-insert">
                <b>Você ainda precisa inserir</b>
              </td>
            </tr>
            <tr>
              <td className="info-insert">R$ xx,xx</td>
              <td className="info-insert">R$ xx,xx</td>
            </tr>
          </table>
          <br />
          <span className="atencao">
            ATENÇÃO: A máquina não aceita moedas e não devolve troco. Caso
            insira um <br />
            valor acima do solicitado, ele ficará como crédito para você.
          </span>
          <button className="button-confirms" onClick={handleConfirm}>
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
      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2 className="title-success">
              <img
                className="image-top"
                src={require("../../assets/iconcheck.png")}
                alt="pic"
              />
            </h2>
            <p>Sua recarga foi realizada com sucesso!</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default InsertMoney;
