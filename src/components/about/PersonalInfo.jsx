import React from "react";

const personalInfoContent = [
  { meta: "Nombre", metaInfo: "Alejandro" },
  { meta: "Apellido", metaInfo: "Martinez" },
  { meta: "Años", metaInfo: "28" },
  { meta: "Nacionalidad", metaInfo: "Argentina" },
  { meta: "Ciudad", metaInfo: "Buenos Aires" },
  { meta: "Telefono", metaInfo: "+5491138516352" },
  { meta: "Email", metaInfo: "martinezalejandro.dev@gmail.com" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
