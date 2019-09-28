import React from 'react';

import './LandingPage.css'

export default function LandingPage() {
    return (
        <div class="divisao-conteudo">
            <header>
                <img src="https://paulajunior.com/dev/opportunities/wp-content/uploads/2019/09/bg-header.jpg" alt='header'/>
            </header>
            
            <div class="py-5 bg-sobre" id="sobre">
                <div class="container">
                    <div class="row">
                        <div class="col-md-9 ml-auto">
                            <h1 class="titulo-sobre det-sobre mb-5 mb-md-8">Sobre</h1>
                            <br/>
                            <p>
                            O IDP Opportunities é uma plataforma feita especialmente para
                            os alunos IDP e nossas empresas parceiras. Nela disponibilizamos
                            oportunidades em diferentes segmentos do meio jurídico para
                            nossos alunos irem além no mercado de trabalho. As empresas,
                            por sua vez, têm a possibilidade de encontrar profissionais com a
                            qualidade IDP, perfil e competências específicas. A proposta da
                            plataforma é fortalecer as relações com empresas, públicas ou
                            privadas, para apoiar o desenvolvimento profissional de alunos e
                            também do mercado de trabalho. Na prática, todos ganham.
                            Por meio da plataforma, fortalecemos o relacionamento com os
                            escritórios e empresas parceiras, facilitando a captação direcionada de estagiários e profissionais qualificados e apresentamos
                            oportunidades reais para os nossos alunos, em um trabalho constante de melhoria de performance e desempenho profissional,
                            que começa nas salas de aula, passa pelas oficinas e pelo Career
                            Center e se consolida na JobFair e no IDP Opportunities.
                            Cadastre-se e conheça!
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="bg-img-alunos bg-img-alunos-responsivo" id="alunos">
                <div class="container-fluid my-0 py-0">
                    <div class="row">
                        <div class="col-md-6 ml-auto px-3 py-5 p-md-5">
                            <h1 class="det-titulo mb-5">alunos idp</h1>
                            <p>
                            - Oportunidades de estágios e/ou empregos
                            <br/><br/>

                            - Visibilidade no mercado de trabalho<br/><br/>

                            - Modelo de Currículo compatível com o
                            mercado<br/><br/>

                            - Conhecimento das empresas do segmento<br/>
                            de atuação em Brasília<br/><br/>

                            - Acesso a Cartilha do Candidato, 
                            com dicas <br/>para participação em entrevistas
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="py-5 bg-empresas" id="empresas">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6">
                            <h1 class="det-titulo mb-5">empresas</h1>
                            <p>
                                - Acesso à estagiários e profissionais
                                <br/>capacitados, de acordo com o perfil e
                                competências pretendidas

                                <br/><br/>- Facilidade no processo de contratação

                                <br/><br/>- Participação em eventos<br/> exclusivos para os Parceiros IDP

                                <br/><br/>- Visibilidade entre os alunos da instituição

                                <br/><br/>- Ranking de Contratações
                            </p>
                        </div>
                        <div class="col-md-6">
                            <img src="https://paulajunior.com/dev/opportunities/wp-content/uploads/2019/09/icone-empresas.png" class="icone-empresas mx-auto d-block img-fluid" alt="icon-empresas"/>
                        </div>
                    </div>
                </div>
            </div>



            <img src="https://paulajunior.com/dev/opportunities/wp-content/uploads/2019/09/detalhe-topo-insrcicao.jpg" class="img-fluid mx-auto d-block m-0 p-0" alt="topo-inscricao"/>
            <div class="p-3 p-md-5 bg-white" id="inscricoes">
                <div class="container">
                    <div class="row">
                    </div>
                        <h1 class="titulo-inscricao py-5 py-md-0 m-0 mb-md-5"> Inscrições em Breve</h1>
                    
                </div>
            </div>


            <div class="py-2 bg-mapa">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3">
                            <p class="m-0 text-md-right text-center"><strong>SEJA IDP</strong></p>
                            <br/>
                            <p class="m-0 text-md-right text-center"><a href="http://www.idp.edu.br/cursos/graduacao/" class="text-white">GRADUAÇÃO</a></p>
                            <p class="m-0 text-md-right text-center"><a href="http://posgraduacao.idp.edu.br" class="text-white">PÓS-GRADUAÇÃO</a></p>
                            <p class="m-0 text-md-right text-center"><a href="http://www.idp.edu.br/cursos/mestrado/" class="text-white">MESTRADO</a></p>
                            <p class="m-0 text-md-right text-center"><a href="http://doutoradodireito.idp.edu.br/" class="text-white">DOUTORADO</a></p>
                        </div>
                        <div class="col-md-5 mt-5 mt-md-0">
                            
                        </div>

                        <div class="col-md-4 mt-3">
                            <div class="container-fluid">
                                <div class="row">
                                        <p>Tel: (61)3535-6565</p>
                                </div>
                                <div class="row">
                                    </div>
                                        <a href="https://www.instagram.com/sejaidp/" class="fa fa-instagram"><strong> /sejaidp</strong></a>
                                        <a href="https://www.facebook.com/sejaidp" class="fa fa-facebook"><strong> /sejaidp</strong></a>
                                    <div class="row mt-5">
                                        <p>SGAS Quadra 607, Módulo 49<br/>Via L2 Sul, Brasília-DF<br/>CEP: 70200-670</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer id="contato">
                <div class="container">
                    <div class="row py-6">
                        <br/>
                            <center>
                                <p class="float-none">IDP © 2019. TODOS OS DIREITOS RESERVADOS.</p>
                            </center>
                        <br/>
                    </div>
                </div>
            </footer>
        </div>
    );
};