"use client";

import Link from 'next/link';
import { FiSearch, FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';
import React, { useState, useEffect } from "react";
import './header.css';
import {CardProduto} from "../components/CardProduto"; // ajuste o caminho se necessário

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
  const [busca, setBusca] = useState("");

  const produtosFiltrados = produtosMock.filter(produto =>
    produto.nome.toLowerCase().includes(busca.toLowerCase())
  );

  useEffect(() => {
    if (modalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    // Limpa ao desmontar
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

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
    </>
  );
}