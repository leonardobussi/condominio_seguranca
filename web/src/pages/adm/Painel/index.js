import React from "react"
import './styles.css'

function Painel() {
    return (
        <div>

            <header>
                <h3>Cond<i>System</i></h3>

                <nav>
                <ul>
                    <li><a href="/adm/criar/">Registrar Morador</a></li>
                    <li><a href="/adm/">Registrar Administrador</a></li>
                    <li><a href="/adm/deslogar/">Sign out</a></li>
                </ul>
                </nav>
            </header>

            <div class="conteiner">
                <div class="ocorrencia">
                <h1>OCORRÊNCIAS</h1>

                <div class="card">
                    <h3> Leonardo Bezerra Bussi </h3>
                    <span> 20:00 - 21/02/2020 </span>
                </div>

                </div>
            </div>

        </div>

    )
}

export default Painel;