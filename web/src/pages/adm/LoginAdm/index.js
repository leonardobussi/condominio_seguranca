import React from "react"
import './styles.css'


function LoginAdm() {

    return (
       <>
            <div className="logo">
                <h3>Cond<i>System</i></h3> 
                <span>O melhor e mais seguro Condominio da região</span>
            </div>


            <div className="container ">
                   
                    <form method="POST" enctype="application/x-www-form-urlencoded">
                        <h3>Sign in</h3>
                        <label>E-mail <strong>*</strong></label>
                        <input  
                            type="email" 
                            className="input" 
                            name="email" 
                            required
                            placeholder="digite seu email"
                            autocomplete="off"
                        />

                        

                        <label>Senha <strong>*</strong></label>
                        <input
                            type="password" 
                            name="senha" 
                            required
                            placeholder="digite sua senha" 
                            autocomplete="off"
                        />

                        <button type="submit"  >Entrar</button>

                    </form>
            </div>
        </>
    )
}

export default LoginAdm;