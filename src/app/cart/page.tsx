"use client"

import { Header } from "@/components/Header"
import React from "react"
import { useCart } from "@/app/CartContext"
import './cart.css'

import { BiCoffeeTogo } from "react-icons/bi"


export default function Cart() {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const total = cart.reduce((acc, item) => acc + item.preco * item.quantidade, 0);

  return (
    <>
      <Header />
      <div className="cart-container">
        <div className="cart-main">
          <div className="cart-list">
            <h2 className="cart-title">Itens do Carrinho</h2>
            {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <img className="cart-item-img" src={item.foto} alt={item.nome} />
                <div className="cart-item-info">
                  <span className="cart-item-nome">{item.nome}</span>
                  <span className="cart-item-preco">R$ {item.preco.toFixed(2)}</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <button
                      onClick={() => updateQuantity(item.id, Math.max(1, item.quantidade - 1))}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#FFB921',
                        fontSize: 22,
                        cursor: 'pointer',
                        padding: '0 8px',
                        lineHeight: 1
                      }}
                      aria-label="Diminuir quantidade"
                    >−</button>
                    <span className="cart-item-quantidade">{item.quantidade}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantidade + 1)}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#FFB921',
                        fontSize: 22,
                        cursor: 'pointer',
                        padding: '0 8px',
                        lineHeight: 1
                      }}
                      aria-label="Aumentar quantidade"
                    >+</button>
                  </div>
                </div>
                <button className="cart-item-remove" onClick={() => removeFromCart(item.id)}>
                  Remover
                </button>
              </div>
            ))}
          </div>
          <div className="container-right">
            <div className="resumo-pedido">
              <h2 className="container-right-title">Resumo do Pedido</h2>
              <div className="container-right-info">
                <div className="container-right-row">
                  <span>Subtotal:</span>
                  <span>R$ {total.toFixed(2)}</span>
                </div>
                <div className="container-right-row">
                  <span>Frete:</span>
                  <span>R$ 5,00</span>
                </div>
                <div className="container-right-row total">
                  <span>Total:</span>
                  <span>R$ {(total + 5).toFixed(2)}</span>
                </div>
              </div>
              <div className="container-right-botao">
                <a className="container-right-btn" href="/checkout" >
                  <button  style={{width: '100%'}}>Finalizar Compra</button>
                </a>
              </div>
            </div>
            <div className="card-pontos">
              <div className="card-pontos-texto">
                <h3 className="texto-card-pontos">
                  Essa compra vai te dar{" "}
                  <span
                    className="texto-destaque-card-pontos"
                    style={{ display: 'inline-flex', alignItems: 'center', whiteSpace: 'nowrap', gap: 4 }}
                  >
                    100 copinhos!<BiCoffeeTogo size={20} />
                  </span>
                </h3>
                <p>
                  Faltam apenas <span className="texto-destaque-card-pontos">900</span> copinhos para ganhar um kit com <span className="texto-destaque-card-pontos">6 cafés grátis!</span>
                </p>
              </div>
              <button className="botaoPontos">Ver recompensas</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}