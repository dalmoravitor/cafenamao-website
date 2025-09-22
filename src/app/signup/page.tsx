

export default function Signup() {
    return (
        <div className="main">

            <div className="loginbox">
                <div className="loginBoxTextos">
                    <h1>Seja muito bem vindo! ✨</h1>
                    <p>Seu tempo, sua energia, seus projetos. <br /><span className="destaque">Crie sua conta</span> e faça acontecer!</p>
                </div>

                <form className="loginForm">
                    <div className="input">
                        <p className="inputTitle" >Seu nome</p>
                        <input type="text" className="inputField" required/>
                    </div>

                    <div className="input">
                        <p className="inputTitle" >Email</p>
                        <input type="email" className="inputField" required/>

                    </div>

                    <div className="input">
                        <p className="inputTitle" >Senha</p>
                        <input type="password" className="inputField" required/>
                    </div>

                    <div className="input">
                        <p className="inputTitle" >Confirmar senha</p>
                        <input type="password" className="inputField" required/>
                    </div>

                    <button type="button" className="esqueciSenha">Esqueceu a senha?</button>

                    <button type="submit" className="loginButton">Criar minha conta</button>


                    <p className="signupText">Já tem uma conta? <a href="/login" className="signupLink">Entrar</a></p>


                </form>

            </div>
        </div>
    )
}