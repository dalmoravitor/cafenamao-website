"use client";
import { Header } from "@/components/Header";
import './coffee-plus.css';

export default function CoffeePlusPage() {
  return (
    <div className="coffee-plus-container">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">EXCLUSIVO</div>
          <h1 className="hero-title">
            Coffee<span className="plus-symbol">+</span>
          </h1>
          <p className="hero-subtitle">
            O plano de assinatura que revoluciona sua experiência com café
          </p>
          <p className="hero-description">
            Café premium entregue na sua porta todo mês. Sem preocupações, sem faltas, só o melhor café na sua rotina.
          </p>
          <div className="hero-buttons">
            <button className="cta-button primary">
              Assinar por R$ 49,90/mês
            </button>
            <button className="cta-button secondary">
              Conhecer os planos
            </button>
          </div>
        </div>
        <div className="hero-image">
          <img src="/cafeCacau.png" alt="Café Premium Coffee+" className="hero-product floating" />
        </div>
      </section>

      {/* Benefícios */}
      <section className="benefits-section">
        <div className="container">
          <h2 className="section-title">Por que escolher o Coffee+?</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">📦</div>
              <h3>Entrega Mensal Automática</h3>
              <p>Receba seu café premium todo mês sem precisar se preocupar. Nós cuidamos de tudo para você.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">☕</div>
              <h3>Cafés Premium Selecionados</h3>
              <p>Apenas grãos de alta qualidade, torrados na medida certa e com notas sensoriais únicas.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">💰</div>
              <h3>Economia Garantida</h3>
              <p>Até 25% de desconto comparado às compras avulsas. Quanto mais você consome, mais economiza.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🎯</div>
              <h3>Personalização Total</h3>
              <p>Escolha seus sabores favoritos e ajuste a frequência conforme sua necessidade.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🌱</div>
              <h3>Sustentabilidade</h3>
              <p>Embalagens eco-friendly e parcerias com produtores que respeitam o meio ambiente e práticas justas.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">⚡</div>
              <h3>Sem Compromisso</h3>
              <p>Pause, altere ou cancele sua assinatura a qualquer momento. Total flexibilidade para sua rotina.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="how-it-works-section">
        <div className="container">
          <h2 className="section-title">Como funciona?</h2>
          <div className="steps-container">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Escolha seu plano</h3>
              <p>Selecione a quantidade de café ideal para seu consumo mensal</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Personalize sua assinatura</h3>
              <p>Defina seus sabores favoritos e a data de entrega preferida</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Receba em casa</h3>
              <p>Seu café chega automaticamente todo mês, sem taxa de entrega</p>
            </div>
          </div>
        </div>
      </section>

      {/* Planos */}
      <section className="plans-section">
        <div className="container">
          <h2 className="section-title">Escolha seu plano ideal</h2>
          <div className="plans-grid">
            <div className="plan-card">
              <div className="plan-header">
                <h3>Coffee+ Básico</h3>
                <div className="plan-price">
                  <span className="currency">R$</span>
                  <span className="amount">49</span>
                  <span className="period">,90/mês</span>
                </div>
              </div>
              <ul className="plan-features">
                <li>✓ 4 cafés premium por mês</li>
                <li>✓ Variedade de sabores</li>
                <li>✓ Frete grátis</li>
                <li>✓ Flexibilidade para pausar</li>
              </ul>
              <button className="plan-button">Escolher plano</button>
            </div>

            <div className="plan-card featured">
              <div className="popular-badge">MAIS POPULAR</div>
              <div className="plan-header">
                <h3>Coffee+ Premium</h3>
                <div className="plan-price">
                  <span className="currency">R$</span>
                  <span className="amount">89</span>
                  <span className="period">,90/mês</span>
                </div>
              </div>
              <ul className="plan-features">
                <li>✓ 8 cafés premium por mês</li>
                <li>✓ Acesso a sabores exclusivos</li>
                <li>✓ Frete grátis</li>
                <li>✓ Suporte prioritário</li>
                <li>✓ Desconto em produtos extras</li>
              </ul>
              <button className="plan-button featured">Escolher plano</button>
            </div>

            <div className="plan-card">
              <div className="plan-header">
                <h3>Coffee+ Família</h3>
                <div className="plan-price">
                  <span className="currency">R$</span>
                  <span className="amount">129</span>
                  <span className="period">,90/mês</span>
                </div>
              </div>
              <ul className="plan-features">
                <li>✓ 12 cafés premium por mês</li>
                <li>✓ Mix completo de sabores</li>
                <li>✓ Frete grátis</li>
                <li>✓ Brinde mensal</li>
                <li>✓ Acesso antecipado a novidades</li>
              </ul>
              <button className="plan-button">Escolher plano</button>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="testimonials-section">
        <div className="container">
          <h2 className="section-title">O que nossos assinantes dizem</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">
                &quot;O Coffee+ mudou minha rotina completamente! Não preciso mais me preocupar em comprar café, e a qualidade é excepcional. O sabor Cacau é viciante!&quot;
              </p>
              <div className="testimonial-author">
                <img src="/fabiana.png" alt="Fabiana" className="author-photo" />
                <div>
                  <h4>Fabiana Silva</h4>
                  <span>Assinante há 8 meses</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">
                &quot;Economia real! Calculei e estou gastando 30% menos com café desde que assinei. Além disso, a variedade me fez descobrir sabores que nem sabia que existiam.&quot;
              </p>
              <div className="testimonial-author">
                <img src="/vito.png" alt="Vitor" className="author-photo" />
                <div>
                  <h4>Vitor Roosevelt</h4>
                  <span>Assinante há 1 ano</span>
                </div>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="testimonial-rating">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">
                &quot;Perfeito para quem tem uma rotina corrida como eu. O café sempre chega no dia certo, com embalagem impecável. Recomendo para todos os coffee lovers!&quot;
              </p>
              <div className="testimonial-author">
                <img src="/samile.png" alt="Samile" className="author-photo" />
                <div>
                  <h4>Samile Costa</h4>
                  <span>Assinante há 6 meses</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section">
        <div className="container">
          <h2 className="section-title">Perguntas Frequentes</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h3>Posso cancelar a qualquer momento?</h3>
              <p>Sim! Você pode cancelar ou pausar sua assinatura a qualquer momento, sem taxas ou burocracias.</p>
            </div>
            <div className="faq-item">
              <h3>Como escolho os sabores?</h3>
              <p>Após a assinatura, você acessa seu painel personalizado onde pode selecionar seus sabores favoritos para cada entrega.</p>
            </div>
            <div className="faq-item">
              <h3>E se eu não gostar de algum sabor?</h3>
              <p>Oferecemos garantia de satisfação. Se não gostar, trocamos por outro sabor de sua escolha na próxima entrega.</p>
            </div>
            <div className="faq-item">
              <h3>Qual a validade dos cafés?</h3>
              <p>Nossos cafés são torrados sob demanda e têm validade de 12 meses. Você sempre recebe produtos fresquinhos!</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="final-cta-section">
        <div className="container">
          <div className="final-cta-content">
            <h2>Pronto para revolucionar sua experiência com café?</h2>
            <p>Junte-se a mais de 5.000 assinantes satisfeitos e garante seu café premium todo mês.</p>
            <button className="cta-button primary large">
              Começar minha assinatura
            </button>
            <p className="guarantee-text">💳 Primeiro mês com desconto de 20% • 🔒 Cancele quando quiser</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Coffee+</h3>
              <p>O futuro do café é por assinatura.</p>
            </div>
            <div className="footer-section">
              <h4>Suporte</h4>
              <ul>
                <li><a href="#">Central de ajuda</a></li>
                <li><a href="#">Contato</a></li>
                <li><a href="#">WhatsApp</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Empresa</h4>
              <ul>
                <li><a href="#">Sobre nós</a></li>
                <li><a href="#">Trabalhe conosco</a></li>
                <li><a href="#">Imprensa</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}