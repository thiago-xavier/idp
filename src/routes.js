import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from './pages/Login'
import Main from './pages/Main'
import CadastroAluno from './pages/CadastroAluno'
import LandingPage from './pages/LandingPage'

export default function Routes() {
    return (
        <BrowserRouter >
            <Route path = "/"exact component = { LandingPage }/>
            <BrowserRouter path = "/alunos/:id" component = { Main }/>
            <Route path = "/cadastro-aluno" component = { CadastroAluno }/>
            <Route path = "/login" component = { Login }/>
        </BrowserRouter>
    );
}