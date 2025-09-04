"use client";

import Link from 'next/link';
import { FiSearch, FiShoppingCart, FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';
import './header.css';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
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
        <Link className="icon-link" href="/cart">
          <FiShoppingCart color="#1b1a1a" size={20} />
        </Link>
        <Link className="icon-link" href="/search">
          <FiSearch color="#1b1a1a" size={20} />
        </Link>
        {/* Menu sanduíche - mobile */}
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX size={28} color="#fff" /> : <FiMenu size={28} color="#fff" />}
        </button>
      </div>

      {/* Menu sanduíche - mobile overlay */}
      {menuOpen && (
        <div className="mobile-menu">
          <Link className="mobile-link" href="/" onClick={() => setMenuOpen(false)}>Cafés</Link>
          <Link className="mobile-link" href="/" onClick={() => setMenuOpen(false)}>Copos</Link>
          <Link className="mobile-link" href="/" onClick={() => setMenuOpen(false)}>Filtros</Link>
          <Link className="mobile-link" href="/" onClick={() => setMenuOpen(false)}>Conta</Link>
        </div>
      )}
    </header>
  );
}