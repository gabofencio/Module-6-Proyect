import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Cpu,
  Code2,
  ChevronRight,
  BriefcaseBusiness,
} from "lucide-react";
function Home() {
  return (
    <>
      <section className="hero section">
        <div className="hero-copy">
          <p className="eyebrow">INGENIERO MECATRÓNICO · FRONTEND</p>
          <h1>Diseño ideas.<br /><span>Construyo soluciones.</span></h1>
          <p className="hero-text">
            Soy un ingeniero mecatrónico enfocado en diseño, tecnología y desarrollo
            web. Me gusta convertir problemas reales en interfaces y soluciones funcionales.
          </p>
          <div className="hero-actions">
            <Link className="button primary" to="/sobre-mi">Conóceme <ArrowUpRight size={18} /></Link>
            <a className="button secondary" href="mailto:gastelum.gabriel.3m@gmail.com">Hablemos</a>
          </div>
        </div>

        <div className="hero-card">
          <div className="grid-bg" />
          <div className="code-card">
            <span className="code-muted">const</span> <span className="code-name">gabo</span> = {"{"}
            <div className="code-indent">role: <b>"Engineer"</b>,</div>
            <div className="code-indent">focus: <b>"Frontend"</b>,</div>
            <div className="code-indent">mindset: <b>"Skibidi"</b></div>
            {"}"};
          </div>
          <div className="floating-chip chip-one"><Cpu size={17} /> Mecatrónica</div>
          <div className="floating-chip chip-two"><Code2 size={17} /> React</div>
        </div>
      </section>

      <section className="section intro-grid">
        <div>
          <p className="eyebrow">01 / PERFIL</p>
          <h2>Una mezcla entre ingeniería y creatividad.</h2>
        </div>
        <div className="large-copy">
          <p>
            Mi experiencia comenzó en la industria, trabajando con diseño CAD,
            moldes, manufactura y procesos de ingeniería. Actualmente también
            estoy desarrollando habilidades en frontend para crear experiencias
            digitales modernas.
          </p>
          <Link className="text-link" to="/sobre-mi">Más sobre mí <ChevronRight size={17} /></Link>
        </div>
      </section>

      <section className="section cards-section">
        <div className="section-heading">
          <div>
            <p className="eyebrow">02 / LO QUE HAGO</p>
            <h2>Mi stack</h2>
          </div>
        </div>
        <div className="cards">
          <article className="info-card">
            <Code2 />
            <h3>Frontend</h3>
            <p>HTML, CSS, JavaScript, React, Angular y Git. Interfaces responsive y componentes reutilizables.</p>
          </article>
          <article className="info-card">
            <Cpu />
            <h3>Ingeniería</h3>
            <p>Diseño mecánico, software CAD, tolerancias GD&T, BOM, manufactura CNC y resolución de problemas.</p>
          </article>
          <article className="info-card">
            <BriefcaseBusiness />
            <h3>Proyectos</h3>
            <p>Construyo proyectos para practicar, aprender y convertir conceptos en productos funcionales.</p>
          </article>
        </div>
      </section>

      <section className="cta section">
        <p className="eyebrow">03 / SIGAMOS</p>
        <h2>¿Tienes un proyecto<br />en mente?</h2>
        <a href="mailto:gastelum.gabriel.3m@gmail.com" className="button primary">Contáctame <ArrowUpRight size={18} /></a>
      </section>
    </>
  );
}
export default Home;