"use client";


import { Header } from "@/components/Header";
import produtos from "@/data/produtos.json";
import "./produto-detalhe.css";
import { useParams } from "next/navigation";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "@/app/CartContext";
import { FaShoppingCart } from "react-icons/fa";

export default function ProdutoDetalhePage() {
  const router = useRouter();
  const params = useParams();
  const id = Number(params?.id);
  const produto = produtos.find((p) => p.id === id);

  const [quantidade, setQuantidade] = useState(1);
  const [adicionado, setAdicionado] = useState(false);
  const { addToCart } = useCart();

  const handleAdicionar = () => {
    if (!produto) return;
    addToCart({
      id: produto.id,
      nome: produto.nome,
      foto: produto.foto,
      preco: produto.preco,
      quantidade: quantidade,
    });
    setAdicionado(true);
    setTimeout(() => setAdicionado(false), 1500);
  };

  const handleComprar = () => {
    router.push("/checkout");
  };

  if (!produto) {
    return (
      <div className="container">
        <Header />
        <div className="produto-detalhe-container">
            <main className="produto-detalhe-main">
              <h2 style={{ color: '#fff' }}>Produto não encontrado.</h2>
            </main>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <Header />
      <div className="produto-detalhe-container">
        <main className="produto-detalhe-main">
          <img
            className="produto-detalhe-img"
            src={produto.foto}
            alt={produto.nome}
          />
          <div className="produto-detalhe-info">
            <h1 className="produto-detalhe-nome">{produto.nome}</h1>
            <div className="produto-detalhe-estrelas">
              {Array(5).fill(0).map((_, i) => (
                <span key={i} style={{color: '#fff', fontSize: 22, marginRight: 2}}>★</span>
              ))}
            </div>
            <div className="produto-detalhe-descricao" style={{fontStyle: 'italic', fontSize: '1rem', color: '#ccc', margin: '12px 0 18px 0'}}>
              {produto.frase ? `“${produto.frase}”` : null}
            </div>
            <div className="produto-detalhe-preco" style={{fontSize: '2.2rem', color: '#FFB921', fontFamily: 'serif', fontWeight: 700, margin: '0 0 18px 0'}}>
              R$ {produto.preco?.toFixed(2)}
            </div>
            <div className="produto-detalhe-quantidade">
              <span style={{fontSize: '1.1rem', marginRight: 8}}>Quantidade:</span>
              <button
                className="produto-detalhe-quantidade-btn"
                onClick={() => setQuantidade((q) => Math.max(0, q - 1))}
                aria-label="Diminuir quantidade"
              >−</button>
              <span style={{ minWidth: 24, textAlign: 'center', fontSize: 18 }}>{quantidade}</span>
              <button
                className="produto-detalhe-quantidade-btn produto-detalhe-quantidade-btn-mais"
                onClick={() => setQuantidade((q) => q + 1)}
                aria-label="Aumentar quantidade"
              >+</button>
            </div>
            <div className="produto-detalhe-actions">
              <button
                className="produto-detalhe-btn produto-detalhe-btn-amarelo"
                onClick={handleComprar}
              >
                Adquirir
              </button>
              <button
                className="produto-detalhe-btn produto-detalhe-btn-carrinho"
                onClick={handleAdicionar}
                disabled={adicionado}
              >
                Carrinho <FaShoppingCart style={{marginLeft: 8, fontSize: 18}} />
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
