import React from "react"
import {Link} from "react-router-dom"
import './styles.css'

function LoginAdm() {
    return (
        <div class="container ">
            <div class="logo">
                <h3>Cond<i>System</i></h3> 
                <span>O melhor e mais seguro Condominio da região</span>
            </div>
        <div class="row ">
            <aside class="col-md-4 offset-md-4" >
                <div class="card shadow " >
               
              
                
                    <article class="card-body">
                        <h4 class="card-title mb-4 mt-1">Sign in</h4>

                        <form method="POST" enctype="application/x-www-form-urlencoded">

                            <div class="form-group">
                                <label>Email</label>
                                <input class="form-control" autocomplete="off"  required placeholder="Jose_Gritz@gmail.com" type="email" name="email" id="txt"/>
                            </div>
                            
                            <div class="form-group">
                                <label>Senha</label>
                                <input class="form-control" autocomplete="off" required placeholder="******" type="password" name="senha" id="txt1"/>
                            </div> <br/>

                            <div class="form-group">
                                <button type="submit" class="btn btn-primary btn-block" value="Verificar" onclick="verificar()"> Entrar  </button>
                                <Link to="/painel" class="btn btn-secondary btn-block" > Ir painel  </Link>
                            </div> 

                        </form> 

                    </article> 
                </div> 
            </aside>
        </div>  
    </div>

    )
}

export default LoginAdm;