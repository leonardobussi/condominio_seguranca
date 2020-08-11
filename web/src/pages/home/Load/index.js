import React from "react"
import './styles.css'

function Load() {
    var text = 10
    return (
        <div>
            <div className="logo">
                <h1>Cond<i>System</i></h1>
                <p>O melhor e mais seguro Condominio da região</p>
            </div>

            <div className="conteiner">
                <div className="card2">
                    <h1>Seja Bem vindo</h1>
                    <div id="tempo" className="contador">
                        {text}
                    </div>

                    <div class="loading">
                        <div className="load">
                            aguarde<i>...</i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Load;