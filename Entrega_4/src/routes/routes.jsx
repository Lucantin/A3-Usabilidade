import React from "react";
import { Route, BrowserRouter, Routes as Router } from "react-router-dom";
import HomePage from "../pages/tela-inicial";
import About from "../pages/saiba-mais";
import OptionsPage from "../pages/tela-opcoes";

const Routes = () => {
    return (
        <BrowserRouter>
            <Router>
                <Route path="/" exact element={<HomePage />} />
                <Route path="/about" exact element={<About />} />
                <Route path="/options" exact element={<OptionsPage />} />
            </Router>
        </BrowserRouter>
    );
};

export default Routes;