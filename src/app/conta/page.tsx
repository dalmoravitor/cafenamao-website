"use client"

import { Header } from "@/components/Header"
import React, { useState } from "react"
import './conta.css'


export default function Conta() {
  const [nome, setNome] = useState('Vitor');
  const [email, setEmail] = useState('vitor@example.com');
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  return (
    <div className="container-principal">
      <Header />

      <div className="card-pontos">
        <h3>Seus pontos: 1100</h3>
      </div>

      <div className="container-conteudo">
        <div className="container-conta">
          <h2>Configurações da conta</h2>
          <h3 className="informacoes">Informações Pessoais</h3>
          <label>
            Nome:
            <input
              type="text"
              value={nome}
              onChange={e => setNome(e.target.value)}
              className="conta-input"
              placeholder="Digite seu nome"
            />
          </label>
          <label>
            E-mail:
            <input
              type="email"
              defaultValue={email}
              className="conta-input"
              placeholder="Digite seu e-mail"
            />
          </label>

          <h3 className="informacoes">Alterar Senha</h3>
            <label>
              Nova Senha:
              <input
                type="password"
                value={novaSenha}
                onChange={e => setNovaSenha(e.target.value)}
                className="conta-input"
                placeholder="Digite a nova senha"
              />
            </label>
            <label>
              Confirmar nova senha:
              <input
                type="password"
                value={confirmarSenha}
                onChange={e => setConfirmarSenha(e.target.value)}
                className="conta-input"
                placeholder="Confirme a nova senha"
              />
            </label>

            <button className="botaoSalvar">Salvar Alterações</button>
        </div>

        <div className="container-pedidos">
            <h2>Meus Pedidos</h2>

            <div className="pedido-card">
              <div className="pedido-card-header">
                <span className="pedido-id">#12345</span>
                <span className="pedido-data">10/09/2025</span>
              </div>
              <div className="pedido-produto">Copo expresso 180ml</div>
              <div className="pedido-card-footer">
                <span className="pedido-status">Entregue</span>
                <span className="pedido-total">R$ 8,00</span>
              </div>
            </div>

            <div className="pedido-card">
              <div className="pedido-card-header">
                <span className="pedido-id">#12345</span>
                <span className="pedido-data">10/09/2025</span>
              </div>
              <div className="pedido-produto">Copo Frutas Cítricas 180ml (2 unidades)</div>
              <div className="pedido-card-footer">
                <span className="pedido-status">A caminho</span>
                <span className="pedido-total">R$ 16,00</span>
              </div>
            </div>

            <div className="pedido-card">
              <div className="pedido-card-header">
                <span className="pedido-id">#12345</span>
                <span className="pedido-data">10/09/2025</span>
              </div>
              <div className="pedido-produto">Filtro de Alumínio (1 unidade)</div>
              <div className="pedido-card-footer">
                <span className="pedido-status">Embalando</span>
                <span className="pedido-total">R$ 44,00</span>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}