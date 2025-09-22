
import "./page.css";

export default function Signup() {
    return (
        <div className="main">
            {/* Imagens decorativas */}
            <img src="/copoCacau.png" alt="Copo Frutas Cítricas" className="signup-decoration signup-copo-citrico" />
            <img src="/copoFC.png" alt="Copo Expresso" className="signup-decoration signup-copo-expresso" />
            <img src="/filtro1.png" alt="Copo V60" className="signup-decoration signup-copo-v60" />
            <img src="/cafeCacau.png" alt="Café Cacau Box" className="signup-decoration signup-cacau-box" />

            <div className="loginbox">
                <div className="loginBoxTextos">
                    <h1>Bem vindo de volta! ✨</h1>
                    <p>Seu tempo, sua energia, seus projetos. <br /><span className="destaque">Crie sua conta</span> e faça acontecer!</p>
                </div>

                <form className="loginForm">
                    

                    <div className="input">
                        <p className="inputTitle" >Email</p>
                        <input type="email" className="inputField" required />
                    </div>

                    <div className="input">
                        <p className="inputTitle" >Senha</p>
                        <input type="password" className="inputField" required />
                    </div>

                    

                    <button type="button" className="esqueciSenha">Esqueceu a senha?</button>

                    <button  type="submit" className="loginButton" ><a href="/home">Entrar</a></button>

                    <p className="signupText">Ainda não tem uma conta? <a href="/signup" className="signupLink">Criar agora</a></p>
                </form>
            </div>
        </div>
    );
}