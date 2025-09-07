"use client";
import { Header } from "@/components/Header";
import React, { useState } from "react";

import Link from "next/link";
import "./home.css";

export default function Home() {
  const [videoSrc, setVideoSrc] = useState("/section1bgvideo.mp4");
  return (
    <div className="home-container">
      {/* Decorações */}
      <img className="home-decoration left" src="/coffeeDecoration.png" alt="" />
      <img className="home-decoration right" src="/coffeeDecoration.png" alt="" />
      <img className="home-decoration center" src="/coffeeDecoration.png" alt="" />

      <Header />

      {/* Hero Section */}
      <section className="home-hero">
        <video
          key={videoSrc}
          autoPlay
          loop={false}
          muted
          playsInline
          className="home-bg-video"
          src={videoSrc}
          onEnded={() =>
            setVideoSrc(
              videoSrc === "/section1bgvideo.mp4"
                ? "/section1bgvideo2.mp4"
                : "/section1bgvideo.mp4"
            )
          }
        >
          Seu navegador não suporta vídeo em background.
        </video>
        <div className="home-hero-content">
          <div className="home-hero-card">
            <h1 className="home-hero-title">
              Café que acompanha <br /> o seu ritmo <br />
              e a sua essência.
            </h1>
            <button className="botaoSection1">Veja nossos produtos</button>
          </div>
        </div>
      </section>

      {/* Produtos */}
      <section className="home-products">
        <h2 className="home-products-title">
          Confira alguns de nossos <br /> produtos!
        </h2>
        <div className="home-products-list">
          <Link className="productCard" href="/produto/1">
            <img src="/cafeCaramelo.png" alt="Café Caramelo" />
            <p>
              Café em grãos 100% arábica com notas de frutas cítricas
            </p>
          </Link>
          <Link className="productCard" href="/produto/2">
            <img src="/expresso.png" alt="Expresso" />
            <p>
              Copo de café sabor expresso sustentável e prático
            </p>
          </Link>
          <Link className="productCard" href="/produto/3">
            <img src="/filtro1.png" alt="Filtro 1" />
            <p>
              Suporte para filtro 102 Biodegradável, feito com borra de café.
            </p>
          </Link>
        </div>
      </section>

      {/* Avaliações */}
      <section className="home-reviews">
        <h2 className="home-reviews-title">
          Quem experimentou, gostou! ✨
        </h2>
        <div className="home-reviews-list">
          <div className="cardAvaliacao">
            <div className="cardAvaliacao-header">
              <img src="/estrelas.png" className="cardAvaliacao-stars" />
              <img src="/fabiana.png" className="cardAvaliacao-avatar" />
              <h3 className="cardAvaliacao-nome">Fabiana</h3>
            </div>
            <p className="cardAvaliacao-text">
              Simplesmente apaixonada pela proposta da loja! Além de cafés de ótima qualidade, os copos práticos tornam tudo ainda mais fácil no dia a dia corrido. É incrível poder ter um café saboroso, bem preparado e de forma sustentável em qualquer lugar. Experiência que une praticidade, sabor e consciência ambiental!
            </p>
          </div>
          <div className="cardAvaliacao">
            <div className="cardAvaliacao-header">
              <img src="/estrelas.png" className="cardAvaliacao-stars" />
              <img src="/samile.png" className="cardAvaliacao-avatar" />
              <h3 className="cardAvaliacao-nome">Samile</h3>
            </div>
            <p className="cardAvaliacao-text">
              Adorei! Café super saboroso e os copos são muito práticos. Agora consigo tomar meu café de qualidade mesmo na correria. Recomendo demais!
            </p>
          </div>
          <div className="cardAvaliacao">
            <div className="cardAvaliacao-header">
              <img src="/estrelas.png" className="cardAvaliacao-stars" />
              <img src="/vito.png" className="cardAvaliacao-avatar" />
              <h3 className="cardAvaliacao-nome">Vitor</h3>
            </div>
            <p className="cardAvaliacao-text">
              O café é realmente muito bom e os copos práticos ajudam bastante no dia a dia. Só achei que poderia ter mais opções de sabores e tamanhos de copo. Mesmo assim, vale muito a pena e certamente voltarei a comprar.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="home-footer">
  <div className="footer-content">
    <div className="footer-section">
      <h2>CAFÉ NA MÃO</h2>
    </div>
    <div className="footer-section">
      <h3>Serviços</h3>
      <ul>
        <li><a href="#">Shop</a></li>
        <li><a href="#">Order ahead</a></li>
        <li><a href="#">Menu</a></li>
      </ul>
    </div>
    <div className="footer-section">
      <h3>Sobre nós</h3>
      <ul>
        <li><a href="#">Find a location</a></li>
        <li><a href="#">About us</a></li>
        <li><a href="#">Our story</a></li>
      </ul>
    </div>
    <div className="footer-section">
      <h3>Informações</h3>
      <ul>
        <li><a href="#">Plans & pricing</a></li>
        <li><a href="#">Sell your products</a></li>
        <li><a href="#">Jobs</a></li>
      </ul>
    </div>
    <div className="footer-section">
      <h3>Redes Sociais</h3>
      <ul>
        <li><a href="#">Instagram</a></li>
        {/* Adicione outros links de redes sociais aqui */}
      </ul>
    </div>
  </div>
</footer>
    </div>
  );
}