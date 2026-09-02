import React from "react";
import pfp from "../ASSETS/IMG/pfp.jpg";

function About() {
  return (
    <section className="page section">
      <p className="eyebrow">SOBRE MÍ</p>
      <div className="page-header">
        <h1>Ingeniero con<br /><span>mentalidad de tung tung sahur.</span></h1>
        <p>
          Me apasiona la ingeniería, el diseño de soluciones ya sea industrialmente o digitalmente de problemáticas reales. Me gusta
          aprender cosas nuevas y aplicarlas en proyectos que reflejen mi crecimiento profesional.
        </p>
      </div>

      <div className="about-layout">
        <div className="portrait-placeholder">
          <div className="portrait-initials">Gabriel Gastelum</div>
          <span><img src={pfp} alt="Foto de perfil" className="portrait-image" /></span>
        </div>
        <div className="about-content">
          <p>
            Soy Ingeniero Mecatrónico con experiencia en diseño y release engineering,
            especialmente en el entorno automotriz. He trabajado con diseño de moldes
            para pistones de motores de combustión interna, documentación técnica,
            BOM, manufactura y pruebas.
          </p>
          <p>
            En paralelo, estoy fortaleciendo mi perfil como desarrollador frontend.
            Disfruto especialmente el proceso de pasar de una idea o diseño a una
            interfaz que se sienta rápida, clara y bien construida.
          </p>
          <div className="skill-list">
            {["SolidWorks", "AutoCAD", "CamWorks", "JavaScript", "React", "Angular", "Git / GitHub"].map(s => (
              <span key={s}>{s}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;