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
            <div class="container">
                <div class="form-group float-label-control">
                    <form onSubmit={handleSubmit}>
                        <input
                            placeholder="Username"
                            class="form-control"
                            value={user}
                            onChange={ e => setUser(e.target.value)}
                        />
                        <input
                            placeholder="Name"
                            class="form-control"
                            value={name}
                            onChange={ e => setName(e.target.value)}
                        />
                        <input
                            placeholder="Bio"
                            class="form-control"
                            value={bio}
                            onChange={ e => setBio(e.target.value)}
                        />
                    </form>
                    <div className='cadastro-container'>
                        <button type="submit">Enviar</button>
                    </div>
                </div>
            </div>
        </html>
    );
}