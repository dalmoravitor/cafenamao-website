"use client";

import Link from 'next/link';
import { FiSearch, FiShoppingCart, FiMenu, FiX , FiCoffee} from 'react-icons/fi';
import { FaMugHot, FaCoffee } from 'react-icons/fa';
import produtosData from '../data/produtos.json';
import '../components/rewards-modal.css';
import React, { useState, useEffect } from "react";
import './header.css';
import {CardProduto} from "../components/CardProduto"; // ajuste o caminho se necessário
import { BiCoffeeTogo } from 'react-icons/bi';

const produtosMock = [
  { id: 1, nome: "Café Caramelo" },
  { id: 2, nome: "Expresso" },
  { id: 3, nome: "Filtro 102" },
  { id: 4, nome: "Copo Térmico" },
  { id: 5, nome: "Café Moído" },
  { id: 6, nome: "Café em Grãos" },
  { id: 7, nome: "Café Descafeinado" },
  { id: 8, nome: "Café Especial" },
  // ...adicione todos os produtos
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [rewardsOpen, setRewardsOpen] = useState(false);
  const [busca, setBusca] = useState("");

  const produtosFiltrados = produtosMock.filter(produto =>
    produto.nome.toLowerCase().includes(busca.toLowerCase())
  );

  useEffect(() => {
    if (modalOpen || rewardsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalOpen, rewardsOpen]);

  // Dados de recompensas
  const copinhos = 1100;
  // Produtos e metas de troca (exemplo)
  const produtosRecompensa = [
    { ...produtosData[0], meta: 800 },
    { ...produtosData[1], meta: 1200 },
    { ...produtosData[2], meta: 600 },
    { ...produtosData[3], meta: 2000 },
  ];

  return (
    <>
      <header className="header-container">
        <Link className="logo-link" href="/home">
          <img className="logo-img" src="/logo.png" alt="Logo" />
          <span className="logo-text">café na mão</span>
        </Link>

        {/* Links do meio - desktop */}
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <Link className="link-hover" href="/cafes">Cafés</Link>
          <Link className="link-hover" href="/copos">Copos</Link>
          <Link className="link-hover" href="/filtros">Filtros</Link>
          <Link className="link-hover" href="/conta">Conta</Link>
        </nav>

        {/* Ícones à direita */}
        <div className="header-icons">
          {/* Ícone de recompensas */}
          <button className="icon-link" style={{background: 'none', border: 'none', marginRight: 6, cursor: 'pointer'}} onClick={() => setRewardsOpen(true)} title="Recompensas">
            <BiCoffeeTogo color="#FFD600" size={22} />
          </button>
          <Link className="icon-link" href="/sustentabilidade">
            <img style={{width: 20}} src="/sustentabilidade.png" alt="" />
          </Link>
          <Link className="icon-link" href="/cart">
            <FiShoppingCart color="#1b1a1a" size={20} />
          </Link>
          <button className="icon-link" onClick={() => setModalOpen(true)}>
            <FiSearch color="#1b1a1a" size={20} />
          </button>
          {/* Menu sanduíche - mobile */}
          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX size={28} color="#fff" /> : <FiMenu size={28} color="#fff" />}
          </button>
        </div>

        {/* Menu sanduíche - mobile overlay */}
        {menuOpen && (
          <div className="mobile-menu">
            <Link className="mobile-link" href="/cafes" onClick={() => setMenuOpen(false)}>Cafés</Link>
            <Link className="mobile-link" href="/copos" onClick={() => setMenuOpen(false)}>Copos</Link>
            <Link className="mobile-link" href="/filtros" onClick={() => setMenuOpen(false)}>Filtros</Link>
            <Link className="mobile-link" href="/conta" onClick={() => setMenuOpen(false)}>Conta</Link>
          </div>
        )}
      </header>

      {/* Modal de busca */}
      {modalOpen && (
        <div className="modal-overlay" onClick={() => setModalOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <input
              type="text"
              placeholder="Pesquisar produtos..."
              value={busca}
              onChange={e => setBusca(e.target.value)}
              autoFocus
            />
            <div className="modal-produtos-list">
              {produtosFiltrados.map(produto => (
                <CardProduto key={produto.id} id={produto.id} />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Modal de recompensas */}
      {rewardsOpen && (
        <div className="rewards-modal-overlay" onClick={() => setRewardsOpen(false)}>
          <div className="rewards-modal-content" onClick={e => e.stopPropagation()}>
            <button className="rewards-modal-close" onClick={() => setRewardsOpen(false)} title="Fechar" aria-label="Fechar">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="5" y1="5" x2="15" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <line x1="15" y1="5" x2="5" y2="15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            <div className="rewards-modal-header">
              <h2 style={{display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, flexWrap: 'nowrap'}}>
                Troque seus <span style={{display: 'inline-flex', alignItems: 'center'}}><BiCoffeeTogo /></span> por cafés de verdade!
              </h2>
              <div className="rewards-count">Você possui <b>{copinhos}</b> copinhos</div>
              <div className="rewards-persuade">Troque seus copinhos por produtos exclusivos! Quanto mais você compra, mais copinhos acumula.</div>
            </div>
            <div className="rewards-modal-products">
              {produtosRecompensa.map(produto => {
                const progresso = Math.min(100, Math.round((copinhos / produto.meta) * 100));
                return (
                  <div className="rewards-product" key={produto.id}>
                    <img className="rewards-product-img" src={produto.foto} alt={produto.nome} />
                    <div className="rewards-product-title">{produto.nome}</div>
                    <div className="rewards-progress-bar">
                      <div className="rewards-progress" style={{width: progresso + '%'}}></div>
                    </div>
                    <div style={{fontSize: '0.95rem', color: '#fff', marginBottom: 6}}>
                      Meta: {produto.meta} copinhos
                    </div>
                    <button className="rewards-product-btn" disabled={copinhos < produto.meta}>
                      Trocar por {produto.meta} copinhos
                    </button>
                  </div>
                );
              })}
            </div>
            {/* Mini tutorial */}
            <div className="rewards-tutorial">
              <h3>Como acumular copinhos?</h3>
              <ul>
                <li>• Faça compras de qualquer produto no site e ganhe copinhos proporcional ao valor.</li>
                <li>• Participe de promoções e eventos especiais para ganhar copinhos extras.</li>
                <li>• Indique amigos: cada amigo que comprar usando seu link gera copinhos para você.</li>
                <li>• Avalie produtos adquiridos e ganhe copinhos bônus.</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}