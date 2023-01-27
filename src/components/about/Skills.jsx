import React from "react";

const skillsContent = [
  { skillClass: "p50", skillPercent: "50", skillName: "HTML" },
  { skillClass: "p89", skillPercent: "89", skillName: "JAVASCRIPT" },
  { skillClass: "p70", skillPercent: "70", skillName: "CSS" },
  { skillClass: "p70", skillPercent: "70", skillName: "SASS" },
  { skillClass: "p50", skillPercent: "50", skillName: "JQUERY" },
  { skillClass: "p70", skillPercent: "70", skillName: "REACT" },
  { skillClass: "p50", skillPercent: "50", skillName: "FRAMER MOTION" },
  { skillClass: "p50", skillPercent: "50", skillName: "STYLED COMPONENT" },
  { skillClass: "p50", skillPercent: "50", skillName: "MUI MATERIAL" },
  { skillClass: "p50", skillPercent: "50", skillName: "BOOTSTRAP" },
  { skillClass: "p65", skillPercent: "65", skillName: "SQL" },
  { skillClass: "p45", skillPercent: "45", skillName: "FIREBASE" },
  { skillClass: "p50", skillPercent: "50", skillName: "GITHUB" },
  { skillClass: "p60", skillPercent: "60", skillName: "ADOBE PHOTOSHOP" },
  { skillClass: "p70", skillPercent: "70", skillName: "ADOBE LIGHTROOM" },
  { skillClass: "p80", skillPercent: "80", skillName: "ADOBE PREMIER PRO" },
  { skillClass: "p50", skillPercent: "50", skillName: "ADONE AFTER EFFECT" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
