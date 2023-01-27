import React from "react";

const educationContent = [
  {
    year: "2018",
    degree: "REPARADOR DE PC",
    institute: "ITUOM",
    details: `Desarmado y armado de CPU, cambio y limpieza de hardware, intalacion y mantenimiento de sistema operativo,rendimiento de hardware e instalaciones de software, `,
  },
  {
    year: "2019",
    degree: "PROGRAMACION INFORMATICA",
    institute: "UNSAM",
    details: `Por temas de horario de trabajo tuve que posponer para mas adelante los estudios.`,
  },

  {
    year: "2022",
    degree: "PROGRAMADOR REACT",
    institute: "CODERHOUSE",
    details: `Instalacion y configuracion del entorno, JSX, transpiling, componenetes,promises,asincronia, API's, routing, navegacion,eventos,context, tecnicas de rendering, firebase y desarrollo de pagina e-commerce`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
