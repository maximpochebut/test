import { useState } from 'react'
import bortkevichImg from './assets/hero.png'
import './App.css'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [formSent, setFormSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSent(true)
  }

  return (
    <div className="app">

      {/* ── Navigation ── */}
      <nav className="nav">
        <div className="nav-container">
          <a href="#hero" className="nav-brand">✦ CULTURE_U</a>
          <button
            className={`nav-burger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Меню"
          >
            <span /><span /><span />
          </button>
          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            {[
              ['#about',         'Про проект'],
              ['#culture',       'Culture_U'],
              ['#partners',      'Партнери'],
              ['#info-partners', 'Інфопартнери'],
              ['#contact',       'Контакти'],
            ].map(([href, label]) => (
              <li key={href}>
                <a href={href} onClick={() => setMenuOpen(false)}>{label}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="hero" id="hero">
        <div className="hero-container">
          <div className="hero-text">
            <p className="hero-label">CULTURE U · КУЛЬТУРНИЙ ПРОЕКТ</p>
            <h1 className="hero-title">
              <em>Per Aspera<br />ad Astra</em>
            </h1>
            <div className="hero-rule" />
            <p className="hero-desc">
              Концерт № 3 Сергія Борткевича<br />
              Відроджений через 100 років
            </p>
            <p className="hero-location"><em>Харків · Відень · 2027</em></p>
            <div className="hero-badge">100 РОКІВ ПРЕМ'ЄРІ · 2027</div>
          </div>
          <div className="hero-portrait-wrap">
            <div className="hero-portrait-oval">
              <img src={bortkevichImg} alt="Сергій Борткевич" />
            </div>
            <p className="hero-portrait-caption">Сергій Борткевич · 1877–1952</p>
          </div>
        </div>
      </section>

      {/* ── About the Project ── */}
      <section className="section section-cream" id="about">
        <div className="container">

          {/* — Two-era headline — */}
          <h2 className="section-h italic centered">
            <em>Одна душа. Дві епохи. Один шлях.</em>
          </h2>
          <div className="rule-gold centered-rule" />

          {/* — Timeline — */}
          <div className="timeline">
            <div className="timeline-col">
              <p className="timeline-period">1920–1927</p>
              <h3 className="timeline-name">Сергій Борткевич</h3>
              <ul className="timeline-list">
                <li>Тікає з Харкова після революції — з валізою нот і $20</li>
                <li>Через Крим → Константинополь → Відень</li>
                <li>У Відні пише Концерт №3: «Per aspera ad astra»</li>
                <li>Прем'єра — 30 квітня 1927. Оркестр Wiener Symphoniker</li>
              </ul>
            </div>
            <div className="timeline-center">
              <div className="timeline-vline" />
              <div className="timeline-circle">100<br />років</div>
              <div className="timeline-vline" />
            </div>
            <div className="timeline-col">
              <p className="timeline-period">2022–2027</p>
              <h3 className="timeline-name">Молода піаністка з Харкова</h3>
              <ul className="timeline-list">
                <li>Покидає Україну через повномасштабну війну</li>
                <li>Навчається в Австрії — той самий маршрут через сто років</li>
                <li>Відкриває Концерт №3 — і розуміє: це її історія</li>
                <li>2027: виконує його на 100-річний ювілей прем'єри у Відні</li>
              </ul>
            </div>
          </div>

          {/* — Concert block + Quote — */}
          <div className="concert-wrap">
            <div className="concert-quote-col">
              <div className="quote-guillemet">«</div>
              <p className="quote-body">
                Революція забрала<br />в мене все —<br />
                батьківщину, майно<br />і безпеку.<br /><br />
                Лише музика<br />залишилася<br />зі мною.
              </p>
              <div className="quote-rule" />
              <p className="quote-attr">— Сергій Борткевич</p>
            </div>
            <div className="concert-details-col">
              <h3 className="concert-heading">
                Концерт № 3<br />до мінор, Op. 32
              </h3>
              <p className="concert-tagline">
                <em>"Per aspera ad astra" — через терни до зірок</em>
              </p>
              <div className="concert-rule" />
              <dl className="concert-dl">
                <div className="concert-row">
                  <dt>Написано:</dt>
                  <dd>1926, Відень — у найважчий особистий момент</dd>
                </div>
                <div className="concert-row">
                  <dt>Прем'єра:</dt>
                  <dd>30 квітня 1927 · Wiener Symphoniker</dd>
                </div>
                <div className="concert-row">
                  <dt>Структура:</dt>
                  <dd>Grave → боротьба → урочистий фінал (Maestoso)</dd>
                </div>
                <div className="concert-row">
                  <dt>Характер:</dt>
                  <dd>Від скорботи через боротьбу — до внутрішнього світла</dd>
                </div>
                <div className="concert-row">
                  <dt>Унікальність:</dt>
                  <dd>Майже не виконується. Це живе відкриття для публіки</dd>
                </div>
              </dl>
            </div>
          </div>

          {/* — Why it matters — */}
          <div className="why-wrap">
            <h2 className="section-h">Чому це важливо</h2>
            <p className="section-sub">Не концерт. Подія, яка стане частиною культурної пам'яті.</p>
            <div className="why-grid">
              {[
                {
                  icon: '🎼',
                  title: 'Музика не зупиняється',
                  text: 'Борткевич писав Концерт №3 коли втратив все. Сьогодні молода піаністка виконує його — у схожій ситуації. Це не метафора. Це доказ того, що культура сильніша за руйнування.',
                },
                {
                  icon: '🏛️',
                  title: 'Живий міст між народами',
                  text: 'Австрія і Україна пов\'язані через цю музику ще з 1927 року. Цей концерт — не гастрольний тур. Це живий культурний діалог, якого обидві країни потребують саме зараз.',
                },
                {
                  icon: '💡',
                  title: 'Відродження забутого генія',
                  text: 'Борткевич майже невідомий широкій публіці, хоча його музика — із найкращих у пізньому романтизмі. Цей проект повертає йому місце, якого він заслуговує.',
                },
                {
                  icon: '⭐',
                  title: 'Момент, який відбудеться раз',
                  text: '2027 рік: 150 років від народження і 100 років від прем\'єри. Харківська піаністка в Австрії. Це унікальне перетинання обставин, яке більше не повториться.',
                },
              ].map(card => (
                <div key={card.title} className="why-card">
                  <span className="why-icon">{card.icon}</span>
                  <h4 className="why-title">{card.title}</h4>
                  <p className="why-text">{card.text}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── Culture_U ── */}
      <section className="section section-navy" id="culture">
        <div className="container">
          <div className="culture-grid">
            <div className="culture-left">
              <div className="culture-logo-box">
                <span className="culture-logo-sym">✦</span>
                <span className="culture-logo-txt">CULTURE_U</span>
              </div>
              <p className="culture-who">Хто ми</p>
              <p className="culture-note">
                [Тут буде ваш короткий опис проекту Culture U — місія, цінності, діяльність]
              </p>
            </div>
            <div className="culture-right">
              <h2 className="culture-heading">
                CULTURE_U<br /><strong>представляє</strong>
              </h2>
              <div className="rule-gold" />
              <p className="culture-desc">
                Culture U — це платформа, що повертає українську культурну спадщину
                до живого діалогу з сучасним світом.
              </p>
              <div className="pillars">
                {[
                  { icon: '🎵', label: 'Повернення\nзабутого' },
                  { icon: '🌍', label: 'Діалог\nкультур' },
                  { icon: '✨', label: 'Живе\nмистецтво' },
                ].map(p => (
                  <div key={p.label} className="pillar">
                    <div className="pillar-icon">{p.icon}</div>
                    <p className="pillar-label">{p.label.replace('\n', '\u00A0')}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Partners ── */}
      <section className="section section-cream" id="partners">
        <div className="container">
          <h2 className="section-h">Партнери</h2>
          <div className="rule-gold centered-rule" />
          <p className="section-sub dark">Організації та інституції, що підтримують проект</p>
          <div className="partners-grid">
            {Array.from({ length: 6 }, (_, i) => (
              <div key={i} className="partner-card light">
                <div className="partner-logo-area">Логотип партнера {i + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Info Partners ── */}
      <section className="section section-navy" id="info-partners">
        <div className="container">
          <h2 className="section-h light">Інфопартнери</h2>
          <div className="rule-gold centered-rule" />
          <p className="section-sub light">Медіа та комунікаційні партнери проекту</p>
          <div className="partners-grid">
            {Array.from({ length: 4 }, (_, i) => (
              <div key={i} className="partner-card dark">
                <div className="partner-logo-area">Логотип інфопартнера {i + 1}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact ── */}
      <section className="section section-cream" id="contact">
        <div className="container">
          <h2 className="section-h">Контакти</h2>
          <div className="rule-gold centered-rule" />
          <p className="section-sub dark">Зв'яжіться з нами для партнерства або отримання інформації</p>
          <div className="contact-grid">
            <div className="contact-info">
              {[
                { icon: '✉', text: 'info@cultureu.org' },
                { icon: '📍', text: 'Харків · Відень' },
                { icon: '🌐', text: 'cultureu.org' },
              ].map(item => (
                <div key={item.text} className="contact-item">
                  <span className="contact-icon">{item.icon}</span>
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
            {formSent ? (
              <div className="contact-thanks">
                <p>Дякуємо! Ми зв'яжемося з вами найближчим часом.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  placeholder="Ваше ім'я"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  required
                />
                <textarea
                  placeholder="Повідомлення"
                  rows={5}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  required
                />
                <button type="submit" className="btn-gold">Надіслати</button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="footer">
        <div className="container footer-inner">
          <p className="footer-brand">✦ CULTURE_U</p>
          <p className="footer-sub">Per Aspera ad Astra · © 2027</p>
          <p className="footer-sub">Харків · Відень</p>
        </div>
      </footer>

    </div>
  )
}
