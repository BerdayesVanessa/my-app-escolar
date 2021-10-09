import React from "react";
import { HashRouter, NavLink, Route, Switch, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header(){
    return(
        <div calss="container-fluid">
            <div class="container-fluid">
                <header className="container-fluid header"></header>
                <div class="container-fluid nav">
                    <ul class="nav">
                        <li class="nav-item">
                            <Link to="/" class="nav-link" href="#">Página Inicial</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/cadastrar" class="nav-link" href="#">Cadastrar Aluno</Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/dados"  class="nav-link" href="#">Dados dos Alunos</Link>
                        </li>
                    </ul>
                </div>
        </div>
    </div>
    )
};