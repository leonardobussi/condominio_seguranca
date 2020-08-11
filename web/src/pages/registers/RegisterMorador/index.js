import React from "react"
import './styles.css'


function RegisterMorador() {

    return (
       <>
            <div className="logo">
                <h3>Cond<i>System</i></h3> 
                <span>O melhor e mais seguro Condominio da região</span>
            </div>


            <div className="container ">
                   
                    <form method="POST" enctype="application/x-www-form-urlencoded">
                        <h3>Register</h3>

                        <div className="names">

                            <div className="input">
                                <label>Nome <strong>*</strong></label>
                                <input 
                                    type="text" 
                                    name="nome" 
                                    required
                                    placeholder="digite seu nome"
                                    autocomplete="off"
                                />
                            </div>

                            <div className="input">
                                <label>Nickname <strong>*</strong></label>
                                <input  
                                    type="text" 
                                    name="nickname" 
                                    required
                                    placeholder="digite seu username"
                                    autocomplete="off"
                                />
                            </div>
    

                        </div>

                        <div className="senhas">
                            <div className="input">
                                <label>Senha 1<strong>*</strong></label>
                                <input
                                    type="password" 
                                    name="senha1" 
                                    required
                                    placeholder="digite sua senha 1" 
                                    autocomplete="off"
                                />
                            </div>

                            <div className="input">
                                <label>Senha 2 <strong>*</strong></label>
                                <input
                                    type="password" 
                                    name="senha2" 
                                    required
                                    placeholder="digite sua senha 2" 
                                    autocomplete="off"
                                />
                            </div>
                        </div>

                        <div className="casa">
                            <div className="input">
                                <label>Numero <strong>*</strong></label>
                                <input
                                    type="number" 
                                    name="numero" 
                                    required
                                    placeholder="digite o numero da sua casa" 
                                    autocomplete="off"
                                />
                            </div>

                            <div>
                                <label>Bloco <strong>*</strong></label>
                                <input
                                    type="text" 
                                    name="bloco" 
                                    required
                                    placeholder="digite o bloco da casa" 
                                    autocomplete="off"
                                />
                            </div>
                        </div>
                        

                            <button type="submit"  >Entrar</button>
                       

                    </form>
            </div>
        </>
    )
}

export default RegisterMorador;