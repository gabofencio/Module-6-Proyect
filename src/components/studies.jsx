import React from "react";
import { GraduationCap } from "lucide-react";
function Studies() {
  const studies = [
    {
      date: "2025 — ACTUALIDAD",
      title: "Máster en Frontend asistido con IA",
      place: "DEV.F · Bécalos / Fundación Traxión",
      text: "Formación enfocada en desarrollo frontend, JavaScript, Angular, React, Git/GitHub y herramientas modernas de desarrollo asistido."
    },
    {
      date: "FORMACIÓN PROFESIONAL",
      title: "Ingeniería Mecatrónica",
      place: "Formación universitaria",
      text: "Base multidisciplinaria en mecánica, electrónica, automatización, diseño y resolución de problemas de ingeniería."
    }
  ];

  return (
    <section className="page section">
      <p className="eyebrow">ESTUDIOS</p>
      <div className="page-header">
        <h1>Aprender.<br /><span>Construir. Repetir.</span></h1>
        <p>Mi formación combina ingeniería tradicional con desarrollo de software.</p>
      </div>

      <div className="timeline">
        {studies.map((item, i) => (
          <article className="timeline-item" key={item.title}>
            <div className="timeline-number">0{i + 1}</div>
            <div>
              <p className="timeline-date">{item.date}</p>
              <h2>{item.title}</h2>
              <h3>{item.place}</h3>
              <p>{item.text}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="learning-box">
        <GraduationCap size={28} />
        <div>
          <p className="eyebrow">ACTUALMENTE</p>
          <h2>Holaaaaaaaa.</h2>
          <p>React · TypeScript · UI/UX · APIs · Arquitectura frontend</p>
        </div>
      </div>
    </section>
  );
}
export default Studies;