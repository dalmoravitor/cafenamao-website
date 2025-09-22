import { Header } from "@/components/Header";
import Image from "next/image";
import "./sustentabilidade.css";

export default function Sustentabilidade() {
  return (
    <div className="sustentabilidade-container">
      <Header />
      <main className="sustentabilidade-main">
        <h1 className="sustentabilidade-title">
          AÇÕES NO <span className="presente">PRESENTE</span> NA<br />
          GARANTIA DE UM <span className="futuro">FUTURO</span>
        </h1>
        <section className="sustentabilidade-section">
          <div className="sustentabilidade-text-block">
            <p className="sustentabilidade-text">
              CADA DETALHE DOS NOSSOS PRODUTOS NASCE DO CUIDADO COM O MUNDO: O COPO, O FILTRO E O SUPORTE — TODOS DE PAPEL.<br />
              A TAMPA, DE PLÁSTICO RECICLADO, VEM DAS MESMAS CAFETERIAS ONDE RECOLHEMOS TAMBÉM A BORRA QUE GANHA NOVA VIDA EM NOSSA FÁBRICA.
            </p>
            <div className="sustentabilidade-img sustentabilidade-img1">
              <Image src="/img1.png" alt="Borra de café" width={220} height={120} />
            </div>
          </div>
          <div className="sustentabilidade-text-block">
            <div className="sustentabilidade-img sustentabilidade-img2">
              <Image src="/img2.png" alt="Café na plantação" width={220} height={120} />
            </div>
            <p className="sustentabilidade-text">
              NOSSOS CAFÉS VÊM DE PRODUTORES QUE CULTIVAM DE FORMA SUSTENTÁVEL: USAM SISTEMAS AGROFLORESTAIS, TRATAM E REAPROVEITAM A ÁGUA, TRANSFORMAM RESÍDUOS EM ADUBO ORGÂNICO E CONTROLAM PRAGAS COM MÉTODOS NATURAIS.
            </p>
          </div>
          <p className="sustentabilidade-text">
            ALÉM DISSO, VALORIZAM O TRABALHO JUSTO E INVESTEM NAS COMUNIDADES LOCAIS. TRABALHAR COM ESSES PRODUTORES SIGNIFICA OFERECER CAFÉS DE QUALIDADE E APOIAR UM MODELO QUE PRESERVA A NATUREZA E AS PESSOAS.
          </p>
          <p className="sustentabilidade-text">
            NOSSAS CAIXAS GUARDAM O CAFÉ EM SACOS DE PAPEL COM FECHO ZIP, E JUNTO DELAS VAI SEMPRE UM AGRADECIMENTO EM PAPEL SEMENTE — MANJERICÃO, ALECRIM, CENOURA.
          </p>
        </section>
        <div className="sustentabilidade-img sustentabilidade-img3">
          <Image src="/img3.png" alt="Muda sendo regada" width={600} height={180} />
        </div>
        <blockquote className="sustentabilidade-quote">
          &quot;DO CAFÉ AO FUTURO, ESPALHANDO RAÍZES QUE TRANSFORMAM.&quot;
        </blockquote>
      </main>
      <footer className="sustentabilidade-footer">
        <div className="footer-grid">
          <div>
            <h2>CAFÉ NA MÃO</h2>
          </div>
          <div>
            <h3>Serviços</h3>
            <ul>
              <li>Loja</li>
              <li>Peça antecipado</li>
              <li>Cardápio</li>
            </ul>
          </div>
          <div>
            <h3>Sobre nós</h3>
            <ul>
              <li>Encontre uma loja</li>
              <li>Sobre nós</li>
              <li>Nossa história</li>
            </ul>
          </div>
          <div>
            <h3>Informações</h3>
            <ul>
              <li>Planos e preços</li>
              <li>Trabalhe conosco</li>
            </ul>
          </div>
          <div>
            <h3>Redes Sociais</h3>
            <ul>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
