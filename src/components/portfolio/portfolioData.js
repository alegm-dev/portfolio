import Image1 from "../../assets/img/portfolio/project-1.jpg";
import Image2 from "../../assets/img/portfolio/project-2.jpg";
import Image3 from "../../assets/img/portfolio/project-3.jpg";
import Image4 from "../../assets/img/portfolio/project-4.jpg";
import Image5 from "../../assets/img/portfolio/project-5.jpg";
import Image8 from "../../assets/img/portfolio/project-8.jpg";

const PortfolioData = [
  {
    id: 1,
    type: "Primer proyecto",
    image: Image1,
    tag: ["web"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "Website",
        client: "Proyecto Personal",
        language: "HTML, CSS, Javascript",
        preview: "boton-rojo",
        link: "https://boton-rojo.vercel.app/",
      },
    ],
  },
  {
    id: 2,
    type: "Generador QR",
    image: Image2,
    tag: ["app"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "Website",
        client: "Proyecto Personal",
        language: " HTML, CSS, Javascript, API",
        preview: "generador-codigo-qr",
        link: "https://generador-codigo-qr.vercel.app/",
      },
    ],
  },
  {
    id: 3,
    type: "E-commerce",
    image: Image3,
    tag: ["ecommerce"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Website",
        client: "Proyecto Personal",
        language: "React, Styled Component, FireBase",
        preview: "nikejordan",
        link: "https://nikejordan.vercel.app/",
      },
    ],
  },
  {
    id: 4,
    type: "The Weather",
    image: Image4,
    tag: ["app"],
    delayAnimation: "0",
    modalDetails: [
      {
        project: "app",
        client: "Proyecto Personal",
        language: "HTML, CSS, Bootstrap, Javascript, API",
        preview: "weather-app",
        link: "https://weather-app-alegm-dev.vercel.app",
      },
    ],
  },
  {
    id: 5,
    type: "Calculadora",
    image: Image5,
    tag: ["app"],
    delayAnimation: "100",
    modalDetails: [
      {
        project: "app",
        client: "Proyecto Personal",
        language: "HTML, CSS, Javascript",
        preview: "calculadora-app",
        link: "https://calculadora-app.vercel.app/",
      },
    ],
  },
  {
    id: 6,
    type: "Landing page",
    image: Image8,
    tag: ["web"],
    delayAnimation: "200",
    modalDetails: [
      {
        project: "Website",
        client: "Proyecto Personal",
        language: "HTML, CSS, Javascript",
        preview: "Burger King",
        link: "https://landing-page-phi-wheat.vercel.app/",
      },
    ],
  },
];

export default PortfolioData;
