import React, { useState } from 'react';
import './Login.css';

import api from '../services/api';

import logo from '../assets/IDP Opportunities - Branco.svg'

export default function Login({ history }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        const response = await api.post('/alunos', {
            username,
        })

        const { _id } = response.data;

        console.log(response);
        console.log(`Nome do usuario: ${username}`);
        console.log(`A senha do usuário: ${password}`);

        history.push(`/alunos/${_id}`);
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="Idp"></img>
                <input
                    placeholder="Login"
                    value={username}
                    onChange={ e => setUsername(e.target.value)}
                />
                <input
                    type='password'
                    placeholder="Password"
                    value={password}
                    onChange={ e => setPassword(e.target.value)}
                />
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}