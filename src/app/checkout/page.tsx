"use client";
import { Header } from "@/components/Header";
import { useCart } from "@/app/CartContext";
import React, { useState } from "react";
import "./checkout.css";

export default function Checkout() {
  const { cart } = useCart();
  const total = cart.reduce((acc, item) => acc + item.preco * item.quantidade, 0);
  const [paymentMethod, setPaymentMethod] = useState("cartao");

  return (
    <>
      <Header />
      <div className="checkout-container">
          <main className="checkout-main">
            <h1 className="checkout-title">Finalizar Compra</h1>
            <section className="checkout-section">
                <div className="checkout-form">

                <h2 className="checkout-subtitle" style={{marginTop: 32}}>Método de Pagamento</h2>
                <div className="checkout-payment-methods">
                  <label className="checkout-radio">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === "cartao"}
                      onChange={() => setPaymentMethod("cartao")}
                    />
                    <span>Cartão de crédito ou débito</span>
                    <span className="checkout-payment-icons">
                      <img src="/visa.png" alt="Visa" height={18} />
                      <img src="/mastercard.png" alt="Mastercard" height={18} />
                    </span>
                  </label>
                  <label className="checkout-radio">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === "pix"}
                      onChange={() => setPaymentMethod("pix")}
                    />
                    <span>Pix</span>
                    <span className="checkout-payment-icons">
                      <img src="/logopix.png" alt="Pix" height={18} />
                    </span>
                  </label>
                  <label className="checkout-radio">
                    <input
                      type="radio"
                      name="payment"
                      checked={paymentMethod === "boleto"}
                      onChange={() => setPaymentMethod("boleto")}
                    />
                    <span>Boleto</span>
                  </label>
                </div>
                {/* Campos dinâmicos conforme método de pagamento */}
                {paymentMethod === "cartao" && (
                  <div className="checkout-payment-fields">
                    <input className="checkout-input" type="text" placeholder="Nome no cartão" />
                    <input className="checkout-input" type="text" placeholder="Número do cartão" maxLength={19} />
                    <div className="checkout-payment-fields-row">
                      <input className="checkout-input" type="text" placeholder="Validade (MM/AA)" maxLength={5} />
                      <input className="checkout-input" type="text" placeholder="CVV" maxLength={4} />
                    </div>
                  </div>
                )}
                {(paymentMethod === "pix" || paymentMethod === "boleto") && (
                  <div className="checkout-payment-fields">
                    <input className="checkout-input" type="text" placeholder="Nome completo" />
                    <input className="checkout-input" type="text" placeholder="CPF" maxLength={14} />
                  </div>
                )}
            </div>


              
              <div className="checkout-form">
                <h2 className="checkout-subtitle">Endereço de Entrega</h2>
                <input className="checkout-input" type="text" placeholder="Rua, número, bairro" />
                <input className="checkout-input" type="text" placeholder="Cidade" />
                <input className="checkout-input" type="text" placeholder="CEP" />
                <input className="checkout-input" type="text" placeholder="Complemento (opcional)" />
                
            </div>

            <div className="checkout-summary">
                <h2 className="checkout-subtitle">Resumo do Pedido</h2>
                {cart.length === 0 ? (
                  <p className="checkout-empty">Seu carrinho está vazio.</p>
                ) : (
                  <ul className="checkout-list">
                    {cart.map((item) => (
                      <li key={item.id} className="checkout-item">
                        <img src={item.foto} alt={item.nome} className="checkout-item-img" />
                        <div className="checkout-item-info">
                          <span className="checkout-item-nome">{item.nome}</span>
                          <span className="checkout-item-quantidade">x{item.quantidade}</span>
                        </div>
                        <span className="checkout-item-preco">R$ {(item.preco * item.quantidade).toFixed(2)}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="checkout-total-row">
                  <span>Total:</span>
                  <span className="checkout-total">R$ {total.toFixed(2)}</span>
                </div>
                                <button className="checkout-btn">Finalizar Pedido</button>

              </div>
            
            </section>
          </main>
      </div>
    </>
  );
}
