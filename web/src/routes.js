import React from 'react'

import { BrowserRouter, Route } from 'react-router-dom'
import LoginMorador from './pages/home/LoginMorador';
import Load from './pages/home/Load'
import LoginAdm from './pages/adm/LoginAdm'
import Painel from './pages/adm/Painel'
import RegisterAdm from './pages/registers/RegisterAdm'
import RegisterMorador from './pages/registers/RegisterMorador'


function Routes () {
    return (
        <BrowserRouter>

            <Route path="/" exact component={LoginMorador} />
            <Route path="/up" exact component={Load} />
            <Route path="/adm/logar" exact component={LoginAdm} />
            <Route path="/adm/painel" exact  component={Painel} />
            <Route path="/adm/"  exact  component={RegisterAdm} />
            <Route path="/adm/criar" exact component={RegisterMorador} />


        </BrowserRouter>
    );
}

export default Routes