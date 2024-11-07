import { FaUser, FaLock } from "react-icons/fa";

import { useState } from "react";
import "./Login.css";

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("teste", username, password);
        console.log("Envio");
    };

    return (
        <div className='container'>
            <form onSubmit={handleSubmit}>
                <h1>Acesse o Sistema</h1>
                <div className="input-field">
                    <input type="email" placeholder='E-mail' onChange={(e) => setUsername(e.target.value)} />
                    <FaUser className="icon"></FaUser>
                </div>
                <div className="input-field">
                    <input type="password" placeholder='Senha' onChange={(e) => setPassword(e.target.value)}/>
                    <FaLock className="icon"></FaLock>
                </div>
                <div className="recall-forget">
                    <label>
                        <input type="checkbox" />
                        Lembre de min
                    </label>
                    <a href="#">Esqueceu a senha?</a>
                </div>
                
                <button>Entrar</button>

                <div className="signup-link">
                    <p>Não tem uma conta?
                        <a href="#">Registrar</a>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default Login