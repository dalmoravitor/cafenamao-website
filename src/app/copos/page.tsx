import { Header } from "@/components/Header";
import './index.css'

import Link from "next/link";


export default function CoposPage() {
    return (
        <div>
            <Header />
            <section className="heroSection" >
                <img style={{ position: 'absolute', opacity: 0.2, top: "10%", left: "0%", width: '40%', rotate: '10deg', overflowX: 'hidden' }} src="/expresso.png" alt="" />
                <img style={{ position: 'absolute', opacity: 0.2, top: "0%", left: "50%", width: '60%', rotate: '-10deg', overflowX: 'hidden' }} src="/copoFC.png" alt="" />
                <div>
                    <p className="subtituloHero">EXPERIMENTE NOSSOS SABOROSOS</p>
                    <h1>COPOS DE CAFÉ</h1>
                    <p className="subtituloHero">QUE ACOMPANHAM SUA ROTINA DIÁRIA</p>
                </div>
            </section>

            <section className="productSection">

                <img src="/coffeeDecoration.png" style={{ margin: '20px', width: '110px', position: 'absolute', top: "190%", left: '0%' }} />

        <img className="productSectionImg" src="/copoCacau.png" alt="" />
        <div className="productSectionTextBox">
          <h2 className="productSectionTitle">Copo Cacau <span className="productTitleVolume">180ml</span></h2>
          <p className="productSectionDescription">representa a união perfeita entre praticidade, qualidade e sabor. Desenvolvido para atender às necessidades do consumidor moderno, este copo inovador traz em seu interior um filtro integrado com café especialmente selecionado, enriquecido com notas marcantes de cacau.</p>
          <Link style={{ width: '100%' }} href="/produto/5">
            <button className="productSectionButton">Ver produto</button>
          </Link>
        </div>


                    
            </section>

             <section className="productSection inverted">

                    <img src="/coffeeDecoration.png" style={{margin: '20px', width: '120px', position: 'absolute', top: "100%", right: '0%' }} />
                                        <img src="/coffeeDecoration.png" style={{margin: '20px', width: '120px', position: 'absolute', top: "300%", right: '0%' }} />


                    <div className="productSectionTextBox">
                        <h2 className="productSectionTitle">Copo Frutas Cítricas <span className="productTitleVolume">180ml</span></h2>
                        <p className="productSectionDescription">A harmonização do café com notas de frutas cítricas resulta em uma bebida leve, vibrante e revigorante, ideal para quem deseja um sabor diferenciado sem abrir mão da qualidade.</p>
                        <Link style={{ width: '100%' }} href={`/produto/4`}>
                          <button className="productSectionButton">Ver produto</button>
                        </Link>
                    </div>

                    <img className="productSectionImg" src="/copoFC.png" alt="" />

                    
            </section>

            <section style={{marginBottom: '140px'}} className="productSection">


        <img style={{ width: '400px', rotate: '10deg', height: 'auto' }} className="productSectionImg" src="/expresso.png" alt="" />
        <div  className="productSectionTextBox">
          <h2 className="productSectionTitle">Copo Expresso <span className="productTitleVolume">180ml</span></h2>
          <p className="productSectionDescription">Prático e sofisticado, basta adicionar água quente para desfrutar de toda a tradição do verdadeiro expresso, agora ao alcance das suas mãos.</p>
          <Link style={{ width: '100%' }} href="/produto/2">
            <button className="productSectionButton">Ver produto</button>
          </Link>
        </div>
                    
            </section>

            <div style={{display: 'flex', justifyContent: 'center', gap: 16, margin: '32px 0'}}>
              <Link href="/cart" style={{width: '40%'}}><button className="productSectionButton" style={{width: '100%'}}>Ver carrinho</button></Link>
              <Link href="/checkout" style={{width: '40%'}}><button className="productSectionButton" style={{width: '100%'}}>Finalizar compra</button></Link>
            </div>
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
            <li><a href="#">Shop</a></li>
            <li><a href="#">Order ahead</a></li>
            <li><a href="#">Menu</a></li>
          </ul>
        </div>

        {/* Sobre nós */}
        <div>
          <h3 className="text-sm font-serif font-semibold mb-4">SOBRE NÓS</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="#">Find a location</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Our story</a></li>
          </ul>
        </div>

        {/* Informações */}
        <div>
          <h3 className="text-sm font-serif font-semibold mb-4">Informações</h3>
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