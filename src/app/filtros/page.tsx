import { Header } from "@/components/Header";
import './index.css'
import Link from "next/dist/client/link";

export default function CoposPage() {
    return (
        <div>
            <Header />
            <section className="heroSection" style={{ position: "relative" }}>
              
              <div style={{ position: "relative", zIndex: 1 }}>
                <p className="subtituloHero">EXPERIMENTE NOSSOS</p>
                <h1>FILTROS DE CAFÉ</h1>
                <p className="subtituloHero">que facilitam a preparação de forma sustentável</p>
              </div>
            </section>

            <section className="productSection">

                <img src="/coffeeDecoration.png" style={{ margin: '20px', width: '110px', rotate: '180deg', position: 'absolute', top: "130%", left: '0%' }} />
                <img className="productSectionImg" src="/filtro1.png" alt="" />
                    <div className="productSectionTextBox">
                        <h2 className="productSectionTitle">Suporte filtro de papel  <span className="productTitleVolume">102</span></h2>
                        <p className="productSectionDescription">Feito com borra de café reutilizada, este suporte sustentável foi desenvolvido especialmente para filtros de papel tamanho 102. Ele não acompanha o filtro, sendo apenas o suporte, ideal para preparar um café fresco de forma prática, consciente e com estilo.</p>
                        <Link style={{ width: '100%' }} href="/produto/3">
                          <button className="productSectionButton">Ver produto</button>
                        </Link>
                    </div>


                    
            </section>

             <section className="productSection inverted">

                    <img src="/coffeeDecoration.png" style={{margin: '20px', width: '120px', position: 'absolute', top: "70%", right: '0%' }} />
                                        <img src="/coffeeDecoration.png" style={{margin: '20px', width: '120px', position: 'absolute', top: "190%", right: '0%' }} />


                    <div className="productSectionTextBox">
                        <h2 className="productSectionTitle">Filtro de café feito de alumínio </h2>
                        <p className="productSectionDescription">Durável, fácil de lavar e sem necessidade de filtros de papel. Preserva o sabor encorpado do café e ajuda a reduzir o lixo, tornando sua rotina mais prática e sustentável.</p>
                        <Link style={{ width: '100%' }} href="/produto/8">
                          <button className="productSectionButton">Ver produto</button>
                        </Link>
                    </div>

                    <img className="productSectionImg" src="/filtro2.png" alt="" />

                    
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