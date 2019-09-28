import React from 'react';

export default function Main({ match }) {
    return (
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

            <div class="row mb-5">
                        <div class="col-md-6 my-4 my-md-0">
                            <div class="card-img-top pb-3 mx-auto d-block">

                            </div>
                            <div class="container-fluid">
                                <div class="card-body">
                                    <p class="card-text"></p>
                                </div>
                            </div>
                        </div>
                    </div>
        </nav>



    )
}