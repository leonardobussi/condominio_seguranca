import React from "react"
import {Link} from "react-router-dom"
import './styles.css'


function Home() {

    return (
        <div className="container ">
            <div className="logo">
                <h3>Cond<i>System</i></h3> 
                <span>O melhor e mais seguro Condominio da região</span>
            </div>

            <div className="row ">
                <aside className="col-md-4 offset-md-4" >
                    <div className="card shadow " >
                         <article className="card-body">
                            <h4 className="card-title mb-4 mt-1">Sign in</h4>
                            <form method="POST" enctype="application/x-www-form-urlencoded">
                                <div className="form-group">
                                    <label>Username</label>
                                    <input 
                                        className="form-control" 
                                        autocomplete="off"  
                                        required 
                                        placeholder="Jose_Gritz@gmail.com" 
                                        type="text" 
                                        name="nickname" 
                                        id="txt">
                                    </input>
                                </div>
                                <div className="form-group">
                                    <label>Senha</label>
                                    <input 
                                        className="form-control" 
                                        autocomplete="off" 
                                        required 
                                        placeholder="******" 
                                        type="password" 
                                        name="senha" 
                                        id="txt1">
                                    </input>
                                </div>
                                <div className="form-group">
                                    <button 
                                        type="submit" 
                                        className="btn btn-primary btn-block" 
                                        value="Verificar" 
                                        onclick="verificar()"> Entrar  
                                    </button>
                                    <Link className="btn btn-secondary btn-block" to="/up">
                                        Enviar
                                    </Link>
                                </div>
                            </form>
                         </article>
                    </div>
                </aside>
            </div>
        </div>
    )
}

export default Home;