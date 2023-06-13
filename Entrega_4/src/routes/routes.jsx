import React from "react";
import { Route, BrowserRouter, Routes as Router } from "react-router-dom";
import HomePage from "../pages/tela-inicial";
import About from "../pages/saiba-mais";
import OptionsPage from "../pages/tela-opcoes";
import CardPage from "../pages/tela-card";
import TypeCharge from "../pages/type-charger";
import PaymentType from "../pages/payment-type";
import MoneyPage from "../pages/money-page";
import ResumePage from "../pages/resume-page";
import InsertMoney from "../pages/insert-page";

const Routes = () => {
    return (
        <BrowserRouter>
            <Router>
                <Route path="/" exact element={<HomePage />} />
                <Route path="/about" exact element={<About />} />
                <Route path="/options" exact element={<OptionsPage />} />
                <Route path="/card" exact element={<CardPage />} />
                <Route path="/typecharge" exact element={<TypeCharge />} />
                <Route path="/paymenttype" exact element={<PaymentType />} />
                <Route path="/money" exact element={<MoneyPage />} />
                <Route path="/resume" exact element={<ResumePage />} />
                <Route path="/insertmoney" exact element={<InsertMoney />} />
            </Router>
        </BrowserRouter>
    );
};

export default Routes;