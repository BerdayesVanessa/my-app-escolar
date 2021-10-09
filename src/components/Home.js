import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Vanessa from "../assets/img/Vanessa.jpg";
import Gilberto from "../assets/img/Gilberto.jpg";
import Abelardo from "../assets/img/Abelardo.jpg";
import Katherine from "../assets/img/Katherine.jpg";

export default function Home(){
    return(
        <div>
            <div class="container-fluid">
                <header className="container-fluid header"></header>
                <div class="container-fluid nav">
                    <ul class="nav">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Sobre Nós</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Sobre o Projeto</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Cadastrar Aluno</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Editar Aluno</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link disabled">Disabled</a>
                        </li>
                    </ul>
                </div>
        </div>

            <div class="container sobre">
                <div class="row">
                <div class="col-sm-3">
                    <img src="" class="img-fluid rounded-start" alt="..."></img>
                </div>
                <div class="col-sm-9">
                    <h5 class="card-text"><strong>VKGA Organização Estudantil</strong></h5> 
                    <p class="card-text">Nasceu com o propósito de criar um sistema de cadastro para instituções de ensino com a finalidade de oferecer qualidade, facilidade e rapidez aos nossos usuários.</p>
                    <p class="card-text">Nossa equipe é formada por quatro venezuelanos, estudandes do curso de Desenvolvedores Front-End na Toti. </p>
                </div>

                <div class="row pessoa">
                <div class="col-sm-3">
                    <img src={Vanessa} class="imagem__principal" alt="imagem da Vanessa"></img>
                    <h5 class="nome">Vanessa Berdayes</h5>
                </div>
            
                <div class="col-sm-3">
                    <img src={Gilberto} class="imagem__principal" alt="imagem da Vanessa"></img>
                    <h5 class="nome">Gilberto Gil</h5>
                </div>

                <div class="col-sm-3">
                    <img src={Katherine} class="imagem__principal" alt="imagem da Vanessa"></img>
                    <h5 class="nome">Katherine Villa</h5>
                </div>

                <div class="col-sm-3">
                    <img src={Abelardo} class="imagem__principal" alt="imagem da Vanessa"></img>
                    <h5 class="nome">Abelardo Sukkar</h5>
                </div>
                </div>
            </div>
        </div>

        <div class="container-fluid separacao"></div>

        <div class="container-fluid projeto">
        <div class="container">
            <div class="card-body">
            <div class="row">
                <div class="col">
                <div class="card" >
                    <img src="https://smiperformance.com/wp-content/uploads/2016/10/droit-au-but-21.jpg" class="card-img-top" alt="..."></img>
                    <div class="card-body">
                        <h5 class="card-title">Missão</h5>
                        <p class="card-text">Criar uma aplicação CRUD utilizando as bibliotecas React e JSON Server para um sistema de gestão escolar.</p>
                    </div>
                </div>
                </div>
                    
                <div class="col">
                <div class="card" >
                    <img src="https://media.istockphoto.com/photos/3d-little-person-looks-for-something-picture-id493635181?k=6&m=493635181&s=612x612&w=0&h=RxRdplshIzbirva-YlFrtEvsWT3i5bJpEKna9Anyjb4=" class="card-img-top" alt="..."></img>
                    <div class="card-body">
                        <h5 class="card-title">Visão</h5>
                        <p class="card-text">Aprimorar e disponibilizar nosso CRUD de sistema de gestão escolar para fins educacionais.</p>
                    </div>
                </div>
                </div>

                <div class="col">
                <div class="card" >
                    <img src="https://i.pinimg.com/736x/13/5c/5e/135c5e79a6d7d00fc103a68ddb29a516--language-immersion-water-purification.jpg" class="card-img-top" alt="..."></img>
                    <div class="card-body">
                        <h5 class="card-title">Valores</h5>
                        <p class="card-text">Respeito, responsabilidade social, confiança, inclusão, qualidade, segurança da informação e soluções ágeis. </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </div>

        <div class="container-fluid separacao"></div>

        <div class= "container crud">
        <div class="row">
        <div class="col-sm-3">
            <div class="card">
            <div class="card-body">
                <img src="https://i0.wp.com/bane-tech.com/wp-content/uploads/2015/10/C.png?ssl=1" class="card-img-top" alt="..."></img>
                <h5 class="card-title">Create (criar) </h5>
                <p class="card-text"> Criar um novo registro de aluno.</p>
                <a href="#" class="btn btn-outline-success">Criar</a>
            </div>
            </div>
        </div>
        <div class="col-sm-3">
            <div class="card">
            <div class="card-body">
                <img src="https://th.bing.com/th/id/R.e1182ad1f0d2bc2bd97a956955e6539a?rik=lIL9UjIFAxC%2bCQ&riu=http%3a%2f%2fwww.bane-tech.com%2fwp-content%2fuploads%2f2015%2f10%2fR.png&ehk=TnA7hqpVNkW5lNWDfQwTwqKOc1Cmbw4tJ7Vcb5%2bjiSk%3d&risl=&pid=ImgRaw&r=0" class="card-img-top" alt="..."></img>
                <h5 class="card-title">Read (ler)</h5>
                <p class="card-text"> Exibir as informações do aluno.</p>
                <a href="#" class="btn btn-outline-secondary">Exibir</a>
            </div>
            </div>
        </div>
        <div class="col-sm-3">
            <div class="card">
                <div class="card-body">
                <img src="https://i2.wp.com/bane-tech.com/wp-content/uploads/2015/10/U.png?ssl=1" class="card-img-top" alt="..."></img>
                <h5 class="card-title">Update (atualizar)</h5>
                <p class="card-text"> Atualizar os dados do aluno.</p>
                <a href="#" class="btn btn-outline-info">Atualizar</a>
                </div>
            </div>
            </div>
            <div class="col-sm-3">
            <div class="card">
                <div class="card-body">
                <img src="https://www.logolynx.com/images/logolynx/37/37afdc45d00a2c88d42d9a9f2238ffc0.png" class="card-img-top" alt="..."></img>
                <h5 class="card-title">Delete (apagar)</h5>
                <p class="card-text"> Apagar registro do aluno.</p>
                <a href="#" class="btn btn-outline-danger">Apagar</a>
                </div>
            </div>
            </div>
        </div>
    </div>

    <footer class="container-fluid footer"> </footer>

    <div class="container-fluid copyright">
        <h6>© 2021 Copyright:  VKGA Todos os direitos reservados </h6>
    </div>
      

    </div>
    )
};