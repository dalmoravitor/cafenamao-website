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
            <h3>PRIVACY</h3>
            <ul>
              <li>Termos de uso</li>
              <li>Política de privacidade</li>
              <li>Cookies</li>
            </ul>
          </div>
          <div>
            <h3>SERVIÇOS</h3>
            <ul>
              <li>Shop</li>
              <li>Order ahead</li>
              <li>Menu</li>
            </ul>
          </div>
          <div>
            <h3>SOBRE NÓS</h3>
            <ul>
              <li>Find a location</li>
              <li>About us</li>
              <li>Our story</li>
            </ul>
          </div>
          <div>
            <h3>INFORMAÇÕES</h3>
            <ul>
              <li>Plans & pricing</li>
              <li>Sell your products</li>
              <li>Jobs</li>
            </ul>
          </div>
          <div>
            <h3>REDES SOCIAIS</h3>
            <span className="footer-social-icon">&#x1F4F7;</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
