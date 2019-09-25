import React, { useState } from 'react';
import './CadastroAluno.css';

import api from '../services/api';

export default function CadastroAluno({ history }) {
    const [user, setUser] = useState('');
    const [name, setName] = useState('');
    const [bio, setBio] = useState('');

    async function handleSubmit(e) {
        e.preventDefault();

        const response = await api.post('/find-aluno', {
            name,
            user,
            bio
        })

        const { _id } = response.data;

        console.log(response);
        console.log(`Nome do usuario: ${user}`);

        history.push(`/alunos/${_id}`);
    }

    return (
        <html>
            <div class='container'>
                <h1>
                    Teste para o Segundo Container.
                </h1>
            </div>
            <div className="cadastro-container">
                <form onSubmit={handleSubmit}>
                    <input
                        placeholder="Username"
                        value={user}
                        onChange={ e => setUser(e.target.value)}
                    />
                    <input
                        placeholder="Name"
                        value={name}
                        onChange={ e => setName(e.target.value)}
                    />
                    <input
                        placeholder="Bio"
                        value={bio}
                        onChange={ e => setBio(e.target.value)}
                    />
                    <button type="submit">Enviar</button>
                </form>

                <div classname="list-group">
                    <a href="/" class="list-group-item list-group-item-action">Teste</a>
                    <a href="/" class="list-group-item list-group-item-action">Teste=-Teste</a>
                </div>
            </div>
        </html>
    );
}