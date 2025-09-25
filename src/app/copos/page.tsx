import { Header } from "@/components/Header";
import './index.css'

import Link from "next/link";


export default function CoposPage() {
  return (
    <div>
      <Header />
      <section className="heroSection">
        <img style={{ position: 'absolute', opacity: 0.2, top: "10%", left: "0%", width: '40%', rotate: '10deg', overflowX: 'hidden' }} src="/expresso.png" alt="" />
        <img style={{ position: 'absolute', opacity: 0.2, top: "0%", left: "50%", width: '60%', rotate: '-10deg', overflowX: 'hidden' }} src="/copoFC.png" alt="" />
        <div>
          <p className="subtituloHero">CONHEÇA NOSSOS KITS DE CAFÉ</p>
          <h1>KITS DE 6 CAFÉS</h1>
          <p className="subtituloHero">MAIS ECONOMIA E SABOR NA SUA ROTINA</p>
        </div>
      </section>


      {/* Kit Frutas Cítricas */}
      <section className="productSection inverted">
        <img src="/coffeeDecoration.png" style={{ margin: '20px', width: '120px', position: 'absolute', top: "100%", right: '0%' }} />
        <img src="/coffeeDecoration.png" style={{ margin: '20px', width: '120px', position: 'absolute', top: "300%", right: '0%' }} />
        <div className="productSectionTextBox">
          <h2 className="productSectionTitle">Kit Frutas Cítricas (6 cafés)</h2>
          <p className="productSectionDescription">Kit com 6 cafés Frutas Cítricas. Refresque seu dia com notas cítricas e muita leveza.</p>
          <Link style={{ width: '100%' }} href="/produto/4">
            <button className="productSectionButton">Ver produto</button>
          </Link>
        </div>
        <img className="productSectionImg" src="/copoFC.png" alt="Kit Frutas Cítricas" />
      </section>

      {/* Kit Cacau */}
      <section className="productSection">
        <img className="productSectionImg" src="/copoCacau.png" alt="Kit Cacau" />
        <div className="productSectionTextBox">
          <h2 className="productSectionTitle">Kit Cacau (6 cafés)</h2>
          <p className="productSectionDescription">Kit com 6 cafés Cacau. A intensidade do cacau em cada gole, para momentos únicos.</p>
          <Link style={{ width: '100%' }} href="/produto/5">
            <button className="productSectionButton">Ver produto</button>
          </Link>
        </div>
      </section>

      {/* Kit Expresso */}
      <section className="productSection inverted">
        <div className="productSectionTextBox">
          <h2 className="productSectionTitle">Kit Expresso (6 cafés)</h2>
          <p className="productSectionDescription">Kit com 6 cafés Expresso. Praticidade e energia em um só gole, onde você estiver.</p>
          <Link style={{ width: '100%' }} href="/produto/2">
            <button className="productSectionButton">Ver produto</button>
          </Link>
        </div>
        <img style={{ width: '400px', rotate: '10deg', height: 'auto' }} className="productSectionImg" src="/expresso.png" alt="Kit Expresso" />
      </section>

      {/* Kit Misto */}
      <section className="productSection">
        <img className="productSectionImg" src="/kitMisto.png" alt="Kit Misto" />
        <div className="productSectionTextBox">
          <h2 className="productSectionTitle">Kit Misto (6 cafés)</h2>
          <p className="productSectionDescription">Kit com 2 Caramelo, 2 Frutas Cítricas e 2 Cacau. O melhor de cada sabor em um só kit!</p>
          <Link style={{ width: '100%' }} href="/produto/9">
            <button className="productSectionButton">Ver produto</button>
          </Link>
        </div>
      </section>

      {/* ...existing code... */}
      <footer className="bg-1b1a1a text-white py-4 border-t border-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Logo */}
          <div>
            <h2 className="font-serif text-xl font-bold mb-4">CAFÉ NA MÃO</h2>
          </div>
          {/* Serviços */}
          <div>
            <h3 className="text-sm font-serif font-semibold mb-4">SERVIÇOS</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#">Loja</a></li>
              <li><a href="#">Peça antecipado</a></li>
              <li><a href="#">Cardápio</a></li>
            </ul>
          </div>
          {/* Sobre nós */}
          <div>
            <h3 className="text-sm font-serif font-semibold mb-4">SOBRE NÓS</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#">Encontre uma loja</a></li>
              <li><a href="#">Sobre nós</a></li>
              <li><a href="#">Nossa história</a></li>
            </ul>
          </div>
          {/* Informações */}
          <div>
            <h3 className="text-sm font-serif font-semibold mb-4">INFORMAÇÕES</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Planos e preços</li>
              <li>Trabalhe conosco</li>
            </ul>
          </div>
          {/* Redes Sociais */}
          <div>
            <h3 className="text-sm font-serif font-semibold mb-4">REDES SOCIAIS</h3>
            <a href="#" aria-label="Instagram" className="text-gray-300 hover:text-white">
              <svg xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 24 24"
                strokeWidth="1.5" stroke="currentColor"
                className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M7.5 2.25h9A5.25 5.25 0 0 1 21.75 7.5v9a5.25 5.25 0 0 1-5.25 5.25h-9A5.25 5.25 0 0 1 2.25 16.5v-9A5.25 5.25 0 0 1 7.5 2.25z" />
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M15.75 11.25a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0z" />
                <path strokeLinecap="round" strokeLinejoin="round"
                  d="M17.25 6.75h.008v.008h-.008V6.75z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}