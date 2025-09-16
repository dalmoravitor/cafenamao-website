"use client";

import "./page.css";
import React, { useState } from "react";
import "./modal-recuperar-senha.css";

export default function Entrar() {
    const [showModal, setShowModal] = useState(false);
    const [email, setEmail] = useState("");
    const [sent, setSent] = useState(false);

    function handleOpenModal(e: React.MouseEvent) {
        e.preventDefault();
        setShowModal(true);
        setSent(false);
        setEmail("");
    }
    function handleCloseModal() {
        setShowModal(false);
    }
    function handleSend(e: React.FormEvent) {
        e.preventDefault();
        // Aqui você pode integrar com backend para envio de email
        setSent(true);
    }

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

                    <button type="button" className="esqueciSenha" onClick={handleOpenModal}>Esqueceu a senha?</button>

                    <button type="submit" className="loginButton"><a href="/home">Entrar</a></button>

                    <p className="signupText">Ainda não tem uma conta? <a href="/signup" className="signupLink">Criar agora</a></p>
                </form>
            </div>

            {/* Modal de recuperação de senha */}
            {showModal && (
                <div className="modal-overlay" onClick={handleCloseModal}>
                    <div className="modal-content" onClick={e => e.stopPropagation()}>
                        <button className="modal-close" onClick={handleCloseModal} style={{width: '28px', height: '28px', backgroundColor: 'transparent', color: '#fff'}} title="Fechar" aria-label="Fechar">
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <line x1="5" y1="5" x2="15" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                        <line x1="15" y1="5" x2="5" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                                                    </svg>
                                                </button>
                        <h2>Recuperar senha</h2>
                        {!sent ? (
                            <form onSubmit={handleSend} style={{width: '100%'}}>
                                <p>Digite seu email cadastrado para receber as instruções de recuperação de senha.</p>
                                <input
                                    type="email"
                                    placeholder="Seu email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    required
                                    autoFocus
                                />
                                <button type="submit"><a href="/home">Enviar</a></button>
                            </form>
                        ) : (
                            <p style={{color: '#FFD600', fontWeight: 500}}>
                                Se o email estiver cadastrado, você receberá as instruções em instantes.
                            </p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}