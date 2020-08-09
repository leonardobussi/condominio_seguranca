import React from 'react'

import { BrowserRouter, Route } from 'react-router-dom'
import LoginMorador from './pages/home/LoginMorador';
import Load from './pages/home/Load'
import LoginAdm from './pages/adm/LoginAdm'
function Routes () {
    return (
        <BrowserRouter>

            <Route path="/" exact component={LoginMorador} />
            <Route path="/up"  component={Load} />
            <Route path="/adm/logar"  component={LoginAdm} />


        </BrowserRouter>
    );
}

export default Routes