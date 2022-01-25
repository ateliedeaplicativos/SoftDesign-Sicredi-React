import React from "react";
import { Navigate } from "react-router-dom";
import './login.css';

import logo from'../Imagens/sicredi-logo.svg'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user: "",
            password: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.user === "admin" && this.state.password === "123456") {
            this.props.callback(this.state.user)
            localStorage.setItem('user', this.state.user)
        }
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return ( 
              <div className="box-root padding-top--24 flex-flex flex-direction--column">
                <div className="box-root padding-top--48 padding-bottom--24 flex-flex flex-justifyContent--center">
                    <img className="tam-logo" src={logo} alt="logo"></img>
                </div>
                <div className="formbg-outer">
                  <div className="formbgLogin">
                    <div className="formbg-inner padding-horizontal--48">
                      
                    <form onSubmit={this.handleSubmit} method="post">
                    <div className="field padding-bottom--24">
                    <label for="userName">Nome</label>
                        <input className="field field-checkbox" type="text" name="user" onChange={this.handleChange} />
                    </div>
                    <div className="field padding-bottom--24">
                    <label for="userName">Senha</label>
                        <input className="field field-checkbox" type="password" name="password" onChange={this.handleChange} />
                    </div>
                        <div>
                            <button type="submit" className="botao"><span>Entrar</span></button>
                        </div>
                        {this.props.user ? <Navigate to="/dragon"></Navigate> : null}
                    </form>

                    </div>
                  </div>
                </div>
              </div>        
        )
    }
}

export default Login;