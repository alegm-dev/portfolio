import React from "react";

const achievementsContent = [
  { title: "En busqueda", subTitle1: "de mi primer", subTitle2: "trabajo" },
  { title: "10", subTitle1: "proyectos personales", subTitle2: "completados" },
];

const Achievements = () => {
  return (
    <div className="row">
      {achievementsContent.map((val, i) => (
        <div className="col-12" key={i}>
          <div className="box-stats with-margin text-center">
            <h3 className="poppins-font position-relative">{val.title}</h3>
            <p className="open-sans-font m-0 position-relative text-uppercase">
              {val.subTitle1} <span className="d-block">{val.subTitle2}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
