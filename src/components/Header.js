import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header(){
    return(
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
    )
};