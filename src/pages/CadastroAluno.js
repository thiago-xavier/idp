import React, { useState } from 'react';
import './CadastroAluno.css';

import api from '../services/api';

export default function CadastroAluno({ history }) {
    const [user, setUser] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        const response = await api.post('/alunos', {
            name,
            user,
            password,
            email
        })

        const { _id } = response.data;

        console.log(response);
        console.log(`Nome do usuario: ${user}`);

        history.push(`/alunos/${_id}`);
    }

    return (
        <html>
            <nav class="navbar navbar-expand-md bg-dark navbar-dark">
                <a class="navbar-brand" href="/">IDP</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <a class="nav-link" href="/cadastro-aluno">Cadastro Aluno</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="/cadastro-empresa">Cadastro Empresa</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="/login">Login</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div class="container">
                <div class="form-group float-label-control">
                    <form onSubmit={handleSubmit}>
                        <input
                            placeholder="Name"
                            class="form-control"
                            value={name}
                            onChange={ e => setName(e.target.value)}
                        />
                        <input
                            placeholder="Username"
                            class="form-control"
                            value={user}
                            onChange={ e => setUser(e.target.value)}
                        />
                        <input
                            id="password"
                            placeholder="Password"
                            class="form-control"
                            value={password}
                            onChange={ e => setPassword(e.target.value)}
                        />
                        <input
                            placeholder="email"
                            type="email"
                            class="form-control"
                            value={email}
                            onChange={ e => setEmail(e.target.value)}
                        />
                        <button class="btn btn-primary" type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        </html>
    );
}