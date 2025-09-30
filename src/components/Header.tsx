"use client";

import Link from 'next/link';
import { FiSearch, FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';
import { FaCoffee } from 'react-icons/fa';
import produtosData from '../data/produtos.json';
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
  const userCopinhos = 1100;

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

  return (
    <>
      <header className="header-container">
        <Link className="logo-link" href="/home">
          <img className="logo-img" src="/logo.png" alt="Logo" />
          <span className="logo-text">Café Na Mão</span>
        </Link>

        {/* Links do meio - desktop */}
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <Link className="link-hover" href="/cafes">Cafés</Link>
          <Link className="link-hover" href="/copos">Copos</Link>
          <Link className="link-hover" href="/filtros">Filtros</Link>
          <Link className="link-hover" href="/conta">Conta</Link>
          <Link className="link-hover coffee-plus-link" href="/coffee-plus">Coffee+</Link>
        </nav>

        {/* Ícones à direita */}
        <div className="header-icons">
          <Link className="icon-link" href="/sustentabilidade">
            <img style={{width: 20, height: 20}} src="/sustentabilidade.png" alt="Sustentabilidade" />
          </Link>
          <button className="icon-link" onClick={() => setRewardsOpen(true)} title="Recompensas">
            <BiCoffeeTogo color="#a86b2d" size={22} />
          </button>
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
      {/* Modal de Recompensas */}
      {rewardsOpen && (
        <div className="modal-overlay" style={{zIndex: 1000}} onClick={() => setRewardsOpen(false)}>
          <div className="modal-content rewards-modal" style={{ width: '90vh', overflowY: 'auto', maxHeight: '90vh', padding: '24px', margin: '0 30px'}} onClick={e => e.stopPropagation()}>
            <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8}}>
              <div style={{alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
                <BiCoffeeTogo style={{marginLeft: '48%'}} color="#FFB921" size={32} />

                <div style={{fontWeight: 700, fontSize: 30, fontFamily: 'serif', color: '#fff'}}>Você tem <span style={{color:'#FFB921'}}>{userCopinhos} copinhos!</span></div>
                <div style={{fontSize: 20, color: '#ccc'}}>Acumule copinhos comprando produtos e troque por recompensas exclusivas!</div>
              </div>
            </div>
            <hr style={{margin: '12px 0', borderColor: '#333'}} />

                <div className="minitutorial" style={{ maxWidth: 500, margin: '32px auto 24px', background: '#2a2a2a', borderRadius: 12, padding: 24, boxShadow: '0 2px 8px rgba(0,0,0,0.3)', border: '1px solid #444' }}>
            <h2 style={{ fontSize: 20, marginBottom: 12, color: '#FFB921', fontWeight: 700 }}>Como ganhar um produto grátis?</h2>
            <ol style={{ paddingLeft: 20, color: '#ccc', fontSize: 16, lineHeight: 1.7, listStyleType: 'number' }}>
              <li>Atinja a meta de copinhos comprando nossos cafés.</li>
              <li>Troque seus copinhos por qualquer produto disponível nesta página.</li>
              <li>Finalize a troca e aproveite seu produto grátis!</li>
            </ol>
          </div>
            <div className="rewards-cards-container" style={{ justifyContent: 'center', alignItems: 'center', alignSelf: 'center', display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: 24}}>
              {[
                {id: 2, meta: 2000},
                {id: 4, meta: 2000},
                {id: 5, meta: 2000},
                {id: 9, meta: 2000},
              ].map(({id, meta}) => {
                const prod = produtosData.find(p => p.id === id);
                const progresso = Math.min(100, Math.round((userCopinhos/meta)*100));
                return prod ? (

                  
                  <div key={id} style={{ height: '170px', width: '30%', color: '#fff', background: '#2a2a2a', borderRadius: 16, padding: 18, boxShadow: '0 4px 16px rgba(0,0,0,0.3)', border: '1px solid #444'}}>
                    <div style={{fontWeight: 600, fontSize: 17, marginBottom: 4, color: '#FFB921'}}>{prod.nome}</div>
                    <div style={{display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8}}>
                      <img src={prod.foto} alt={prod.nome} style={{width: 48, height: 48, borderRadius: 8, objectFit: 'cover', background: '#fff'}} />
                      <div style={{flex: 1}}>
                        <div style={{height: 10, background: '#444', borderRadius: 6, overflow: 'hidden', marginBottom: 4}}>
                          <div style={{width: progresso+'%', height: '100%', background: progresso===100 ? '#FFB921' : '#666', transition: 'width 0.4s'}}></div>
                        </div>
                        <div style={{fontSize: 13, color: '#ccc'}}>{progresso}% para trocar</div>
                      </div>
                    </div>
                    <button style={{background: '#FFB921', color: '#000', border: 'none', borderRadius: 8, padding: '8px 18px', fontWeight: 600, fontSize: 15, cursor: progresso===100 ? 'pointer' : 'not-allowed', opacity: progresso===100 ? 1 : 0.6}} disabled={progresso!==100}>
                      Trocar por {meta} copinhos
                    </button>
                  </div>
                ) : null;
              })}
            </div>
            
            <button style={{marginTop: 24, background: 'none', border: 'none', color: '#FFB921', fontWeight: 600, fontSize: 16, cursor: 'pointer'}} onClick={() => setRewardsOpen(false)}>Fechar</button>
          </div>
        </div>
      )}

        {/* Menu sanduíche - mobile overlay */}
        {menuOpen && (
          <div className="mobile-menu">
            <Link className="mobile-link" href="/cafes" onClick={() => setMenuOpen(false)}>Cafés</Link>
            <Link className="mobile-link" href="/copos" onClick={() => setMenuOpen(false)}>Copos</Link>
            <Link className="mobile-link" href="/filtros" onClick={() => setMenuOpen(false)}>Filtros</Link>
            <Link className="mobile-link" href="/conta" onClick={() => setMenuOpen(false)}>Conta</Link>
            <Link className="mobile-link coffee-plus-mobile" href="/coffee-plus" onClick={() => setMenuOpen(false)}>Coffee+</Link>
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